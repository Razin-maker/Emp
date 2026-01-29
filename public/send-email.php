<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = htmlspecialchars($data['name'] ?? '', ENT_QUOTES, 'UTF-8');
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars($data['message'] ?? '', ENT_QUOTES, 'UTF-8');

if (empty($name) || !$email || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid input data']);
    exit;
}

$envFile = __DIR__ . '/../.env.php';
if (!file_exists($envFile)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Configuration not found']);
    exit;
}

$env = parse_ini_file($envFile);
$smtp_host = $env['SMTP_HOST'];
$smtp_port = $env['SMTP_PORT'];
$smtp_user = $env['SMTP_USERNAME'];
$smtp_pass = $env['SMTP_PASSWORD'];
$admin_email = $env['ADMIN_EMAIL'];

function sendEmail($socket, $from, $to, $subject, $body, &$error) {
    fputs($socket, "MAIL FROM: <$from>\r\n");
    $resp = fgets($socket, 515);
    if (substr($resp, 0, 3) !== '250') {
        $error = "MAIL FROM failed: $resp";
        return false;
    }
    
    fputs($socket, "RCPT TO: <$to>\r\n");
    $resp = fgets($socket, 515);
    if (substr($resp, 0, 3) !== '250') {
        $error = "RCPT TO failed for $to: $resp";
        return false;
    }
    
    fputs($socket, "DATA\r\n");
    $resp = fgets($socket, 515);
    if (substr($resp, 0, 3) !== '354') {
        $error = "DATA failed: $resp";
        return false;
    }
    
    $email = "From: $from\r\n";
    $email .= "To: $to\r\n";
    $email .= "Subject: $subject\r\n";
    $email .= "MIME-Version: 1.0\r\n";
    $email .= "Content-Type: text/html; charset=UTF-8\r\n";
    $email .= "\r\n$body\r\n.\r\n";
    
    fputs($socket, $email);
    $resp = fgets($socket, 515);
    if (substr($resp, 0, 3) !== '250') {
        $error = "Send failed: $resp";
        return false;
    }
    return true;
}

try {
    $socket = fsockopen($smtp_host, $smtp_port, $errno, $errstr, 30);
    if (!$socket) throw new Exception("Connection failed: $errstr");
    
    if (substr(fgets($socket, 515), 0, 3) !== '220') throw new Exception('SMTP error');
    
    fputs($socket, "EHLO " . $_SERVER['SERVER_NAME'] . "\r\n");
    do { $response = fgets($socket, 515); } while (substr($response, 3, 1) === '-');
    
    fputs($socket, "STARTTLS\r\n");
    if (substr(fgets($socket, 515), 0, 3) !== '220') throw new Exception('STARTTLS failed');
    
    if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
        throw new Exception('TLS failed');
    }
    
    fputs($socket, "EHLO " . $_SERVER['SERVER_NAME'] . "\r\n");
    do { $response = fgets($socket, 515); } while (substr($response, 3, 1) === '-');
    
    fputs($socket, "AUTH LOGIN\r\n");
    if (substr(fgets($socket, 515), 0, 3) !== '334') throw new Exception('AUTH failed');
    
    fputs($socket, base64_encode($smtp_user) . "\r\n");
    if (substr(fgets($socket, 515), 0, 3) !== '334') throw new Exception('Username failed');
    
    fputs($socket, base64_encode($smtp_pass) . "\r\n");
    if (substr(fgets($socket, 515), 0, 3) !== '235') throw new Exception('Password failed');
    
    // Admin email
    $admin_body = "<h2>New Contact Form Submission</h2><p><strong>Name:</strong> $name</p><p><strong>Email:</strong> $email</p><p><strong>Message:</strong></p><p>$message</p>";
    $error = '';
    if (!sendEmail($socket, $smtp_user, $admin_email, 'New Contact Form Submission - EMP', $admin_body, $error)) {
        throw new Exception("Admin email to $admin_email failed: $error");
    }
    
    // Customer email
    $user_body = "<h2>Thank you for reaching out!</h2><p>Hi $name,</p><p>We have received your message and will get back to you soon.</p><p><strong>Your message:</strong></p><p>$message</p><br><p>Best regards,<br>EMP Team</p>";
    $error = '';
    if (!sendEmail($socket, $smtp_user, $email, 'Thank you for contacting EMP', $user_body, $error)) {
        throw new Exception("Customer email to $email failed: $error");
    }
    
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    
    echo json_encode([
        'success' => true, 
        'message' => 'Emails sent successfully',
        'admin_email' => $admin_email,
        'customer_email' => $email
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email: ' . $e->getMessage()]);
}

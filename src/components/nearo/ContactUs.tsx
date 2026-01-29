import { motion } from 'framer-motion';
import { useState } from 'react';
import githubLogo from '../../assets/GitHub-Logo.wine.svg';
import gmailLogo from '../../assets/Gmail-Logo.wine.png';
import facebookLogo from '../../assets/Facebook-f_Logo-Blue-Logo.wine.svg';

export const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const response = await fetch('https://emp.sohub.com.bd/send-email.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            
            if (data.success) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <section id="contact" className="py-32 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold mb-4 text-slate-900">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Have questions about EMP? Want to contribute? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Cards */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow bg-white"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                                    <img src={githubLogo} alt="GitHub" className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-slate-900">GitHub</h3>
                                    <p className="text-gray-600 text-sm mb-3">Contribute to the project</p>
                                    <a href="https://github.com/Employee-Max-Portal" className="font-medium hover:underline" style={{ color: '#50a7e3' }}>
                                        github.com/Employee-Max-Portal
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow bg-white"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                                    <img src={facebookLogo} alt="Facebook" className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-slate-900">Facebook Community</h3>
                                    <p className="text-gray-600 text-sm mb-3">Join our discussions</p>
                                    <a href="https://www.facebook.com/share/g/1ApGJkawDp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" style={{ color: '#50a7e3' }}>
                                        Join Facebook Group
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow bg-white"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                                    <img src={gmailLogo} alt="Gmail" className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 text-slate-900">Email</h3>
                                    <p className="text-gray-600 text-sm mb-3">Direct support</p>
                                    <a href="mailto:hello@emp.dev" className="font-medium hover:underline" style={{ color: '#50a7e3' }}>
                                        tech@sohub.com.bd
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-50 rounded-2xl p-8"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#50a7e3] focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#50a7e3] focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell us about your project or question..."
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#50a7e3] focus:border-transparent outline-none transition-all resize-none"
                                ></textarea>
                            </div>
                            {status && (
                                <div className={`text-sm font-medium ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                                    {status}
                                </div>
                            )}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 rounded-lg text-white font-medium transition-colors disabled:opacity-50"
                                style={{ backgroundColor: '#50a7e3' }}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

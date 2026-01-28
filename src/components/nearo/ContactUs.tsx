import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Github } from 'lucide-react';

export const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        
        try {
            const response = await fetch('http://localhost:9000/send-mail.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Get in Touch</h2>
                        <p className="text-xl text-gray-600 mb-12">Have questions about EMP? Want to contribute? We'd love to hear from you.</p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Github className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">GitHub</h3>
                                    <p className="text-gray-600">Contribute to the project</p>
                                    <a href="https://github.com/Razin-maker/Emp" className="text-blue-600 hover:underline text-sm">github.com/Razin-maker/Emp</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MessageSquare className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Community</h3>
                                    <p className="text-gray-600">Join our discussions</p>
                                    <a href="#community" className="text-blue-600 hover:underline text-sm">Join Discord</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                                    <p className="text-gray-600">Direct support</p>
                                    <a href="mailto:hello@emp.dev" className="text-blue-600 hover:underline text-sm">hello@emp.dev</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">Name</label>
                                <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Your name" required />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">Email</label>
                                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="your@email.com" required />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">Message</label>
                                <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none" placeholder="Tell us about your project or question..." required />
                            </div>

                            <button type="submit" disabled={status === 'sending'} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50">
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            
                            {status === 'success' && <p className="text-green-600 text-center font-medium">Message sent successfully!</p>}
                            {status === 'error' && <p className="text-red-600 text-center font-medium">Failed to send. Please try again.</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

import React from 'react';

export const ContactUs = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-[48px] font-semibold mb-6 text-slate-900 leading-tight">
                    Ready to Execute With Confidence?
                </h2>
                
                <p className="text-[20px] text-gray-700 mb-4 leading-relaxed">
                    Use EMP to build a system where work is visible, ownership is clear, and teams stay aligned.
                </p>
                
                <p className="text-[18px] text-gray-600 mb-12 leading-relaxed">
                    Join the open-source community and help shape how teams execute.
                </p>

<<<<<<< HEAD
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(76, 159, 215, 0.1)' }}>
                                    <Github className="w-6 h-6" style={{ color: '#4c9fd7' }} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">GitHub</h3>
                                    <p className="text-gray-600">Contribute to the project</p>
                                    <a href="https://github.com/Razin-maker/Emp" className="hover:underline text-sm" style={{ color: '#4c9fd7' }}>github.com/Razin-maker/Emp</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(76, 159, 215, 0.1)' }}>
                                    <MessageSquare className="w-6 h-6" style={{ color: '#4c9fd7' }} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Community</h3>
                                    <p className="text-gray-600">Join our discussions</p>
                                    <a href="#community" className="hover:underline text-sm" style={{ color: '#4c9fd7' }}>Join Discord</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(76, 159, 215, 0.1)' }}>
                                    <Mail className="w-6 h-6" style={{ color: '#4c9fd7' }} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                                    <p className="text-gray-600">Direct support</p>
                                    <a href="mailto:hello@emp.dev" className="hover:underline text-sm" style={{ color: '#4c9fd7' }}>hello@emp.dev</a>
                                </div>
                            </div>
=======
                <div className="flex items-center justify-center gap-4 mb-16">
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-base font-medium shadow-xl hover:bg-slate-800 transition-colors">
                        Get EMP on GitHub
                    </button>
                    <button className="bg-white text-slate-900 border-2 border-slate-900 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-colors">
                        Join the Community
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                            <span className="text-3xl">📚</span>
>>>>>>> e50032a59c6553ee3ca32bc7b76d78ed63f3ba8b
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Documentation</h3>
                        <p className="text-gray-600 text-sm">Clear installation guides and module docs</p>
                    </div>

<<<<<<< HEAD
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">Name</label>
                                <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 outline-none transition-all" style={{ focusBorderColor: '#4c9fd7', focusRingColor: 'rgba(76, 159, 215, 0.1)' }} placeholder="Your name" required />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">Email</label>
                                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 outline-none transition-all" style={{ focusBorderColor: '#4c9fd7', focusRingColor: 'rgba(76, 159, 215, 0.1)' }} placeholder="your@email.com" required />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">Message</label>
                                <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 outline-none transition-all resize-none" style={{ focusBorderColor: '#4c9fd7', focusRingColor: 'rgba(76, 159, 215, 0.1)' }} placeholder="Tell us about your project or question..." required />
                            </div>

                            <button type="submit" disabled={status === 'sending'} className="w-full text-white py-4 rounded-xl font-bold transition-colors shadow-lg hover:shadow-xl disabled:opacity-50" style={{ backgroundColor: '#4c9fd7' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3a8bc4'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4c9fd7'}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            
                            {status === 'success' && <p className="text-green-600 text-center font-medium">Message sent successfully!</p>}
                            {status === 'error' && <p className="text-red-600 text-center font-medium">Failed to send. Please try again.</p>}
                        </form>
                    </motion.div>
=======
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                            <span className="text-3xl">💬</span>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Community</h3>
                        <p className="text-gray-600 text-sm">Community-driven improvements</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                            <span className="text-3xl">🤝</span>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Contribute</h3>
                        <p className="text-gray-600 text-sm">Contribution guidelines available</p>
                    </div>
>>>>>>> e50032a59c6553ee3ca32bc7b76d78ed63f3ba8b
                </div>
            </div>
        </section>
    );
};

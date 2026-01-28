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
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Documentation</h3>
                        <p className="text-gray-600 text-sm">Clear installation guides and module docs</p>
                    </div>

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
                </div>
            </div>
        </section>
    );
};

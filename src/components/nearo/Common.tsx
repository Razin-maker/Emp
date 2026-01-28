import React from 'react';
import { cn } from '../../lib/utils'; // Ensure cn is imported if used, otherwise remove it

export const Testimonials = () => {
    return (
        <section className="py-24 bg-nearo-gray overflow-hidden">
            <h2 className="text-center text-3xl font-bold mb-16 text-slate-900">Loved by teams everywhere</h2>
            <div className="flex gap-6 overflow-x-auto pb-10 px-6 snap-x">
                {/* Mock Testimonial Cards */}
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm snap-center border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full" />
                            <div>
                                <p className="font-bold text-slate-900">User Name</p>
                                <p className="text-sm text-gray-500">Product Designer</p>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            "Nearo has completely transformed how we handle our tasks. The animations are buttery smooth."
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export const Footer = () => {
    return (
        <footer className="bg-[#050505] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold">N</div>
                        <span className="text-xl font-bold">Nearo</span>
                    </div>
                    <p className="text-gray-500 max-w-sm">
                        Experience smooth task management like never before.
                        Built with care by Temlis.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-gray-300">Product</h4>
                    <ul className="space-y-4 text-gray-500">
                        <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-gray-300">Company</h4>
                    <ul className="space-y-4 text-gray-500">
                        <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-900 text-center text-gray-600">
                © {new Date().getFullYear()} Nearo Inc. All rights reserved.
            </div>
        </footer>
    );
}

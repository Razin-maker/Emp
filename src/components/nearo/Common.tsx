import React from 'react';
import { cn } from '../../lib/utils'; // Ensure cn is imported if used, otherwise remove it
import logoImage from '../../assets/EMP_Logo_1-removebg-preview.png';
import sohubLogo from '../../assets/ace41ae7-2ae1-4476-85cf-1d1637a02cb0.png';

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
        <footer className="bg-[#050505] text-white py-8 px-6">
            <div className="max-w-7xl mx-auto flex justify-between items-start gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img src={logoImage} alt="EMP Logo" className="h-10 brightness-0 invert" />
                    </div>
                    <p className="text-gray-500 max-w-sm mb-2">
                        Open Source Execution Management Platform
                    </p>
                    <p className="text-gray-400 text-sm">
                        Clarity • Accountability • Transparency
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-gray-300">Resources</h4>
                    <ul className="space-y-3 text-gray-500">
                        <li><a href="https://github.com/Employee-Max-Portal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                        <li><a href="https://www.facebook.com/share/g/1ApGJkawDp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook Community</a></li>
                        <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-gray-900 flex items-center justify-between text-gray-600">
                <div>© 2025 EMP Open Source Project</div>
                <a href="https://sohub.com.bd/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-400 transition-colors">
                    <img src={sohubLogo} alt="SOHUB" className="h-6 brightness-0 invert" />
                    <span>Solution Hub Technologies (SOHUB) Owned & Operated</span>
                </a>
            </div>
        </footer>
    );
}

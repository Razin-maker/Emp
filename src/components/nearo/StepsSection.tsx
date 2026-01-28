import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';
import taskImage from '../../assets/task.png';

export const StepsSection = () => {
    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left Side: Title and Description - Sticky */}
                    <div className="sticky top-32 self-start">
                        <h2 className="text-5xl font-semibold mb-6 text-slate-900">
                            Get started in<br />3 simple steps.
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Explore the features designed to keep you organized and on track.
                        </p>
                    </div>

                    {/* Right Side: Timeline with Steps */}
                    <div className="relative">
                        {/* Vertical dashed line */}
                        <div className="absolute left-[15px] top-8 bottom-8 w-[2px] border-l-2 border-dashed border-gray-300"></div>

                        {/* Step 1 */}
                        <div className="relative mb-32">
                            <div className="absolute left-0 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                                1
                            </div>
                            <div className="ml-16">
                                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                                    <div className="relative w-[240px] mx-auto overflow-hidden h-[280px]">
                                        <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>
                                            <div className="bg-[#F5F5F0] rounded-[2.5rem] overflow-hidden relative" style={{ height: '600px' }}>
                                                <div className="flex items-center justify-between px-6 pt-3 pb-2">
                                                    <span className="text-xs font-semibold">9:41</span>
                                                    <div className="flex items-center gap-1">
                                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h4v16H2zm6 0h4v16H8zm6 0h4v16h-4zm6 0h4v16h-4z" /></svg>
                                                    </div>
                                                </div>
                                                <img src={taskImage} alt="App" className="w-full h-auto" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-10"></div>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <h3 className="text-xl font-semibold mb-2">Download Appo</h3>
                                        <p className="text-gray-600 text-sm">Appo is available on App Store and Play Store.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative mb-32">
                            <div className="absolute left-0 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                                2
                            </div>
                            <div className="ml-16">
                                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                                        <div>
                                            <p className="font-semibold text-lg">Laura Munar</p>
                                            <p className="text-gray-600 text-sm">lauramunar@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="text-center mt-6">
                                        <h3 className="text-xl font-semibold mb-2">Create Account</h3>
                                        <p className="text-gray-600 text-sm">Sign up with your email to get started.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <div className="absolute left-0 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                                3
                            </div>
                            <div className="ml-16">
                                <div className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center">
                                    <div className="text-5xl mb-4">🎉</div>
                                    <h3 className="text-xl font-semibold mb-2">Start Using</h3>
                                    <p className="text-gray-600 text-sm">Begin managing your tasks efficiently.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

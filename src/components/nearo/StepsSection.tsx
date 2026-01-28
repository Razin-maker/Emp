import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';
import taskImage from '../../assets/task.png';
import githubLogo from '../../assets/GitHub-Logo.wine.svg';
import serverGif from '../../assets/dedicated-server.gif';
import databaseGif from '../../assets/data-collection.gif';

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
                                <div className="rounded-3xl p-8 shadow-sm bg-white">
                                    <div className="text-center">
                                        <img src={githubLogo} alt="GitHub" className="w-24 h-24 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold mb-2">Clone from GitHub</h3>
                                        <p className="text-gray-600 text-sm">Get the EMP source code from our GitHub repository.</p>
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
                                <div className="rounded-3xl p-8 shadow-sm text-center bg-white">
                                    <img src={serverGif} alt="Server" className="w-24 h-24 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Deploy in your server</h3>
                                    <p className="text-gray-600 text-sm">Set up EMP on your own infrastructure.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <div className="absolute left-0 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                                3
                            </div>
                            <div className="ml-16">
                                <div className="rounded-3xl p-8 shadow-sm text-center bg-white">
                                    <img src={databaseGif} alt="Database" className="w-24 h-24 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Set up the database</h3>
                                    <p className="text-gray-600 text-sm">Configure your database and start using EMP.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

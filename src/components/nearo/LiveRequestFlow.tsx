import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LiveRequestFlow = () => {
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev >= 4 ? 1 : prev + 1));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-slate-900">Manage Organization Systematically</h2>
                </motion.div>

                {/* Desktop View */}
                <div className="hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
                    >
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#50a7e3' }}>
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Leave Request Flow</h2>
                            </div>
                            <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">Leave Application</span>
                        </div>

                        <div className="relative">
                            {/* Progress Line Background */}
                            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" style={{ left: '40px', right: '40px' }}></div>
                            
                            {/* Animated Progress Lines */}
                            {currentStep >= 2 && (
                                <motion.div
                                    key="line1"
                                    initial={{ width: 0 }}
                                    animate={{ width: 'calc(25% + 100px)' }}
                                    transition={{ duration: 1 }}
                                    className="absolute top-6 h-0.5"
                                    style={{ left: '40px', backgroundColor: '#50a7e3' }}
                                />
                            )}
                            {currentStep >= 3 && (
                                <motion.div
                                    key="line2"
                                    initial={{ width: 0 }}
                                    animate={{ width: 'calc(25% + 100px)' }}
                                    transition={{ duration: 1 }}
                                    className="absolute top-6 h-0.5"
                                    style={{ left: 'calc(25% + 40px)', backgroundColor: '#50a7e3' }}
                                />
                            )}
                            {currentStep >= 4 && (
                                <motion.div
                                    key="line3"
                                    initial={{ width: 0 }}
                                    animate={{ width: 'calc(25% + 185px)' }}
                                    transition={{ duration: 1 }}
                                    className="absolute top-6 h-0.5"
                                    style={{ left: 'calc(50% + 40px)', backgroundColor: '#50a7e3' }}
                                />
                            )}

                            {/* Steps */}
                            <div className="grid grid-cols-4 gap-4 relative">
                                {[
                                    { step: 1, title: 'Request Sent', status: 'completed', time: '2 min ago', icon: '✓' },
                                    { step: 2, title: 'Manager Review', status: 'in-progress', time: 'In progress', icon: '2' },
                                    { step: 3, title: 'HR Approval', status: 'waiting', time: 'Waiting', icon: '3' },
                                    { step: 4, title: 'Approved', status: 'pending', time: '—', icon: '4' }
                                ].map((item, index) => {
                                    const isCompleted = item.step < currentStep;
                                    const isActive = item.step === currentStep;
                                    return (
                                        <motion.div
                                            key={item.step}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.15 }}
                                            className="flex flex-col items-center text-center"
                                        >
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold mb-3 transition-all ${
                                                isCompleted || isActive
                                                    ? 'text-white shadow-lg' 
                                                    : 'bg-gray-100 text-gray-400'
                                            } ${isActive ? 'animate-pulse' : ''}`}
                                            style={(isCompleted || isActive) ? { 
                                                backgroundColor: '#50a7e3'
                                            } : undefined}
                                            >
                                                {isCompleted ? '✓' : item.icon}
                                            </div>
                                            <h3 className={`font-semibold mb-1 ${
                                                !isCompleted && !isActive ? 'text-gray-400' : 'text-gray-900'
                                            }`}>
                                                {item.title}
                                            </h3>
                                            <p className={`text-sm ${
                                                isActive ? 'font-medium' : 'text-gray-500'
                                            }`}
                                            style={isActive ? { color: '#50a7e3' } : undefined}
                                            >
                                                {isActive ? 'In progress' : isCompleted ? 'Completed' : item.time}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#50a7e3' }}>
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-slate-900">Live Request Flow</h2>
                            </div>
                        </div>
                        <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full inline-block mb-6">Leave Application</div>

                        <div className="relative pl-8">
                            {/* Vertical Line Background */}
                            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                            
                            {/* Animated Vertical Progress Lines */}
                            {currentStep >= 2 && (
                                <motion.div
                                    key="vline1"
                                    initial={{ height: 0 }}
                                    animate={{ height: 'calc(33.33% + 10px)' }}
                                    transition={{ duration: 1 }}
                                    className="absolute left-5 w-0.5"
                                    style={{ top: '1px', backgroundColor: '#50a7e3' }}
                                />
                            )}
                            {currentStep >= 3 && (
                                <motion.div
                                    key="vline2"
                                    initial={{ height: 0 }}
                                    animate={{ height: 'calc(33.33%)' }}
                                    transition={{ duration: 1 }}
                                    className="absolute left-5 w-0.5"
                                    style={{ top: 'calc(34.33% + 1px)', backgroundColor: '#50a7e3' }}
                                />
                            )}
                            {currentStep >= 4 && (
                                <motion.div
                                    key="vline3"
                                    initial={{ height: 0 }}
                                    animate={{ height: 'calc(33.33%)' }}
                                    transition={{ duration: 1 }}
                                    className="absolute left-5 w-0.5"
                                    style={{ top: 'calc(66.66% + 1px)', backgroundColor: '#50a7e3' }}
                                />
                            )}

                            {/* Steps */}
                            <div className="space-y-8">
                                {[
                                    { step: 1, title: 'Request Sent', status: 'completed', time: '2 min ago', icon: '✓' },
                                    { step: 2, title: 'Manager Review', status: 'in-progress', time: 'In progress', icon: '2' },
                                    { step: 3, title: 'HR Approval', status: 'waiting', time: 'Waiting', icon: '3' },
                                    { step: 4, title: 'Approved', status: 'pending', time: '—', icon: '4' }
                                ].map((item, index) => {
                                    const isCompleted = item.step < currentStep;
                                    const isActive = item.step === currentStep;
                                    return (
                                        <motion.div
                                            key={item.step}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.15 }}
                                            className="flex items-start gap-4 relative"
                                        >
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all relative z-10 ${
                                                isCompleted || isActive
                                                    ? 'text-white shadow-lg' 
                                                    : 'bg-gray-100 text-gray-400'
                                            } ${isActive ? 'animate-pulse' : ''}`}
                                            style={(isCompleted || isActive) ? { 
                                                backgroundColor: '#50a7e3'
                                            } : undefined}
                                            >
                                                {isCompleted ? '✓' : item.icon}
                                            </div>
                                            <div className="flex-1 pt-1">
                                                <h3 className={`font-semibold mb-0.5 ${
                                                    !isCompleted && !isActive ? 'text-gray-400' : 'text-gray-900'
                                                }`}>
                                                    {item.title}
                                                </h3>
                                                <p className={`text-sm ${
                                                    isActive ? 'font-medium' : 'text-gray-500'
                                                }`}
                                                style={isActive ? { color: '#50a7e3' } : undefined}
                                                >
                                                    {isActive ? 'In progress' : isCompleted ? 'Completed' : item.time}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

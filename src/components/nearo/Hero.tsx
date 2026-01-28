import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Hero = () => {
    const [isAlternate, setIsAlternate] = useState(false);

    return (
        <section className="relative min-h-[90vh] pt-[37px] px-[37px] pb-0">
            {/* Background Card with Rounded Corners and Gradient */}
            <div
                className="relative rounded-3xl overflow-hidden pb-0"
                style={{
                    background: '#50a7e3',
                    minHeight: 'calc(160vh - 37px)'
                }}
            >
                {/* Gradient Overlay - Darker at Bottom */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%)'
                    }}
                />

                {/* Navbar Content Inside Card */}
                <div className="max-w-7xl mx-auto relative z-10 pt-6 pb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold border border-white/30 backdrop-blur-sm">
                            😊
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Nearo</span>
                    </div>
                    <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
                        TEMLIS
                    </button>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <AnimatePresence mode="wait">
                        <HeroVariant1 key="v1" />
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const HeroVariant1 = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
    >
        {/* Stacked Badges */}
        <div className="flex flex-col items-center gap-2 mb-8">
            <span className="bg-brand-yellow text-black text-[10px] font-bold px-3 py-1 rounded-[4px] uppercase tracking-wider shadow-sm">Swap Hero 👋</span>
            <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-white/30">Coming Soon</span>
        </div>

        <h1 className="text-5xl md:text-[72px] font-medium tracking-tight text-white mb-6 max-w-5xl leading-[1.1]">
            Stay on top of every task, effortlessly
        </h1>

        <p className="text-xl text-white/80 mb-10 max-w-2xl font-normal">
            Simplify your workflow, collaborate with your team, and get more done — all in one app.
        </p>

        <div className="flex items-center gap-4 mb-20">
            <button className="bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wide shadow-xl hover:bg-gray-50 transition-colors w-[180px] h-[48px]">
                Download Now
            </button>
            <button className="bg-transparent backdrop-blur-sm text-white border border-white/40 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-white/10 transition-colors w-[180px] h-[48px]">
                Learn More
            </button>
        </div>

        {/* iPhone Mockup - Half View with Floating Cards */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full max-w-4xl mx-auto relative h-[550px] overflow-visible mt-12"
        >
            {/* Floating Wireframe Card - Left */}
            <div className="absolute left-0 top-40 bg-white rounded-2xl p-5 shadow-2xl w-72 z-20 border border-gray-100">
                <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Wireframe Homepage</h3>
                        <p className="text-sm text-gray-500 mb-3">Temlis</p>
                        <span className="inline-block bg-red-50 text-red-600 text-xs px-2.5 py-1 rounded-full font-medium">● High Priority</span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">Feb 20</span>
                </div>
            </div>

            {/* Floating Stats Card - Right */}
            <div className="absolute right-0 top-28 bg-white rounded-2xl p-5 shadow-2xl w-80 z-20 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium">Goals</p>
                        <p className="font-bold text-base">Rona Zepri</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p className="text-xs text-gray-500 mb-1.5 font-medium">Task</p>
                        <p className="text-3xl font-bold">10<span className="text-base text-gray-400 font-normal">/20</span></p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1.5 font-medium">Time</p>
                        <p className="text-3xl font-bold">10h<span className="text-base text-gray-400 font-normal">/20h</span></p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1.5 font-medium">Projects</p>
                        <p className="text-3xl font-bold">5<span className="text-base text-gray-400 font-normal">/10</span></p>
                    </div>
                </div>
            </div>

            {/* iPhone Frame - Cropped to show only top half */}
            <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[380px] overflow-hidden h-[480px]">
                <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                    {/* Dynamic Island */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>

                    {/* Screen */}
                    <div className="bg-[#F5F5F0] rounded-[2.5rem] overflow-hidden relative" style={{ height: '850px' }}>
                        {/* Status Bar */}
                        <div className="flex items-center justify-between px-8 pt-4 pb-2">
                            <span className="text-sm font-semibold">9:41</span>
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h4v16H2zm6 0h4v16H8zm6 0h4v16h-4zm6 0h4v16h-4z" /></svg>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17 4h-3V2h-4v2H7v2h10V4zm-3 18c.55 0 1-.45 1-1h-4c0 .55.45 1 1 1zm0-3c.55 0 1-.45 1-1H13c0 .55.45 1 1 1z" /></svg>
                            </div>
                        </div>

                        {/* App Content */}
                        <div className="px-6 py-4">
                            <h1 className="text-3xl font-bold text-gray-900 mb-6">My tasks</h1>

                            {/* TOP PRIORITY Section */}
                            <div className="mb-6">
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">TOP PRIORITY</p>

                                {/* Task 1 */}
                                <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 mb-1">Final Design Review</h3>
                                            <p className="text-sm text-gray-500 mb-2">Produlis App</p>
                                            <span className="inline-block bg-red-50 text-red-600 text-xs px-2 py-0.5 rounded-full">● High Priority</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Task 2 - Landing page */}
                                <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                                            <h3 className="font-medium text-gray-500">Landing page</h3>
                                        </div>
                                        <span className="text-xs text-gray-400">Feb 20</span>
                                    </div>
                                </div>
                            </div>

                            {/* DUE TODAY Section */}
                            <div className="mb-6">
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">DUE TODAY</p>

                                {/* Wireframe task in phone */}
                                <div className="bg-white rounded-2xl p-4 shadow-sm">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                                            <h3 className="font-medium text-gray-500">Wireframe Homepage</h3>
                                        </div>
                                        <span className="text-xs text-gray-400">Feb 20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

import { motion } from 'framer-motion';

export const ProblemSection = () => {
    const beforeProblems = [
        "Multiple tools for tasks & timesheets",
        "Missed deadlines due to poor visibility",
        "Manual updates and disconnected workflows",
        "Resource overload or idle time",
        "Confusing billing and stakeholder disputes",
        "No single view of project health",
        "Reactive decision-making"
    ];

    const afterSolutions = [
        "One integrated module for all",
        "Accurate timelines with real-time updates",
        "Real-time dashboards and alerts",
        "Smart allocation with availability insights",
        "Public timesheet links and transparent billing",
        "Centralized dashboard with key metrics",
        "Proactive control with instant insights"
    ];

    return (
        <section className="py-32 px-6 bg-gray-100">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[48px] font-semibold mb-4 text-slate-900 leading-tight">
                        Teams Don't Fail Because of People.<br />They Fail Because of Chaos.
                    </h2>
                </div>

                <div className="relative">
                    <div className="flex items-center justify-between">
                        {/* Before - Left Side */}
                        <div className="w-[380px] space-y-4">
                            <div className="bg-white rounded-2xl px-6 py-3 mb-6 shadow-sm inline-block">
                                <p className="text-base font-bold text-slate-900">
                                    Before CollabCRM <span className="text-xl">😟</span>
                                </p>
                            </div>
                            {beforeProblems.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                >
                                    <div className="bg-white border border-cyan-400 rounded-full px-5 py-2.5 text-[13px] text-cyan-600 font-normal shadow-sm inline-block">
                                        {problem}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Center - Chip */}
                        <div className="relative flex-shrink-0">
                            <motion.div
                                animate={{ 
                                    boxShadow: [
                                        '0 20px 60px rgba(168, 85, 247, 0.4)',
                                        '0 20px 80px rgba(168, 85, 247, 0.6)',
                                        '0 20px 60px rgba(168, 85, 247, 0.4)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="relative w-56 h-56 rounded-[2rem] bg-gradient-to-br from-purple-500 via-purple-400 to-orange-400 flex flex-col items-center justify-center"
                            >
                                {/* Chip pins - left side */}
                                <div className="absolute left-0 top-[25%] bottom-[25%] flex flex-col justify-around -ml-2">
                                    {[...Array(7)].map((_, i) => (
                                        <div key={`left-${i}`} className="w-3 h-1.5 bg-purple-700 rounded-r"></div>
                                    ))}
                                </div>
                                {/* Chip pins - right side */}
                                <div className="absolute right-0 top-[25%] bottom-[25%] flex flex-col justify-around -mr-2">
                                    {[...Array(7)].map((_, i) => (
                                        <div key={`right-${i}`} className="w-3 h-1.5 bg-purple-700 rounded-l"></div>
                                    ))}
                                </div>
                                {/* Logo */}
                                <div className="text-5xl mb-2">🔥</div>
                                <div className="text-white text-2xl font-bold tracking-wide">CollabCRM</div>
                            </motion.div>
                        </div>

                        {/* After - Right Side */}
                        <div className="w-[380px] space-y-4">
                            <div className="bg-white rounded-2xl px-6 py-3 mb-6 shadow-sm inline-block float-right">
                                <p className="text-base font-bold text-slate-900">
                                    <span className="text-xl">😊</span> After CollabCRM
                                </p>
                            </div>
                            <div className="clear-both"></div>
                            {afterSolutions.map((solution, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                    className="text-right"
                                >
                                    <div className="bg-white border border-purple-400 rounded-full px-5 py-2.5 text-[13px] text-purple-600 font-normal shadow-sm inline-block">
                                        {solution}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* SVG for all curved lines */}
                    <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
                        {/* Left side curves - each line to each pin */}
                        {beforeProblems.map((_, index) => {
                            const startY = 120 + (index * 52);
                            const chipCenterX = 700;
                            const chipWidth = 224;
                            const chipLeftEdge = chipCenterX - (chipWidth / 2) - 12;
                            const chipHeight = 224;
                            const chipTop = 200;
                            const pinsStart = chipTop + 70;
                            const pinsEnd = chipTop + chipHeight - 70;
                            const pinSpacing = (pinsEnd - pinsStart) / 6;
                            const pinY = pinsStart + (pinSpacing * index);
                            return (
                                <path
                                    key={`left-${index}`}
                                    d={`M 380 ${startY} C 480 ${startY}, 540 ${pinY}, ${chipLeftEdge} ${pinY}`}
                                    stroke="#22d3ee"
                                    strokeWidth="1.5"
                                    strokeDasharray="4 4"
                                    fill="none"
                                />
                            );
                        })}
                        {/* Right side curves - each line to each pin */}
                        {afterSolutions.map((_, index) => {
                            const startY = 120 + (index * 52);
                            const chipCenterX = 700;
                            const chipWidth = 224;
                            const chipRightEdge = chipCenterX + (chipWidth / 2) + 12;
                            const chipHeight = 224;
                            const chipTop = 200;
                            const pinsStart = chipTop + 70;
                            const pinsEnd = chipTop + chipHeight - 70;
                            const pinSpacing = (pinsEnd - pinsStart) / 6;
                            const pinY = pinsStart + (pinSpacing * index);
                            return (
                                <path
                                    key={`right-${index}`}
                                    d={`M 1020 ${startY} C 920 ${startY}, 860 ${pinY}, ${chipRightEdge} ${pinY}`}
                                    stroke="#c084fc"
                                    strokeWidth="1.5"
                                    strokeDasharray="4 4"
                                    fill="none"
                                />
                            );
                        })}
                    </svg>
                </div>

                <div className="text-center mt-20">
                    <div className="inline-block bg-slate-900 px-8 py-4 rounded-full shadow-lg">
                        <p className="text-[18px] font-semibold text-white">
                            When everything is scattered, execution breaks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

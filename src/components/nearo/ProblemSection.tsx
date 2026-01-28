import { motion } from 'framer-motion';

export const ProblemSection = () => {
    const beforeProblems = [
        "Work happens in chats, sheets, and tools that don't talk",
        "Managers don't know what's really moving",
        "HR becomes paperwork, not people",
        "Tasks get lost, ownership is unclear",
        "Rules exist, but no one follows them"
    ];

    const afterSolutions = [
        "EMP connects tasks, people, and workflows in one system",
        "EMP gives real-time visibility into execution",
        "EMP structures HR processes and lifecycle",
        "EMP tracks every task with clear ownership",
        "EMP enforces rules and SOPs automatically"
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
                                    Before EMP <span className="text-xl">😟</span>
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
                                        '0 20px 60px rgba(76, 159, 215, 0.4)',
                                        '0 20px 80px rgba(76, 159, 215, 0.6)',
                                        '0 20px 60px rgba(76, 159, 215, 0.4)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="relative w-56 h-56 rounded-[2rem] flex flex-col items-center justify-center"
                                style={{ backgroundColor: '#4c9fd7' }}
                            >
                                {/* Logo */}
                                <div className="text-white text-5xl font-bold tracking-wide">EMP</div>
                            </motion.div>
                        </div>

                        {/* After - Right Side */}
                        <div className="w-[380px] space-y-4">
                            <div className="bg-white rounded-2xl px-6 py-3 mb-6 shadow-sm inline-block float-right">
                                <p className="text-base font-bold text-slate-900">
                                    <span className="text-xl">😊</span> After EMP
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

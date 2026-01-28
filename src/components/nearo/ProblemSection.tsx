import { motion } from 'framer-motion';

export const ProblemSection = () => {
    const beforeProblems = [
        "Work lives in chats, sheets, and tools that don't talk to each other",
        "Managers can't see what's actually moving",
        "HR turns into paperwork instead of people",
        "Tasks get lost, ownership stays unclear",
        "Rules exist, but no one consistently follows them"
    ];

    const afterSolutions = [
        "Tasks, planners, and issues live in one place",
        "Real-time visibility into execution and progress",
        "HR processes are structured and traceable",
        "Every task has clear ownership and status",
        "Rules, SOPs, and approvals are enforced by the system"
    ];

    return (
        <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
            
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[56px] font-bold mb-6 text-slate-900 leading-tight">
                            Teams Don't Fail Because of People.<br />They Fail Because of Chaos.
                        </h2>
                    </motion.div>
                </div>

                <div className="relative">
                    <div className="flex items-center justify-between gap-12">
                        {/* Before - Left Side */}
                        <div className="w-[420px] space-y-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl px-8 py-4 mb-8 shadow-lg inline-block border border-red-100"
                            >
                                <p className="text-lg font-bold text-slate-900">
                                    Before EMP <span className="text-2xl">😟</span>
                                </p>
                            </motion.div>
                            {beforeProblems.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: "spring" }}
                                    whileHover={{ scale: 1.05, x: 10 }}
                                >
                                    <div className="bg-white border-2 border-red-300 rounded-2xl px-6 py-4 text-[15px] text-red-700 font-medium shadow-lg hover:shadow-xl transition-all inline-block">
                                        {problem}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Center - Logo */}
                        <div className="relative flex-shrink-0">
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-64 h-64 rounded-3xl flex flex-col items-center justify-center shadow-2xl"
                                style={{ 
                                    background: '#4c9fd7',
                                    boxShadow: '0 25px 50px -12px rgba(76, 159, 215, 0.5)'
                                }}
                            >
                                <div className="text-white text-6xl font-bold tracking-wide drop-shadow-lg">EMP</div>
                                <div className="absolute -inset-4 bg-blue-400 rounded-3xl blur-xl opacity-30 -z-10"></div>
                            </motion.div>
                        </div>

                        {/* After - Right Side */}
                        <div className="w-[420px] space-y-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl px-8 py-4 mb-8 shadow-lg inline-block float-right border border-green-100"
                            >
                                <p className="text-lg font-bold text-slate-900">
                                    <span className="text-2xl">😊</span> After EMP
                                </p>
                            </motion.div>
                            <div className="clear-both"></div>
                            {afterSolutions.map((solution, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: "spring" }}
                                    whileHover={{ scale: 1.05, x: -10 }}
                                    className="text-right"
                                >
                                    <div className="bg-white border-2 border-green-300 rounded-2xl px-6 py-4 text-[15px] text-green-700 font-medium shadow-lg hover:shadow-xl transition-all inline-block">
                                        {solution}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-24"
                >
                    <div className="inline-block bg-gradient-to-r from-slate-900 to-slate-700 px-10 py-5 rounded-full shadow-2xl">
                        <p className="text-[20px] font-semibold text-white">
                            When everything is fragmented, execution breaks.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

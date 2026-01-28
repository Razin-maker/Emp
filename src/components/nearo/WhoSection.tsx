import { motion } from 'framer-motion';

export const WhoSection = () => {
    const audiences = [
        {
            icon: "🎯",
            title: "Founders & Leadership",
            description: "Understand how the organization is executing — without micromanagement."
        },
        {
            icon: "👥",
            title: "Managers & Team Leads",
            description: "See progress, blockers, and ownership in real time."
        },
        {
            icon: "📋",
            title: "HR & Operations",
            description: "Run people processes with consistency, fairness, and visibility."
        },
        {
            icon: "💼",
            title: "Employees",
            description: "Know exactly what's expected and how work is evaluated."
        }
    ];

    return (
        <section className="py-32 px-6 bg-gray-100">
            <div className="max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold mb-4 text-slate-900">Who EMP Is For</h2>
                    <p className="text-[clamp(1rem,1.5vw,1.125rem)] text-gray-600">Built for Teams That Want Clarity</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {audiences.map((audience, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -8 }}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="text-4xl mb-4">{audience.icon}</div>
                            <h3 className="text-[20px] font-semibold mb-3 text-slate-900">{audience.title}</h3>
                            <p className="text-[16px] text-gray-600 leading-relaxed">{audience.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

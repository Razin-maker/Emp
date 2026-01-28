import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users, Target } from "lucide-react";

const features = [
    {
        title: "Task Management",
        description: "Stay on top of everything, from to-dos to long-term projects.",
        icon: CheckCircle2,
    },
    {
        title: "Time Tracking",
        description: "Monitor how you spend your time and optimize your workflow.",
        icon: Clock,
    },
    {
        title: "Collaboration Tools",
        description: "Share tasks, track projects, and work efficiently with your team.",
        icon: Users,
    },
    {
        title: "Goal Setting",
        description: "Break down your goals into actionable tasks and track progress.",
        icon: Target,
    },
];

export const Features = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
            <div className="mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-semibold text-brand-dark mb-6 tracking-tight"
                >
                    Features designed <br /> for your success.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-600 max-w-xl"
                >
                    Explore the features designed to keep you organized and on track with minimal effort.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-4">
                            <feature.icon size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-brand-dark mb-2">{feature.title}</h3>
                        <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

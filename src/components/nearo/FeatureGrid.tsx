import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const FeatureGrid = () => {
    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FeatureCard
                        title="Real-time Synchronization"
                        description="Your tasks updated instantly across all devices."
                        offset={20}
                    />
                    <FeatureCard
                        title="Smart Notifications"
                        description="Get notified only when it matters."
                        offset={-20}
                    />
                    <FeatureCard
                        title="Team Collaboration"
                        description="Work together with your team in real-time."
                        offset={20}
                    />
                    <FeatureCard
                        title="Detailed Analytics"
                        description="Track your progress with beautiful charts."
                        offset={-20}
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ title, description, offset }: { title: string, description: string, offset: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

    return (
        <div ref={ref} className="group relative h-[500px] bg-nearo-gray rounded-3xl overflow-hidden p-8 flex flex-col justify-end transition-all hover:shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center p-10">
                <motion.div
                    style={{ y }}
                    className="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-300"
                >
                    Inner Card Parallax
                </motion.div>
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    );
};

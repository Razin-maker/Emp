import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import taskImage from '../../assets/task.png';

const features = [
    {
        icon: "🔹",
        title: "Execution & Task Management",
        description: "Track issues, tasks, planners, and initiatives with clear ownership and status.",
        tagline: "From \"who will do it?\" to \"it's done.\"",
        image: taskImage
    },
    {
        icon: "🔹",
        title: "Dashboards & Visibility",
        description: "Live dashboards for employees, managers, and leadership.",
        tagline: "Know what's happening — without asking."
    },
    {
        icon: "🔹",
        title: "Human Resource Lifecycle",
        description: "Attendance, leave, payroll, assets, promotions, probation, separation.",
        tagline: "HR that supports execution — not slows it down."
    },
    {
        icon: "🔹",
        title: "Rules, SOP & Governance",
        description: "Company rules, policies, blacklists, workflows, approvals.",
        tagline: "Discipline built into the system."
    },
    {
        icon: "🔹",
        title: "Planning, Goals & KPIs",
        description: "Objectives, KPIs, PPM, and employee goals aligned with daily work.",
        tagline: "Strategy meets execution."
    },
    {
        icon: "🔹",
        title: "Communication & Activity Feeds",
        description: "Notifications, logs, summaries, Telegram integration.",
        tagline: "Transparency without noise."
    }
];

export const FeatureGrid = () => {
    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[48px] font-semibold mb-4 text-slate-900">Everything your team needs — without fragmentation.</h2>
                    <p className="text-[16px] text-gray-600">Explore the features designed to keep you organized and on track.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            tagline={feature.tagline}
                            offset={index % 2 === 0 ? 20 : -20}
                            image={feature.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, description, tagline, offset, image }: { icon: string, title: string, description: string, tagline: string, offset: number, image?: string }) => {
    const ref = useRef(null);

    return (
        <div ref={ref} className="group relative h-[450px] bg-white rounded-3xl overflow-hidden p-8 flex flex-col justify-between transition-all hover:shadow-xl shadow-lg border border-gray-200">
            {image && (
                <div className="flex-1 flex items-center justify-center py-4">
                    <div className="relative w-[280px] overflow-hidden h-[320px]">
                        {/* iPhone Frame - Cropped to show only top portion */}
                        <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                            {/* Dynamic Island */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>

                            {/* Screen */}
                            <div className="bg-[#F5F5F0] rounded-[2.5rem] overflow-hidden relative" style={{ height: '600px' }}>
                                {/* Status Bar */}
                                <div className="flex items-center justify-between px-6 pt-3 pb-2">
                                    <span className="text-xs font-semibold">9:41</span>
                                    <div className="flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h4v16H2zm6 0h4v16H8zm6 0h4v16h-4zm6 0h4v16h-4z" /></svg>
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 4h-3V2h-4v2H7v2h10V4zm-3 18c.55 0 1-.45 1-1h-4c0 .55.45 1 1 1zm0-3c.55 0 1-.45 1-1H13c0 .55.45 1 1 1z" /></svg>
                                    </div>
                                </div>
                                <img src={image} alt={title} className="w-full h-auto" />
                            </div>
                        </div>
                        {/* Fade effect at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
                    </div>
                </div>
            )}
            <div className="text-center">
                <h3 className="text-[20px] font-semibold mb-2 text-slate-900">{title}</h3>
                <p className="text-[16px] text-gray-600 mb-3 leading-relaxed">{description}</p>
                <p className="text-sm font-medium text-slate-700 italic">{tagline}</p>
            </div>
        </div>
    );
};

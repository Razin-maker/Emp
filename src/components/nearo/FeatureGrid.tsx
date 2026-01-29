import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import taskImage from '../../assets/task.png';
import dashboardImage from '../../assets/dashboard2.png';
import sopImage from '../../assets/Company rules.png';
import kpiImage from '../../assets/goals.png';
import hrImage from '../../assets/IMG_8505.PNG?url';
import communicationImage from '../../assets/IMG_3341.JPG.jpeg';

const features = [
    {
        icon: "🔹",
        title: "Execution & Task Management",
        description: "Track issues, tasks, planners, and initiatives with clear ownership.",
        
        image: taskImage
    },
    {
        icon: "🔹",
        title: "Dashboards & Visibility",
        description: "Live dashboards for employees, managers, and leadership — always up to date.",
        tagline: "",
        image: dashboardImage
    },
    {
        icon: "🔹",
        title: "Rules, SOP & Governance",
        description: "Company rules, policies, blacklists, workflows, and approvals.",
        
        image: sopImage
    },
    {
        icon: "🔹",
        title: "HR Portal",
        description: "Attendance, leave, payroll, assets, promotions, probation, and separation — all connected.",
        tagline: "",
        image: "hr" // placeholder to trigger HR mockup
    },
    {
        icon: "🔹",
        title: "Communication & Activity Feeds",
        description: "Notifications, logs, summaries, Telegram integration.",
        tagline: "Transparency without noise.",
        image: "communication"
    },
    {
        icon: "🔹",
        title: "Planning, Goals & KPIs",
        description: "Objectives, KPIs, PPM, and employee goals aligned with daily work.",
        
        image: kpiImage
    }
];

const featuresMobile = [
    {
        icon: "🔹",
        title: "Execution & Task Management",
        description: "Track issues, tasks, planners, and initiatives with clear ownership.",
        
        image: taskImage
    },
    {
        icon: "🔹",
        title: "Dashboards & Visibility",
        description: "Live dashboards for employees, managers, and leadership — always up to date.",
        tagline: "",
        image: dashboardImage
    },
    {
        icon: "🔹",
        title: "HR Portal",
        description: "Attendance, leave, payroll, assets, promotions, probation, and separation — all connected.",
        tagline: "",
        image: "hr" // placeholder to trigger HR mockup
    },
    {
        icon: "🔹",
        title: "Rules, SOP & Governance",
        description: "Company rules, policies, blacklists, workflows, and approvals.",
        
        image: sopImage
    },
    {
        icon: "🔹",
        title: "Communication & Activity Feeds",
        description: "Notifications, logs, summaries, Telegram integration.",
        tagline: "Transparency without noise.",
        image: "communication"
    },
    {
        icon: "🔹",
        title: "Planning, Goals & KPIs",
        description: "Objectives, KPIs, PPM, and employee goals aligned with daily work.",
        
        image: kpiImage
    }
];

export const FeatureGrid = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const displayFeatures = isMobile ? featuresMobile : features;

    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold mb-4 text-slate-900">Core Features</h2>
                    <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-600">Features Designed for Real Execution</p>
                </motion.div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    {displayFeatures.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            index={index}
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

const FeatureCard = ({ index, icon, title, description, tagline, offset, image }: { index: number, icon: string, title: string, description: string, tagline?: string, offset: number, image?: string }) => {
    const ref = useRef(null);

    return (
        <div 
            ref={ref}
            className="group relative h-[380px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden p-4 md:p-8 flex flex-col justify-between transition-all hover:shadow-xl shadow-lg border border-gray-200" 
            style={{ backgroundColor: '#eeeff0' }}
        >
            {image && (
                <div className="flex-1 flex items-start justify-center pt-0 pb-2">
                    {title === "Execution & Task Management" ? (
                        <div className="relative w-[200px] md:w-[280px] overflow-hidden h-[240px] md:h-[320px]">
                            {/* iPhone Frame - Cropped to show only top portion */}
                            <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl">
                                {/* Dynamic Island */}
                                <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-20 md:w-28 h-5 md:h-7 bg-black rounded-full z-20"></div>

                                {/* Screen */}
                                <div className="bg-[#F5F5F0] rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden relative" style={{ height: '450px' }}>
                                    {/* Status Bar */}
                                    <div className="flex items-center justify-between px-4 md:px-6 pt-2 md:pt-3 pb-1 md:pb-2">
                                        <span className="text-[10px] md:text-xs font-semibold">9:41</span>
                                        <div className="flex items-center gap-1">
                                            <svg className="w-2 md:w-3 h-2 md:h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h4v16H2zm6 0h4v16H8zm6 0h4v16h-4zm6 0h4v16h-4z" /></svg>
                                            <svg className="w-2 md:w-3 h-2 md:h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                                            <svg className="w-2 md:w-2.5 h-2 md:h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 4h-3V2h-4v2H7v2h10V4zm-3 18c.55 0 1-.45 1-1h-4c0 .55.45 1 1 1zm0-3c.55 0 1-.45 1-1H13c0 .55.45 1 1 1z" /></svg>
                                        </div>
                                    </div>
                                    <img src={image} alt={title} className="w-full h-auto" />
                                </div>
                            </div>
                            {/* Fade effect at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 bg-gradient-to-t from-[#eeeff0] to-transparent pointer-events-none z-10"></div>
                        </div>
                    ) : title === "HR Portal" ? (
                        <div className="relative w-[200px] md:w-[280px] h-[240px] md:h-[320px]">
                            <div className="relative w-[200px] md:w-[280px] overflow-hidden h-[240px] md:h-[320px]">
                                <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl">
                                    <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-20 md:w-28 h-5 md:h-7 bg-black rounded-full z-20"></div>
                                    <div className="bg-white rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden relative" style={{ height: '450px' }}>
                                        <div className="flex items-center justify-between px-4 md:px-6 pt-2 md:pt-3 pb-1 md:pb-2">
                                            <span className="text-[10px] md:text-xs font-semibold">9:41</span>
                                            <div className="flex items-center gap-1">
                                                <svg className="w-2 md:w-3 h-2 md:h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h4v16H2zm6 0h4v16H8zm6 0h4v16h-4zm6 0h4v16h-4z" /></svg>
                                                <svg className="w-2 md:w-3 h-2 md:h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                                                <svg className="w-2 md:w-2.5 h-2 md:h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 4h-3V2h-4v2H7v2h10V4zm-3 18c.55 0 1-.45 1-1h-4c0 .55.45 1 1 1zm0-3c.55 0 1-.45 1-1H13c0 .55.45 1 1 1z" /></svg>
                                            </div>
                                        </div>
                                        <div className="px-3 md:px-4 py-2 md:py-3">
                                            <img src={hrImage} alt="HR Portal" className="w-full h-auto rounded-lg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 bg-gradient-to-t from-[#eeeff0] to-transparent pointer-events-none z-10"></div>
                            </div>
                            {/* Floating Card - Outside phone mockup */}
                            <div className="absolute -right-16 md:-right-20 top-12 md:top-16 bg-white rounded-lg md:rounded-xl shadow-lg p-2 md:p-3 w-24 md:w-28 z-30">
                                <div className="text-[10px] md:text-xs font-semibold text-gray-800 mb-1 md:mb-2">Quick Stats</div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] md:text-xs">
                                        <span className="text-gray-600">Active</span>
                                        <span className="font-semibold">12</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] md:text-xs">
                                        <span className="text-gray-600">On Leave</span>
                                        <span className="font-semibold">3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : title === "Communication & Activity Feeds" ? (
                        <div className="relative w-[200px] md:w-[280px] overflow-hidden h-[240px] md:h-[320px]">
                            <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl">
                                <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-20 md:w-28 h-5 md:h-7 bg-black rounded-full z-20"></div>
                                <div className="bg-[#F5F5F0] rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden relative" style={{ height: '450px' }}>
                                    <div className="flex items-center justify-between px-4 md:px-6 pt-2 md:pt-3 pb-1 md:pb-2">
                                        <span className="text-[10px] md:text-xs font-semibold">9:41</span>
                                        <div className="flex items-center gap-1">
                                            <svg className="w-2 md:w-3 h-2 md:h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h4v16H2zm6 0h4v16H8zm6 0h4v16h-4zm6 0h4v16h-4z" /></svg>
                                            <svg className="w-2 md:w-3 h-2 md:h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                                            <svg className="w-2 md:w-2.5 h-2 md:h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 4h-3V2h-4v2H7v2h10V4zm-3 18c.55 0 1-.45 1-1h-4c0 .55.45 1 1 1zm0-3c.55 0 1-.45 1-1H13c0 .55.45 1 1 1z" /></svg>
                                        </div>
                                    </div>
                                    <div className="px-3 md:px-4 py-2 md:py-3">
                                        <img src={communicationImage} alt="Communication" className="w-full h-auto rounded-lg" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 bg-gradient-to-t from-[#eeeff0] to-transparent pointer-events-none z-10"></div>
                        </div>
                    ) : (
                        <img src={image} alt={title} className={`w-full h-auto rounded-xl shadow-lg ${title === "Dashboards & Visibility" ? 'mt-8 md:mt-0' : ''}`} style={title === "Rules, SOP & Governance" ? { marginTop: '40px' } : title === "Planning, Goals & KPIs" ? { marginTop: '20px' } : undefined} />
                    )}
                </div>
            )}
            <div className="text-center" style={title === "Dashboards & Visibility" ? { marginTop: '30px' } : title === "Rules, SOP & Governance" ? { marginTop: '40px' } : title === "Planning, Goals & KPIs" ? { marginTop: '50px' } : title === "Communication & Activity Feeds" ? { marginTop: '18px' } : undefined}>
                <h3 className="text-[clamp(1.125rem,2vw,1.25rem)] font-semibold mb-2 text-slate-900">{title}</h3>
                <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-600 mb-3 leading-relaxed">{description}</p>
                <p className="text-sm font-medium text-slate-700 italic">{tagline}</p>
            </div>
        </div>
    );
};

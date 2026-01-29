import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import taskImage from '../../assets/task.png';
import dashboardImage from '../../assets/dashboard.png';
import sopImage from '../../assets/rules.png';
import kpiImage from '../../assets/acc.png';

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

export const FeatureGrid = () => {
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
                    {features.map((feature, index) => (
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
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#eeeff0] to-transparent pointer-events-none z-10"></div>
                        </div>
                    ) : title === "HR Portal" ? (
                        <div className="relative w-[280px] h-[320px]">
                            <div className="relative w-[280px] overflow-hidden h-[320px]">
                                <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>
                                    <div className="bg-white rounded-[2.5rem] overflow-hidden relative" style={{ height: '600px' }}>
                                        <div className="flex items-center justify-between px-6 pt-3 pb-2">
                                            <span className="text-xs font-semibold">9:41</span>
                                            <div className="flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h4v16H2zm6 0h4v16H8zm6 0h4v16h-4zm6 0h4v16h-4z" /></svg>
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                                                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 4h-3V2h-4v2H7v2h10V4zm-3 18c.55 0 1-.45 1-1h-4c0 .55.45 1 1 1zm0-3c.55 0 1-.45 1-1H13c0 .55.45 1 1 1z" /></svg>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <div className="flex items-center gap-2">
                                                <div style={{ color: '#50a7e3' }} className="text-lg font-bold">EMP</div>
                                                <button className="ml-auto">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3">
                                            <div className="flex items-center gap-2 mb-3">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
                                                <h3 className="text-sm font-semibold text-gray-900">Leave Management</h3>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="bg-gray-50 rounded-lg p-2.5">
                                                    <div className="flex items-center justify-between mb-1.5">
                                                        <span className="text-xs font-medium text-gray-800">Md. Razin Ahmed</span>
                                                        <span className="text-xs text-gray-500">(2 / 25)</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '8%' }}></div>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-50 rounded-lg p-2.5">
                                                    <div className="flex items-center justify-between mb-1.5">
                                                        <span className="text-xs font-medium text-gray-800">Tanvir Islam</span>
                                                        <span className="text-xs text-gray-500">(3 / 25)</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '12%' }}></div>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-50 rounded-lg p-2.5">
                                                    <div className="flex items-center justify-between mb-1.5">
                                                        <span className="text-xs font-medium text-gray-800">Md. Moyed Muqtadir</span>
                                                        <span className="text-xs text-gray-500">(5 / 25)</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                        <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '20%' }}></div>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-50 rounded-lg p-2.5">
                                                    <div className="flex items-center justify-between mb-1.5">
                                                        <span className="text-xs font-medium text-gray-800">Md. Arifol Islam</span>
                                                        <span className="text-xs text-gray-500">(1 / 25)</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                                                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '4%' }}></div>
                                                        </div>
                                                        <span className="inline-block bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded">Active</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#eeeff0] to-transparent pointer-events-none z-10"></div>
                            </div>
                            {/* Floating Card - Outside phone mockup */}
                            <div className="absolute -right-20 top-16 bg-white rounded-xl shadow-lg p-3 w-28 z-30">
                                <div className="text-xs font-semibold text-gray-800 mb-2">Quick Stats</div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-gray-600">Active</span>
                                        <span className="font-semibold">12</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-gray-600">On Leave</span>
                                        <span className="font-semibold">3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : title === "Communication & Activity Feeds" ? (
                        <div className="relative w-[280px] overflow-hidden h-[320px]">
                            <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>
                                <div className="bg-[#F5F5F0] rounded-[2.5rem] overflow-hidden relative" style={{ height: '600px' }}>
                                    <div className="flex items-center justify-between px-6 pt-3 pb-2">
                                        <span className="text-xs font-semibold">9:41</span>
                                        <div className="flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h4v16H2zm6 0h4v16H8zm6 0h4v16h-4zm6 0h4v16h-4z" /></svg>
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 4h-3V2h-4v2H7v2h10V4zm-3 18c.55 0 1-.45 1-1h-4c0 .55.45 1 1 1zm0-3c.55 0 1-.45 1-1H13c0 .55.45 1 1 1z" /></svg>
                                        </div>
                                    </div>
                                    <div className="px-6 py-4">
                                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Activity Feed</h2>
                                        <div className="space-y-3">
                                            <div className="bg-white rounded-2xl p-3 shadow-sm">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-lg">🔔</div>
                                                    <div>
                                                        <p className="font-semibold text-sm text-gray-900">Notifications</p>
                                                        <p className="text-xs text-gray-500">Real-time updates</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-3 shadow-sm">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg">📋</div>
                                                    <div>
                                                        <p className="font-semibold text-sm text-gray-900">Activity Logs</p>
                                                        <p className="text-xs text-gray-500">Track all changes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-2xl p-3 shadow-sm">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-lg">✈️</div>
                                                    <div>
                                                        <p className="font-semibold text-sm text-gray-900">Telegram</p>
                                                        <p className="text-xs text-gray-500">Instant integration</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#eeeff0] to-transparent pointer-events-none z-10"></div>
                        </div>
                    ) : (
                        <img src={image} alt={title} className="w-full h-auto rounded-xl shadow-lg" style={title === "Rules, SOP & Governance" ? { marginTop: '40px' } : title === "Planning, Goals & KPIs" ? { marginTop: '20px' } : undefined} />
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

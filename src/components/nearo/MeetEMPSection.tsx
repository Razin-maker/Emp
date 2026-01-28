import { motion } from 'framer-motion';
import hammerGif from '../../assets/hammer.gif';
import taskingGif from '../../assets/tasking.gif';
import managementGif from '../../assets/management.gif';
import dashboardGif from '../../assets/dashboard.gif';

export const MeetEMPSection = () => {
    const valueBlocks = [
        {
            title: "Execution",
            description: "Tasks, issues, planners, initiatives, and coordination — all connected.",
            icon: <img src={taskingGif} alt="Execution" className="w-16 h-16" />
        },
        {
            title: "People",
            description: "Employees, HR processes, growth, and lifecycle — structured and transparent.",
            icon: <img src={managementGif} alt="People" className="w-16 h-16" />
        },
        {
            title: "Governance",
            description: "Rules, SOPs, workflows, and approvals — enforced consistently.",
            icon: <img src={hammerGif} alt="Governance" className="w-16 h-16" />
        },
        {
            title: "Visibility",
            description: "Dashboards and reports — real-time, not after the damage.",
            icon: <img src={dashboardGif} alt="Visibility" className="w-16 h-16" />
        }
    ];

    return (
        <section className="py-16 md:py-32 px-4 md:px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold mb-6 md:mb-8 text-slate-900 px-4">What EMP Brings Together</h2>
                    
                    <p className="text-[clamp(0.9rem,1.5vw,1.125rem)] text-gray-700 mb-4 md:mb-6 leading-relaxed max-w-3xl mx-auto px-4">
                        Everything your team needs — without fragmentation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {valueBlocks.map((block, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="text-slate-700 mb-3 md:mb-4">{block.icon}</div>
                            <h4 className="text-lg md:text-[20px] font-semibold mb-2 md:mb-3 text-slate-900">{block.title}</h4>
                            <p className="text-sm md:text-[16px] text-gray-600 leading-relaxed">{block.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

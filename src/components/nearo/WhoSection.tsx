import { motion } from 'framer-motion';
import illustrationImage from '../../assets/man 2.png';
import manageImage from '../../assets/manage.png';
import hrImage from '../../assets/HR.png';
import employeeImage from '../../assets/Employee.png';

export const WhoSection = () => {
    const audiences = [
        {
            title: "Founders & Leadership",
            description: "Understand how the organization is executing — without micromanagement.",
            image: illustrationImage
        },
        {
            title: "Managers & Team Leads",
            description: "See progress, blockers, and ownership in real time.",
            image: manageImage
        },
        {
            title: "HR & Operations",
            description: "Run people processes with consistency, fairness, and visibility.",
            image: hrImage
        },
        {
            title: "Employees",
            description: "Know exactly what's expected and how work is evaluated.",
            image: employeeImage
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
                            className="bg-white rounded-2xl p-8 shadow-md flex flex-col h-[380px] overflow-hidden"
                        >
                            <div className="-mt-4">
                                <h3 className="text-[18px] font-semibold mb-2 text-slate-900">{audience.title}</h3>
                                <p className="text-[14px] text-gray-600 leading-relaxed mb-4">{audience.description}</p>
                            </div>
                            <div className={`flex justify-center ${index === 0 ? '-mt-4' : 'mt-auto pt-8'}`}>
                                <img src={audience.image} alt="illustration" className="w-66 h-auto" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

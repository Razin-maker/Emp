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
        <section className="py-32 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-[48px] font-semibold mb-8 text-slate-900">What EMP Brings Together</h2>
                    
                    <p className="text-[18px] text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
                        Everything your team needs — without fragmentation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {valueBlocks.map((block, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-slate-700 mb-4">{block.icon}</div>
                            <h4 className="text-[20px] font-semibold mb-3 text-slate-900">{block.title}</h4>
                            <p className="text-[16px] text-gray-600 leading-relaxed">{block.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import hammerGif from '../../assets/hammer.gif';
import taskingGif from '../../assets/tasking.gif';
import managementGif from '../../assets/management.gif';
import dashboardGif from '../../assets/dashboard.gif';

export const MeetEMPSection = () => {
    const valueBlocks = [
        {
            title: "Execution",
            description: "Tasks, issues, planners, and coordination — all connected.",
            icon: <img src={taskingGif} alt="Execution" className="w-16 h-16" />
        },
        {
            title: "People",
            description: "Employees, HR processes, growth, and lifecycle — structured.",
            icon: <img src={managementGif} alt="People" className="w-16 h-16" />
        },
        {
            title: "Governance",
            description: "Rules, SOPs, workflows, approvals — enforced by system.",
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
                    <h2 className="text-[48px] font-semibold mb-8 text-slate-900">Meet EMP</h2>
                    
                    <p className="text-[18px] text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
                        EMP (Employee Max Portal) is an open-source Execution & People Management System.<br />
                        It helps teams move from informal coordination to structured execution — with clarity, ownership, and discipline.
                    </p>

                    <div className="inline-block bg-[#FFF53B] px-6 py-3 rounded-full mb-16">
                        <p className="text-[16px] font-semibold text-slate-900">
                            EMP turns daily work into visible, accountable execution.
                        </p>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-[24px] font-semibold text-slate-900 mb-8 text-center">
                        What EMP Brings Together
                    </h3>
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

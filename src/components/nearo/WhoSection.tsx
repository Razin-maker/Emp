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
                <div className="text-center mb-16">
                    <h2 className="text-[48px] font-semibold mb-4 text-slate-900">Who EMP Is For</h2>
                    <p className="text-[18px] text-gray-600">Built for Teams That Want Clarity</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {audiences.map((audience, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">{audience.icon}</div>
                            <h3 className="text-[20px] font-semibold mb-3 text-slate-900">{audience.title}</h3>
                            <p className="text-[16px] text-gray-600 leading-relaxed">{audience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

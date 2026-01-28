export const ProblemSection = () => {
    const painPoints = [
        "Work happens in chats, sheets, and tools that don't talk",
        "Managers don't know what's really moving",
        "HR becomes paperwork, not people",
        "Tasks get lost, ownership is unclear",
        "Rules exist, but no one follows them"
    ];

    return (
        <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-[48px] font-semibold mb-16 text-slate-900 leading-tight">
                        Teams Don't Fail Because of People.<br />They Fail Because of Chaos.
                    </h2>
                    
                    <div className="space-y-6 mb-16">
                        {painPoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-4 max-w-2xl mx-auto">
                                <div className="w-2 h-2 rounded-full bg-[#FFF53B] mt-2 flex-shrink-0"></div>
                                <p className="text-[16px] text-gray-700 text-left">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-16 h-px bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <div className="w-16 h-px bg-gray-300"></div>
                    </div>
                    
                    <p className="text-[20px] font-semibold text-slate-900">
                        When everything is scattered, execution breaks.
                    </p>
                </div>
            </div>
        </section>
    );
};

export const ManifestoSection = () => {
    const beliefs = [
        "Work should be visible",
        "Ownership should be clear",
        "Rules should be followed by system, not shouting",
        "People deserve structure, not confusion",
        "Software should empower teams — not control them"
    ];

    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-[48px] font-semibold mb-16 leading-tight text-slate-900">
                    Execution Should Be Clear.
                </h2>

                <div className="mb-16">
                    <h3 className="text-[24px] font-semibold mb-8 text-slate-900">We believe:</h3>
                    <div className="space-y-6">
                        {beliefs.map((belief, index) => (
                            <div key={index} className="flex items-start gap-4 max-w-2xl mx-auto">
                                <div className="w-2 h-2 rounded-full bg-[#FFF53B] mt-2 flex-shrink-0"></div>
                                <p className="text-[18px] text-gray-700 text-left leading-relaxed">
                                    {belief}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-16 h-px bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FFF53B]"></div>
                    <div className="w-16 h-px bg-gray-300"></div>
                </div>

                <div className="space-y-2">
                    <p className="text-[24px] font-semibold text-slate-900">
                        EMP is not a tool.
                    </p>
                    <p className="text-[24px] font-semibold text-slate-900">
                        It's how teams execute.
                    </p>
                </div>
            </div>
        </section>
    );
};

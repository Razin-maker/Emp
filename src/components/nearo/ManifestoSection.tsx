export const ManifestoSection = () => {
    const beliefs = [
        "Work should be visible",
        "Ownership should be clear",
        "Rules should be enforced by systems, not shouting",
        "People deserve structure, not confusion",
        "Software should empower teams — not control them"
    ];

    return (
        <section className="py-32 px-6 bg-gradient-to-b from-amber-50 to-amber-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Book title above */}
                <div className="text-center mb-20">
                    <h2 className="text-[48px] font-serif font-bold text-amber-900 mb-2">
                        The Philosophy
                    </h2>
                </div>

                {/* Realistic Open Book */}
                <div className="relative max-w-[1100px] mx-auto" style={{ perspective: '2500px' }}>
                    {/* Book base shadow */}
                    <div className="absolute inset-0 bg-black/30 blur-3xl transform translate-y-12 scale-95"></div>
                    
                    {/* Book container */}
                    <div className="relative">
                        {/* Left book stack (closed pages) */}
                        <div className="absolute left-0 top-0 bottom-0 w-12 z-10">
                            {[...Array(8)].map((_, i) => (
                                <div 
                                    key={`left-${i}`}
                                    className="absolute inset-0 bg-gradient-to-r from-amber-50 to-white border-l border-t border-b border-amber-200 rounded-l-sm"
                                    style={{
                                        transform: `translateX(-${i * 2}px) translateY(${i * 1}px)`,
                                        zIndex: 8 - i,
                                        boxShadow: '-2px 0 4px rgba(0,0,0,0.1)'
                                    }}
                                ></div>
                            ))}
                        </div>

                        {/* Right book stack (closed pages) */}
                        <div className="absolute right-0 top-0 bottom-0 w-12 z-10">
                            {[...Array(8)].map((_, i) => (
                                <div 
                                    key={`right-${i}`}
                                    className="absolute inset-0 bg-gradient-to-l from-amber-50 to-white border-r border-t border-b border-amber-200 rounded-r-sm"
                                    style={{
                                        transform: `translateX(${i * 2}px) translateY(${i * 1}px)`,
                                        zIndex: 8 - i,
                                        boxShadow: '2px 0 4px rgba(0,0,0,0.1)'
                                    }}
                                ></div>
                            ))}
                        </div>

                        {/* Main open pages */}
                        <div className="relative grid grid-cols-2 gap-0 bg-white shadow-2xl" style={{
                            minHeight: '600px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(0,0,0,0.1)'
                        }}>
                            {/* Left Page */}
                            <div 
                                className="relative p-16 border-r border-amber-200"
                                style={{ 
                                    background: 'linear-gradient(to right, #fef3c7 0%, #fffbeb 5%, #ffffff 15%, #ffffff 100%)',
                                    boxShadow: 'inset -15px 0 30px -15px rgba(0,0,0,0.15)',
                                    transform: 'rotateY(2deg)',
                                    transformOrigin: 'right center'
                                }}
                            >
                                {/* Page texture */}
                                <div className="absolute inset-0 opacity-[0.03]" style={{
                                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 3px)'
                                }}></div>
                                
                                {/* Page number */}
                                <div className="absolute top-12 left-12 text-sm text-amber-600 font-serif">— 500 —</div>
                                
                                <div className="relative h-full flex flex-col justify-center">
                                    <h3 className="text-[40px] font-serif font-bold text-slate-900 mb-16 leading-tight">
                                        Execution Should<br />Be Clear
                                    </h3>
                                    
                                    <p className="text-xl font-serif text-amber-800 mb-10 italic">We believe:</p>
                                    
                                    <div className="space-y-7">
                                        {beliefs.map((belief, index) => (
                                            <div key={index} className="flex items-start gap-4">
                                                <span className="text-amber-600 font-serif text-lg mt-1">❖</span>
                                                <p className="text-[18px] font-serif text-slate-800 leading-relaxed">
                                                    {belief}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Page */}
                            <div 
                                className="relative p-16"
                                style={{ 
                                    background: 'linear-gradient(to left, #fef3c7 0%, #fffbeb 5%, #ffffff 15%, #ffffff 100%)',
                                    boxShadow: 'inset 15px 0 30px -15px rgba(0,0,0,0.15)',
                                    transform: 'rotateY(-2deg)',
                                    transformOrigin: 'left center'
                                }}
                            >
                                {/* Page texture */}
                                <div className="absolute inset-0 opacity-[0.03]" style={{
                                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 3px)'
                                }}></div>
                                
                                {/* Page number */}
                                <div className="absolute top-12 right-12 text-sm text-amber-600 font-serif">— 501 —</div>
                                
                                <div className="relative h-full flex flex-col justify-center items-center text-center">
                                    <div className="space-y-16">
                                        {/* Decorative ornament */}
                                        <div className="flex justify-center">
                                            <svg width="80" height="80" viewBox="0 0 80 80" className="text-amber-700">
                                                <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                                                <circle cx="40" cy="40" r="20" fill="currentColor"/>
                                            </svg>
                                        </div>
                                        
                                        <div className="space-y-8">
                                            <p className="text-[24px] font-serif text-amber-700 italic">
                                                EMP is not a tool.
                                            </p>
                                            
                                            <div className="flex items-center justify-center gap-3">
                                                <div className="w-8 h-px bg-amber-400"></div>
                                                <span className="text-amber-600">❖</span>
                                                <div className="w-8 h-px bg-amber-400"></div>
                                            </div>
                                            
                                            <p className="text-[46px] font-serif font-bold text-slate-900 leading-tight">
                                                It's how teams<br />execute.
                                            </p>
                                        </div>
                                        
                                        {/* Bottom ornament */}
                                        <div className="pt-12">
                                            <div className="w-24 h-px bg-amber-600 mx-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Book spine/binding in center */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-full bg-gradient-to-b from-amber-800 via-amber-900 to-amber-800 z-20" style={{
                                boxShadow: '0 0 20px rgba(0,0,0,0.5), inset 0 0 10px rgba(0,0,0,0.3)'
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

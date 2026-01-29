import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AlertTriangle, Check, Cpu, Database, GitBranch, Layers, MessageSquare, Shield, Users, Workflow } from 'lucide-react';
import logoImage from '../../assets/WhatsApp_Image_2026-01-29_at_18.41.21-removebg-preview.png';

const BeforePoints = [
  { icon: MessageSquare, text: "Work scattered across chats, sheets, and tools that don't sync" },
  { icon: AlertTriangle, text: "Execution depends on memory, follow-ups, and reminders" },
  { icon: Users, text: "Managers rely on status meetings instead of real signals" },
  { icon: Database, text: "HR becomes manual tracking instead of structured systems" },
  { icon: GitBranch, text: "Rules exist only in documents, not in daily behavior" }
];

const AfterPoints = [
  { icon: Layers, text: "Tasks, planners, issues, and approvals live in one system" },
  { icon: Cpu, text: "Real-time execution visibility replaces status chasing" },
  { icon: Shield, text: "HR processes become traceable, auditable, and predictable" },
  { icon: Check, text: "Every task has ownership, state, and history" },
  { icon: Workflow, text: "Rules, SOPs, and workflows are enforced by the system — not people" }
];

const AnimatedWire = ({ direction }: { direction: "left" | "right" }) => {
  const isLeft = direction === "left";
  
  return (
    <div className="absolute inset-0 flex items-center">
      <svg className="w-full h-16" viewBox="0 0 100 40" preserveAspectRatio="none">
        <path
          d="M0 20 Q 25 20, 50 20 T 100 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={isLeft ? "text-orange-300" : "text-green-300"}
          strokeDasharray="4 6"
          style={{ 
            animation: isLeft ? "wireDash 1s linear infinite" : "wireDash 1s linear infinite reverse"
          }}
        />
      </svg>
      
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute h-3 w-3 rounded-full"
          style={{
            background: isLeft ? "#50a7e3" : "#10b981",
            boxShadow: isLeft ? "0 0 10px rgba(80, 167, 227, 0.6)" : "0 0 10px rgba(16, 185, 129, 0.6)",
            left: "0%",
            top: "50%",
            transform: "translateY(-50%)",
            animation: `moveRight 2.5s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
};

export const ProblemSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile ? <ProblemSectionMobile /> : <ProblemSectionDesktop />;
};

const ProblemSectionDesktop = () => {
    return (
        <section className="py-32 px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold mb-4 text-slate-900">
                            Teams Don't Fail Because of People.<br />
                            <span className="text-slate-900">They Fail Because Systems Are Missing.</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            EMP replaces human coordination with enforceable, transparent systems.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-[1fr,auto,1fr] gap-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl rounded-r-none border border-gray-200 bg-white p-8"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                                    <AlertTriangle className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-600">BEFORE EMP</h3>
                                    <p className="text-xs text-gray-500">Reactive • Manual • Fragmented</p>
                                </div>
                            </div>
                            <ul className="space-y-5">
                                {BeforePoints.map((point, index) => (
                                    <li key={index} className="flex items-start gap-4 group">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-orange-200 bg-orange-50 text-orange-600 transition-colors group-hover:border-orange-300 group-hover:bg-orange-100">
                                            <point.icon className="h-4 w-4" />
                                        </div>
                                        <p className="text-sm leading-relaxed text-gray-700">{point.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="relative flex flex-col items-center justify-center px-4">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-16 overflow-hidden">
                                <AnimatedWire direction="left" />
                            </div>
                            
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-16 overflow-hidden">
                                <AnimatedWire direction="right" />
                            </div>

                            <div className="relative z-10 inline-flex items-center rounded-full border-2 border-[#50a7e3]/40 bg-[#50a7e3] p-4 shadow-lg">
                                <img src={logoImage} alt="EMP Logo" className="h-20 w-20 object-contain" />
                                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-yellow-400">
                                    <div className="absolute inset-0 h-3 w-3 rounded-full bg-yellow-400 animate-ping" style={{ animationDuration: "2s" }} />
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl rounded-l-none border border-gray-200 bg-white p-8"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                                    <Check className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-green-600">AFTER EMP</h3>
                                    <p className="text-xs text-gray-500">Deterministic • Auditable • Connected</p>
                                </div>
                            </div>
                            <ul className="space-y-5">
                                {AfterPoints.map((point, index) => (
                                    <li key={index} className="flex items-start gap-4 group">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-green-200 bg-green-50 text-green-600 transition-colors group-hover:border-green-300 group-hover:bg-green-100">
                                            <point.icon className="h-4 w-4" />
                                        </div>
                                        <p className="text-sm leading-relaxed text-gray-700">{point.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>


            </div>
        </section>
    );
};

const ProblemSectionMobile = () => {
    return (
        <section className="py-16 px-4 bg-white relative overflow-hidden">
            <div className="max-w-md mx-auto relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold mb-3 text-slate-900 leading-tight">
                            Teams Don't Fail Because of People.<br />
                            <span className="text-slate-900">They Fail Because Systems Are Missing.</span>
                        </h2>
                        <p className="text-gray-600 text-sm mt-4">
                            EMP replaces human coordination with enforceable, transparent systems.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-gray-200 bg-white p-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                                <AlertTriangle className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-600">BEFORE EMP</h3>
                                <p className="text-xs text-gray-500">Reactive • Manual • Fragmented</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            {BeforePoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-orange-200 bg-orange-50 text-orange-600">
                                        <point.icon className="h-3.5 w-3.5" />
                                    </div>
                                    <p className="text-xs leading-relaxed text-gray-700">{point.text}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="flex items-center justify-center py-4">
                        <div className="flex flex-col items-center gap-2">
                            {[0, 1, 2].map((i) => (
                                <div
                                    key={i}
                                    className="h-2 w-2 rounded-full bg-[#50a7e3]"
                                    style={{
                                        animation: "pulseSlow 1.5s ease-in-out infinite",
                                        animationDelay: `${i * 0.3}s`,
                                    }}
                                />
                            ))}
                        </div>
                        
                        <div className="relative mx-4 inline-flex items-center rounded-full border-2 border-[#50a7e3]/40 bg-[#50a7e3] p-2.5 shadow-lg">
                            <img src={logoImage} alt="EMP Logo" className="h-14 w-14 object-contain" />
                            <div className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-yellow-400">
                                <div className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-yellow-400 animate-ping" style={{ animationDuration: "2s" }} />
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-center gap-2">
                            {[0, 1, 2].map((i) => (
                                <div
                                    key={i}
                                    className="h-2 w-2 rounded-full bg-green-500"
                                    style={{
                                        animation: "pulseSlow 1.5s ease-in-out infinite",
                                        animationDelay: `${i * 0.3}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-gray-200 bg-white p-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                                <Check className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-green-600">AFTER EMP</h3>
                                <p className="text-xs text-gray-500">Deterministic • Auditable • Connected</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            {AfterPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-green-200 bg-green-50 text-green-600">
                                        <point.icon className="h-3.5 w-3.5" />
                                    </div>
                                    <p className="text-xs leading-relaxed text-gray-700">{point.text}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>


            </div>
        </section>
    );
};

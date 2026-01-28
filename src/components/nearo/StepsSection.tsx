import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';

export const StepsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Calculate active step based on scroll progress
    const [activeStep, setActiveStep] = useState(1);

    // Simple scroll listener to update active step for visual feedback
    // In a real implementation we might map scrollYProgress to steps
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest < 0.3) setActiveStep(1);
            else if (latest < 0.6) setActiveStep(2);
            else setActiveStep(3);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section ref={containerRef} className="relative h-[250vh] bg-white">
            <div className="sticky top-0 h-screen md:flex p-6 max-w-7xl mx-auto items-center overflow-hidden">

                {/* Left Side: Sticky Text */}
                <div className="w-full md:w-1/2 p-8 md:pr-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900">
                        Get started in <br />
                        <span className="text-primary">3 simple steps</span>
                    </h2>

                    <div className="space-y-8 relative pl-8">
                        {/* Vertical Line */}
                        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-200">
                            <motion.div
                                className="w-full bg-primary origin-top"
                                style={{ height: useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]) }}
                            />
                        </div>

                        {[1, 2, 3].map((step) => (
                            <div key={step} className="relative flex items-center gap-6">
                                <div className={cn(
                                    "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-colors duration-300 border-2",
                                    activeStep >= step ? "bg-primary border-primary text-white" : "bg-white border-gray-200 text-gray-400"
                                )}>
                                    {step}
                                </div>
                                <span className={cn(
                                    "text-xl font-medium transition-colors duration-300",
                                    activeStep >= step ? "text-slate-900" : "text-gray-400"
                                )}>
                                    {step === 1 ? "Create an account" : step === 2 ? "Invite your team" : "Start collaborating"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Scrollable Cards */}
                {/* Since the parent is sticky h-screen, how do we scroll content? 
            Ah, the parent 'section' is tall (250vh). The 'sticky' container stays fixed.
            We need the right side content to move *through* the view or animate based on scroll.
            For this specific "Nearo" design, the right side often has cards that slide up/fade.
            Let's use a transform based on the main scroll.
        */}
                <div className="hidden md:block w-1/2 relative h-full flex items-center justify-center">
                    <div className="relative w-full aspect-square max-w-[500px]">
                        {/* Card 1 */}
                        <StepCard
                            step={1}
                            current={activeStep}
                            color="bg-blue-100"
                            title="Sign Up"
                        />
                        {/* Card 2 */}
                        <StepCard
                            step={2}
                            current={activeStep}
                            color="bg-purple-100"
                            title="Invite"
                        />
                        {/* Card 3 */}
                        <StepCard
                            step={3}
                            current={activeStep}
                            color="bg-yellow-100"
                            title="Launch"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const StepCard = ({ step, current, color, title }: { step: number, current: number, color: string, title: string }) => {
    // Show card if it's the current one. Maybe crossfade?
    // Let's simple stack them.

    // Logic: 
    // Step 1: Visible from start. 
    // Step 2: Comes in when Step 2 is active.

    // Better: Position absolute, animate opacity/y

    const isVisible = current === step;
    const isPast = current > step;

    return (
        <motion.div
            className={cn("absolute inset-0 rounded-3xl shadow-2xl flex items-center justify-center p-8", color)}
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{
                opacity: isVisible || isPast ? 1 : 0,
                y: isVisible ? 0 : isPast ? -50 : 100,
                scale: isVisible ? 1 : isPast ? 0.9 : 0.9,
                zIndex: isVisible ? 10 : isPast ? 5 : 0 // Active on top
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <h3 className="text-4xl font-bold text-slate-800/20">{title}</h3>
            <div className="absolute inset-4 border-2 border-dashed border-slate-900/10 rounded-2xl" />
        </motion.div>
    )
}

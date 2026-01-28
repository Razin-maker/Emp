import { motion } from "framer-motion";
import { ArrowRightLeft } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen px-4 pt-4 pb-4 flex flex-col">
            {/* Main Blue Card */}
            <div className="w-full flex-grow bg-[#50A6F2] rounded-[2rem] relative overflow-hidden flex flex-col items-center justify-center p-8 text-center shadow-sm">

                {/* Decorative Badge */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#FAE946] px-4 py-2 rounded-lg font-mono text-sm font-bold tracking-wider text-black flex items-center gap-2 mb-6 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:translate-y-[-2px] transition-transform"
                >
                    SWAP HERO <ArrowRightLeft size={16} />
                </motion.div>

                {/* Coming Soon Pill */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-8"
                >
                    COMING SOON
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-6xl md:text-8xl font-semibold text-white tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1]"
                >
                    Stay on top of every <br className="hidden md:block" /> task, effortlessly
                </motion.h1>

                {/* Subhead */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium"
                >
                    Simplify your workflow, collaborate with your <br className="hidden md:block" /> team, and get more done — all in one app.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <button className="px-8 py-4 bg-white text-brand-dark rounded-full font-bold tracking-wider text-sm hover:scale-105 transition-transform shadow-lg">
                        DOWNLOAD NOW
                    </button>
                    <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold tracking-wider text-sm hover:bg-white/30 transition-all">
                        LEARN MORE
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

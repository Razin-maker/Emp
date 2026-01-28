import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-brand-blue font-bold shadow-sm">
                    <Bot size={20} />
                </div>
                <span className="text-xl font-semibold text-brand-dark/90 tracking-tight">Nearo</span>
            </div>

            <div className="flex items-center gap-4">
                <button className="px-5 py-2 rounded-full bg-white text-brand-dark font-medium shadow-sm hover:shadow-md transition-all text-sm">
                    TEMLIS
                </button>
            </div>
        </motion.nav>
    );
};

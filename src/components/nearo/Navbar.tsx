import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Button } from './Button'; // Will create a generic button or just inline it

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold border border-white/30 backdrop-blur-sm">
                        😊
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Nearo</span>
                </div>

                <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
                    TEMLIS
                </button>
            </div>
        </nav>
    );
};

import logoImage from '../assets/WhatsApp_Image_2026-01-29_at_18.41.21-removebg-preview.png';

export const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-100 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-2">
                    <img src={logoImage} alt="EMP Logo" className="h-8 w-8 object-contain" />
                    <span className="text-lg font-semibold text-brand-dark">Nearo</span>
                </div>

                <div className="text-gray-500 text-sm">
                    © 2025 Holdu by Temlis. All rights reserved.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors">Privacy</a>
                    <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors">Terms</a>
                    <a href="/#contact" className="text-gray-500 hover:text-brand-blue transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};

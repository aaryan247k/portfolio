import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 py-8 text-center relative">
            <div className="container mx-auto px-6">
                <button
                    onClick={scrollToTop}
                    className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-zinc-800 hover:bg-indigo-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg shadow-zinc-900 focus:outline-none"
                    aria-label="Back to top"
                >
                    <FiArrowUp size={20} />
                </button>

                <p className="text-slate-500 text-sm mt-4 font-mono">
                    Designed & Built by Aaryan Khamkar
                </p>
                <p className="text-zinc-600 text-xs mt-2 font-mono">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

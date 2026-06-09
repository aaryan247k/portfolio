import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background glowing blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-cyan-400 font-medium tracking-wider mb-4 uppercase text-sm md:text-base">
                        Hello, World! I am
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
                            Aaryan Khamkar
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-400 mb-8 max-w-3xl leading-relaxed">
                        I craft modern, dynamic, and beautiful web experiences.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors inline-block text-lg shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-indigo-500 hover:bg-zinc-800 text-white font-medium rounded-lg transition-colors inline-block text-lg"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-slate-500 text-sm mb-2">Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1"
                >
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Hero;

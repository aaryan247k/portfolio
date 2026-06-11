import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
    {
        role: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        duration: '2022 - Present',
        description: [
            'Developed and maintained responsive user interfaces using React and Tailwind CSS.',
            'Collaborated with designers to implement pixel-perfect, modern web application designs.',
            'Improved application performance by optimizing component rendering and asset delivery.',
        ],
    },
    {
        role: 'Web Development Intern',
        company: 'Creative Agency',
        duration: '2021 - 2022',
        description: [
            'Assisted in building client websites using modern JavaScript frameworks.',
            'Participated in code reviews and agile sprint planning sessions.',
            'Designed and implemented reusable UI components to standardize the design system.',
        ],
    },
    {
        role: 'B.S. in Computer Science',
        company: 'University of Technology',
        duration: '2017 - 2021',
        description: [
            'Graduated with honors, majoring in Software Engineering and Human-Computer Interaction.',
            'Led the web development club and organized workshops on modern web technologies.',
        ],
    },
];

function Experience() {
    const [shaking, setShaking] = useState(false);

    const handleUnlockClick = () => {
        setShaking(true);
        setTimeout(() => setShaking(false), 600);
    };

    return (
        <section id="experience" className="py-24 bg-zinc-900 border-t border-zinc-800/50">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                            04.
                        </span> Experience
                    </h2>
                    <div className="w-24 h-1 bg-cyan-500/50 rounded-full"></div>
                </motion.div>

                {/* Locked Content Wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    {/* Blurred Experience Content Behind */}
                    <div
                        className="select-none pointer-events-none"
                        style={{ filter: 'blur(7px)' }}
                        aria-hidden="true"
                    >
                        <div className="space-y-12 p-2">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-8 md:pl-0">
                                    <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                                        <div className="hidden md:block col-span-1 text-right pt-1">
                                            <p className="text-slate-400 font-medium">{exp.duration}</p>
                                        </div>
                                        <div className="md:col-span-3 bg-zinc-800/40 border border-zinc-700/50 p-6 rounded-xl">
                                            <div className="md:hidden text-slate-400 font-medium text-sm mb-2">
                                                {exp.duration}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-200">
                                                {exp.role} <span className="text-indigo-400">@ {exp.company}</span>
                                            </h3>
                                            <ul className="mt-4 space-y-2">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="text-slate-400 text-sm md:text-base flex items-start gap-3">
                                                        <span className="text-indigo-400 mt-1 text-xs">▹</span> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Lock Overlay */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-3xl"
                        style={{
                            background: 'radial-gradient(ellipse at center, rgba(15,15,20,0.75) 0%, rgba(15,15,20,0.92) 70%)',
                            backdropFilter: 'blur(2px)',
                        }}
                    >
                        {/* Animated Lock Icon */}
                        <motion.div
                            animate={shaking ? {
                                x: [0, -12, 12, -10, 10, -6, 6, 0],
                                rotate: [0, -3, 3, -2, 2, -1, 1, 0],
                            } : {}}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="mb-8"
                        >
                            <div className="relative">
                                {/* Lock glow */}
                                <div className="absolute inset-0 blur-2xl opacity-30 bg-indigo-500 rounded-full scale-150"></div>

                                {/* Lock SVG */}
                                <svg
                                    width="80"
                                    height="80"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="url(#lockGradient)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="relative z-10 drop-shadow-lg"
                                >
                                    <defs>
                                        <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#818cf8" />
                                            <stop offset="100%" stopColor="#22d3ee" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    <circle cx="12" cy="16" r="1.5" fill="url(#lockGradient)" stroke="none" />
                                    <line x1="12" y1="17.5" x2="12" y2="19" stroke="url(#lockGradient)" strokeWidth="2" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Sarcastic Tagline */}
                        <h3 className="text-2xl md:text-4xl font-bold text-white text-center mb-3 tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                                Hire me
                            </span>{' '}
                            to unlock my full potential
                        </h3>

                        <p className="text-slate-500 text-sm md:text-base text-center max-w-md mb-8 leading-relaxed">
                            This content is premium. My experience is behind a paywall&nbsp;—&nbsp;except the currency is a job offer.
                        </p>

                        {/* CTA Button */}
                        <motion.a
                            href="#contact"
                            onClick={handleUnlockClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative px-8 py-3.5 rounded-xl font-semibold text-sm md:text-base overflow-hidden cursor-pointer"
                        >
                            {/* Button gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 rounded-xl"></div>
                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]" style={{ transition: 'transform 0.7s ease, opacity 0.3s ease' }}></div>
                            <span className="relative z-10 text-white flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                                </svg>
                                Request Access (It's Free, I Promise)
                            </span>
                        </motion.a>

                        {/* Subtle hint */}
                        <p style={{ color:"red" }} className="text-zinc-700 text-xs mt-6 tracking-wide">
                            Spoiler: I'm actually pretty good at this stuff
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Experience;

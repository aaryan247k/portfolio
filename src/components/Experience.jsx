import React from 'react';
import { motion } from 'framer-motion';

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

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline dot (Mobile) */}
                            <div className="md:hidden absolute left-0 top-2 w-3 h-3 bg-indigo-500 rounded-full ring-4 ring-zinc-900 outline outline-1 outline-zinc-700"></div>
                            {/* Timeline line (Mobile) */}
                            {index !== experiences.length - 1 && (
                                <div className="md:hidden absolute left-[5px] top-6 bottom-[-3rem] w-[2px] bg-zinc-800"></div>
                            )}

                            <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                                {/* Timeline info (Desktop) */}
                                <div className="hidden md:block col-span-1 text-right pt-1">
                                    <p className="text-slate-400 font-medium">{exp.duration}</p>
                                </div>

                                {/* Content Card */}
                                <div className="md:col-span-3 bg-zinc-800/40 border border-zinc-700/50 p-6 rounded-xl hover:bg-zinc-800/80 transition-colors shadow-sm">
                                    <div className="md:hidden text-slate-400 font-medium text-sm mb-2">
                                        {exp.duration}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-200">
                                        {exp.role} <span className="text-indigo-400">@ {exp.company}</span>
                                    </h3>
                                    <ul className="mt-4 space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-slate-400 text-sm md:text-base flex items-start gap-3">
                                                <span className="text-indigo-400 mt-1 mt-1 text-xs">▹</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;

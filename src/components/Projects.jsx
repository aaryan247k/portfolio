import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features payment integration, user authentication, and admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        image: './ecommerce_project.png',
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        title: 'Task Management App',
        description: 'A beautiful and responsive Kanban-style task management application. Allows users to drag and drop tasks with real-time updates.',
        tags: ['React', 'Firebase', 'Framer Motion'],
        image: './taskmanager_project.png',
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        title: 'Weather Dashboard',
        description: 'A weather forecasting application that provides real-time data and a 7-day forecast using the OpenWeather API.',
        tags: ['JavaScript', 'HTML/CSS', 'REST API'],
        image: './weather_project.png',
        github: 'https://github.com',
        live: 'https://example.com',
    },
];

function Projects() {
    return (
        <section id="projects" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                            03.
                        </span> Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-indigo-500/50 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 group shadow-lg flex flex-col h-full"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 bg-zinc-800 relative overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-indigo-500/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3 text-slate-400">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
                                            <FiGithub size={20} />
                                        </a>
                                        <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                                            <FiExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/aaryan247k"
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-indigo-500 hover:bg-zinc-800 text-white font-medium rounded-lg transition-colors inline-block"
                    >
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;

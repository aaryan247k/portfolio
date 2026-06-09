import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { TbBrandJavascript, TbBrandCpp } from 'react-icons/tb';

const skills = [
    { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
    { name: 'C', icon: <span className="font-bold">C</span>, color: 'text-blue-500' },
    { name: 'C++', icon: <TbBrandCpp />, color: 'text-blue-600' },
    { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-400' },
    { name: 'JavaScript', icon: <TbBrandJavascript />, color: 'text-yellow-400' },
    { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Skills() {
    return (
        <section id="skills" className="py-24 bg-zinc-900 shadow-inner align-center">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex flex-col items-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                            02.
                        </span> Skills & Technologies
                    </h2>
                    <div className="w-24 h-1 bg-cyan-500/50 rounded-full mt-2"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-8 flex flex-col items-center justify-center gap-4 group hover:border-indigo-500/50 transition-colors shadow-lg"
                        >
                            <div className={`text-6xl ${skill.color} opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg`}>
                                {skill.icon}
                            </div>
                            <p className="text-slate-300 font-medium tracking-wide group-hover:text-slate-100 transition-colors">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;

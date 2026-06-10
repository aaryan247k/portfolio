import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <section id="about" className="py-24 bg-zinc-950">
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
                            01.
                        </span> About Me
                    </h2>
                    <div className="w-24 h-1 bg-indigo-500/50 rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:w-1/2 text-slate-300 text-lg leading-relaxed space-y-6"
                    >
                        <p>
                            Hello! My name is Aaryan and I enjoy creating things that live on the internet.
                            My interest in web development started back in 2018 when I decided to try
                            building custom Tumblr themes — turns out hacking together HTML & CSS taught
                            me a lot about design and structure!
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at an advertising agency,
                            a start-up, a huge corporation, and a student-led design studio. My main focus these
                            days is building accessible, inclusive products and digital experiences.
                        </p>
                        <p>
                            When I'm not at the computer, I'm usually exploring new cafe spots, reading sci-fi
                            novels, or hanging out with my cat.
                        </p>
                    </motion.div>

                    {/* Profile Image Wrap */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:w-1/2 flex justify-center relative"
                    >
                        <div className="relative group w-64 h-64 md:w-80 md:h-80">
                            {/* Back Frame */}
                            <div className="absolute inset-0 border-2 border-indigo-400 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                            {/* Image Container */}
                            <div className="absolute inset-0 bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-10">
                                <img
                                    src="/profile_pic.jpeg"
                                    alt="Aaryan's profile photo"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-indigo-500/20 mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-20"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;

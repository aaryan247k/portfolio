import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Contact() {
    return (
        <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background glowing blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-indigo-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="flex justify-center mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-bold text-lg">
                            05. What's Next?
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-100 mt-2">
                        Get In Touch
                    </h2>

                    <p className="text-slate-400 text-lg leading-relaxed mb-10">
                        Although I'm not currently looking for any new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:hello@example.com"
                        className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors inline-block text-lg shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transform hover:-translate-y-1 duration-300"
                    >
                        Say Hello
                    </a>

                    <div className="mt-16 pt-8 border-t border-zinc-800/50 flex justify-center gap-8">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors hover:-translate-y-1 duration-300">
                            <span className="sr-only">GitHub</span>
                            <FiGithub size={28} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hover:-translate-y-1 duration-300">
                            <span className="sr-only">LinkedIn</span>
                            <FiLinkedin size={28} />
                        </a>
                        <a href="mailto:hello@example.com" className="text-slate-400 hover:text-indigo-400 transition-colors hover:-translate-y-1 duration-300">
                            <span className="sr-only">Email</span>
                            <FiMail size={28} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, BarChart } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6">
                        Available for New Projects
                    </div>
                    <h1 className="text-5xl md:text-7xl mb-6">
                        Hi, I'm <br />
                        <span className="gradient-text">Dadi Praveen Venkat Puskar</span>
                    </h1>
                    <p className="text-xl text-text-muted mb-8 max-w-lg">
                        A passionate Full-Stack Developer & Ethical Hacker dedicated to building secure, scalable, and data-driven digital experiences.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#contact" className="btn btn-primary group">
                            Get in Touch <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </a>
                        <a href="#about" className="btn border border-glass-border hover:bg-white/5">
                            Learn More
                        </a>
                    </div>

                    <div className="mt-12 flex space-x-8 text-text-muted">
                        <div className="flex items-center gap-2">
                            <Code size={20} className="text-primary" /> <span>Web Dev</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield size={20} className="text-secondary" /> <span>Cyber Security</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BarChart size={20} className="text-accent" /> <span>Data Analyst</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="w-full aspect-square rounded-3xl bg-gradient-to-tr from-primary to-secondary blur-[80px] opacity-20 absolute -z-10 animate-pulse"></div>
                    <div className="glass-card p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4">
                            <div className="w-3 h-3 rounded-full bg-red-400 mb-2"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400 mb-2"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <pre className="text-sm font-mono text-primary/80">
                            <code>{`
const developer = {
  name: "Dadi Praveen",
  role: "Full-Stack Dev",
  skills: ["React", "Node.js", "Python"],
  passions: ["Ethical Hacking", "AI/ML"],
  college: "Vignan's VIIT",
  sac_role: "Joint Secretary"
};

// Ready to build your vision.
                `}</code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

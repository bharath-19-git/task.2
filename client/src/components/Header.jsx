import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'SAC', href: '#sac' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'nav-scrolled' : 'nav-transparent'}`}
            style={{
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
                backgroundColor: isScrolled ? 'var(--glass)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(16px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none'
            }}
        >
            <div className="container row-between">
                <a href="#home" className="text-2xl font-black gradient-text tracking-tighter">DPVP</a>

                {/* Desktop Nav */}
                <div className="desktop-only">
                    <ul className="row gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li className="row gap-4 ml-4">
                            <a href="https://github.com/dadipuskar19" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors"><Github size={18} /></a>
                            <a href="https://www.linkedin.com/in/dadi-praveen-venkat-puskar-3229a3327" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors"><Linkedin size={18} /></a>
                        </li>
                    </ul>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-only text-white bg-transparent border-none cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-only glass-card rounded-none border-x-0 border-b-0 overflow-hidden"
                    >
                        <ul className="container py-8 col gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="block text-lg font-bold uppercase tracking-widest"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li className="row gap-6 pt-4 border-t border-glass-border">
                                <a href="https://github.com/dadipuskar19" target="_blank" rel="noopener noreferrer" className="text-text-muted"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/dadi-praveen-venkat-puskar-3229a3327" target="_blank" rel="noopener noreferrer" className="text-text-muted"><Linkedin size={24} /></a>
                                <a href="mailto:dadaipraveenvenkatpuskar@gmail.com" className="text-text-muted"><Mail size={24} /></a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;

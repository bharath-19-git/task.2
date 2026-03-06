import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import { BookOpen, Award, Code2, ShieldCheck, Database, Layout, Mail, Phone, MapPin, ExternalLink, Cpu, Github, Linkedin, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const skills = [
    { category: "Languages", items: ["Java", "C", "C++", "Python", "JavaScript", "SQL"] },
    { category: "Web Development", items: ["React.js", "Node.js", "Express", "HTML5", "CSS3"] },
    { category: "Cyber Security", items: ["Ethical Hacking", "Network Security", "Security Audit"] },
    { category: "Data Science", items: ["Data Analysis", "AI/ML basics", "Tableau", "Excel"] }
  ];

  const certifications = [
    { name: "AWS EduSkills", issuer: "Amazon Web Services" },
    { name: "AI-ML EduSkills", issuer: "EduSkills Foundations" },
    { name: "Cisco C Essential", issuer: "Cisco Networking Academy" },
    { name: "Cisco Python Essential", issuer: "Cisco Networking Academy" }
  ];

  return (
    <div className="bg-background text-text-main min-h-screen">
      <Header />
      <Hero />

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="md-grid-2">
          <div className="col gap-6">
            <p className="text-xl text-text-muted italic leading-relaxed">
              "Building the future with code and securing the digital landscape."
            </p>
            <p className="text-lg leading-relaxed">
              I am a dedicated student at <span className="text-primary font-bold">VIGNAN'S INSTITUTE OF INFORMATION TECHNOLOGY</span>, majoring in <span className="text-secondary font-bold">Information Technology</span>.
            </p>
            <p className="text-lg leading-relaxed">
              I have a deep passion for <span className="font-semibold text-accent">Data Analysis</span>, <span className="font-semibold text-primary">Web Development</span>, and <span className="font-semibold text-secondary">Cyber Security</span>. I am constantly exploring new technologies to build efficient and secure applications.
            </p>
          </div>
          <div className="glass-card p-10 border-l-4 border-l-primary col gap-6">
            <h3 className="text-2xl font-bold row gap-3">
              <BookOpen className="text-primary" /> Core Interests
            </h3>
            <ul className="col gap-4">
              <li className="row gap-3 text-lg"><div className="w-2.5 h-2.5 rounded-full bg-primary" /> Web Development (Full-Stack)</li>
              <li className="row gap-3 text-lg"><div className="w-2.5 h-2.5 rounded-full bg-secondary" /> Cyber Security (Ethical Hacking)</li>
              <li className="row gap-3 text-lg"><div className="w-2.5 h-2.5 rounded-full bg-accent" /> Data Analysis</li>
              <li className="row gap-3 text-lg"><div className="w-2.5 h-2.5 rounded-full bg-blue-400" /> AI/ML Technologies</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education" className="bg-surface/10">
        <div className="glass-card p-12 relative overflow-hidden group max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="relative z-10 row-between gap-8 md-row">
            <div className="flex-1 col gap-3">
              <h3 className="text-3xl font-extrabold mb-3">VIGNAN'S INSTITUTE OF INFORMATION TECHNOLOGY</h3>
              <p className="text-primary font-bold text-xl">Bachelor of Technology in Information Technology</p>
              <div className="row gap-6 text-text-muted mt-4">
                <span className="row gap-2 px-3 py-1 bg-white/5 rounded-lg border border-glass-border"><Cpu size={18} className="text-primary" /> Batch (2024 - 2028)</span>
                <span className="row gap-2 px-3 py-1 bg-white/5 rounded-lg border border-glass-border"><MapPin size={18} className="text-secondary" /> Visakhapatnam, AP</span>
              </div>
            </div>
            <div className="px-8 py-6 bg-primary/10 border border-primary/20 rounded-3xl text-center shadow-lg transform hover:scale-105 transition-transform">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-black">Current Status</span>
              <div className="text-5xl font-black text-white mt-1">B.Tech</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills">
        <div className="lg-grid-4">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass-card p-8 border-t-4 col gap-6"
              style={{ borderTopColor: idx % 2 === 0 ? 'var(--primary)' : 'var(--secondary)' }}
            >
              <h4 className="text-xl font-black gradient-text text-center uppercase tracking-wider">{skillGroup.category}</h4>
              <div className="row gap-2.5 justify-center flex-wrap">
                {skillGroup.items.map(item => (
                  <span key={item} className="px-4 py-1.5 bg-white/5 border border-glass-border rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" title="Certifications" className="bg-surface/10">
        <div className="md-grid-2 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-6 row-between hover:translate-x-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="row gap-5">
                <div className="p-4 bg-secondary/10 rounded-2xl text-secondary">
                  <Award size={28} />
                </div>
                <div className="col">
                  <h4 className="text-xl font-bold">{cert.name}</h4>
                  <p className="text-text-muted font-medium">{cert.issuer}</p>
                </div>
              </div>
              <ExternalLink size={20} className="text-text-muted opacity-30" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Leadership Section */}
      <Section id="sac" title="Leadership Role">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-card p-12 bg-gradient-to-br from-primary/10 to-transparent border-t-2 border-l-2 border-white/10"
            whileHover={{ scale: 1.01 }}
          >
            <div className="row gap-8 mb-8 md-row">
              <div className="p-6 bg-primary rounded-3xl text-white shadow-2xl shadow-primary/20">
                <Layout size={40} />
              </div>
              <div className="col">
                <h3 className="text-3xl font-black mb-1">Joint Secretary</h3>
                <p className="text-primary font-bold text-xl uppercase tracking-widest">Student Activity Council (SAC)</p>
              </div>
            </div>
            <p className="text-xl text-text-muted leading-relaxed font-medium mb-8">
              Actively leading student initiatives and coordinating cross-departmental activities in college. Managing events, fostering student engagement, and serving as a bridge between the student body and administration.
            </p>
            <div className="lg-grid-4">
              {['Event Planning', 'Coordination', 'Advocacy', 'Leadership'].map(tag => (
                <div key={tag} className="px-4 py-2 bg-white/5 border border-glass-border rounded-xl text-center text-sm font-bold text-primary">
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" className="bg-surface/10">
        <div className="md-grid-2 items-start">
          <div className="col gap-10">
            <h3 className="text-4xl font-black leading-tight">Let's discuss something <span className="gradient-text">extraordinary</span> together.</h3>
            <p className="text-xl text-text-muted leading-relaxed">
              I am interested in internship opportunities and collaborations in Software Development or Cyber Security.
            </p>

            <div className="col gap-8">
              <div className="row gap-6 group">
                <div className="p-4 glass-card text-primary group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <div className="col">
                  <p className="text-xs uppercase tracking-widest text-text-muted font-bold mb-1">Email Me</p>
                  <a href="mailto:dadaipraveenvenkatpuskar@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">dadaipraveenvenkatpuskar@gmail.com</a>
                </div>
              </div>

              <div className="row gap-6 group">
                <div className="p-4 glass-card text-secondary group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div className="col">
                  <p className="text-xs uppercase tracking-widest text-text-muted font-bold mb-1">Call Me</p>
                  <p className="text-lg font-bold">+91 8639357822</p>
                </div>
              </div>
            </div>

            <div className="row gap-6 pt-8">
              <a href="https://github.com/dadipuskar19" target="_blank" rel="noopener noreferrer" className="p-4 glass-card hover:bg-white/5">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/dadi-praveen-venkat-puskar-3229a3327" target="_blank" rel="noopener noreferrer" className="p-4 glass-card hover:bg-white/5">
                <Linkedin size={28} />
              </a>
            </div>
          </div>

          <div className="glass-card p-10 border-b-8 border-b-primary/30 col gap-6">
            <form className="col gap-6" onSubmit={async (e) => {
              e.preventDefault();
              const formData = {
                name: e.target[0].value,
                email: e.target[1].value,
                message: e.target[2].value
              };

              try {
                const response = await fetch('https://task-2-2-329v.onrender.com/', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(formData)
                });

                if (response.ok) {
                  alert("Thank you, " + formData.name + "! Your message has been sent successfully.");
                  e.target.reset();
                } else {
                  alert("Something went wrong. Please try again.");
                }
              } catch (error) {
                console.error("Error submitting form:", error);
                alert("Server is offline. This is a local development demo.");
              }
            }}>
              <div className="col gap-3">
                <label className="text-xs uppercase tracking-widest font-black ml-1 text-text-muted">Full Name</label>
                <input className="w-full bg-background/50 border border-glass-border p-5 rounded-2xl focus:border-primary focus:outline-none transition-colors" placeholder="Dadi Praveen" required />
              </div>
              <div className="col gap-3">
                <label className="text-xs uppercase tracking-widest font-black ml-1 text-text-muted">Email Address</label>
                <input type="email" className="w-full bg-background/50 border border-glass-border p-5 rounded-2xl focus:border-primary focus:outline-none transition-colors" placeholder="praveen@example.com" required />
              </div>
              <div className="col gap-3">
                <label className="text-xs uppercase tracking-widest font-black ml-1 text-text-muted">Your Message</label>
                <textarea className="w-full bg-background/50 border border-glass-border p-5 rounded-2xl focus:border-primary focus:outline-none transition-colors min-h-[150px]" placeholder="I'd like to talk about..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full py-5 rounded-2xl text-lg font-black tracking-widest uppercase shadow-2xl">
                Send Perspective
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-20 border-t border-glass-border bg-black/20">
        <div className="container text-center">
          <p className="gradient-text font-black text-3xl mb-8 tracking-tighter">DPVP</p>
          <div className="row justify-center gap-8 mb-12 text-sm font-bold uppercase tracking-[0.2em] text-text-muted flex-wrap">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-primary transition-colors">Certificates</a>
            <a href="#sac" className="hover:text-primary transition-colors">Leadership</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-text-muted text-xs font-medium tracking-widest opacity-50">
            DESIGNED & BUILT BY DADI PRAVEEN VENKAT PUSKAR &bull; &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 p-4 bg-primary text-white rounded-full shadow-2xl z-[60] hover:bg-primary-hover focus:outline-none"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

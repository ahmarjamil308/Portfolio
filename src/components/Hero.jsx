import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Sparkles,
  Terminal,
  Code
} from 'lucide-react';
import profile from '../config/profile';
import Hero3DVisual from './Hero3DVisual';

const roles = [
  'Software Developer',
  'Full-Stack Web Architect',
  'Flutter Mobile Specialist',
  'Problem Solver & Engineer'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  // Dynamic typewriter effect
  useEffect(() => {
    const currentFullText = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentFullText.substring(0, text.length + 1));
        if (text === currentFullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(currentFullText.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 45 : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed]);

  return (
    <section className="hero section-wrap" id="home">
      {/* Hero Copy / Left Column */}
      <div className="hero-copy">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="status-dot-pulse" />
          <span className="eyebrow-text">AVAILABLE FOR OPPORTUNITIES</span>
          <Sparkles size={13} className="sparkle-icon" />
        </motion.div>

        <motion.p
          className="hero-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Ahmar <span className="gradient-text">Jamil</span>
          <b className="period-accent">.</b>
        </motion.h1>

        {/* Dynamic Interactive Role Typing */}
        <motion.div
          className="hero-role-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
        >
          <Terminal size={18} className="role-icon" />
          <span className="typewriter-text">{text}</span>
          <span className="typewriter-cursor">_</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Transforming bold ideas into <em>high-impact software.</em>
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          Computer Science graduate from <strong>Riphah International University</strong>.
          I engineer ultra-fast web applications, cross-platform mobile apps with Flutter,
          and robust systems with clean, scalable code.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <a
            className="button button-primary glow-btn"
            href="#projects"
          >
            <span>Explore My Work</span> <ArrowUpRight size={17} />
          </a>

          <a
            className="button button-ghost"
            href="#contact"
          >
            <span>Get in Touch</span> <ArrowDownRight size={17} />
          </a>
        </motion.div>

        {/* Social Links & Location */}
        <div className="hero-socials">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>

          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={19} />
          </a>

          <div className="location-pill">
            <span className="loc-indicator" />
            <span>Pakistan · Working Worldwide</span>
          </div>
        </div>

        {/* Quick Micro Tech Ribbon */}
        <div className="hero-tech-ribbon">
          <span><Code size={13} /> STACK</span>
          <div className="ribbon-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Flutter</span>
            <span>Python</span>
            <span>Three.js</span>
          </div>
        </div>
      </div>

      {/* 3D Interactive Visual / Centerpiece */}
      <motion.div
        className="hero-visual-column"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <Hero3DVisual />
      </motion.div>

      {/* Scroll Cue */}
      <a
        className="scroll-cue"
        href="#about"
      >
        <span className="cue-line" /> Scroll to explore
      </a>
    </section>
  );
}


import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
} from 'lucide-react';
import profile from '../config/profile';

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      {/* Hero Text */}
      <div className="hero-copy">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="status-dot" />
          AVAILABLE FOR OPPORTUNITIES
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
          Ahmar <span>Jamil</span><b>.</b>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I build digital <em>experiences.</em>
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          Computer Science graduate and software developer
          crafting thoughtful web applications, mobile
          experiences, and practical digital solutions.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowUpRight size={17} />
          </a>

          <a className="button button-ghost" href="#contact">
            Get in touch <ArrowDownRight size={17} />
          </a>
        </motion.div>

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

          <span>Pakistan · Working worldwide</span>
        </div>
      </div>

      {/* Animated Profile Image */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.82, rotate: -7 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1,
          delay: 0.25,
          ease: 'easeOut',
        }}
      >
        <div className="visual-grid" />

        {/* 3D Orbit Rings */}
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />

        {/* Your Picture */}
        <div className="profile-photo-frame">
          <img
            src="/images/ahmar-jamil.jpg"
            alt="Ahmar Jamil - Software Developer"
            className="profile-image"
          />
        </div>

        {/* Floating Information Cards */}
        <div className="floating-chip chip-code">
          <span className="chip-symbol">{'</>'}</span>
          <div>
            <strong>Clean code</strong>
            <small>Built with purpose</small>
          </div>
        </div>

        <div className="floating-chip chip-stack">
          <span className="chip-symbol">✳</span>
          <div>
            <strong>Full-stack</strong>
            <small>Web & mobile</small>
          </div>
        </div>

        <div className="visual-caption">
          CREATIVE THINKING <span>×</span> ENGINEERING
        </div>
      </motion.div>

      <a className="scroll-cue" href="#about">
        <span /> Scroll to explore
      </a>
    </section>
  );
}

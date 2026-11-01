import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  GraduationCap,
  Layers3,
  Cpu,
  Sparkles,
  Award,
  Terminal,
  Zap
} from 'lucide-react';
import InteractiveCard3D from './InteractiveCard3D';
import About3DCanvas from './About3DCanvas';

const stats = [
  { value: 'BS CS', label: 'Riphah Int. University', icon: GraduationCap, note: 'Graduated' },
  { value: '5+', label: 'Core Tech Stacks', icon: Code2, note: 'Web & Mobile' },
  { value: '6+', label: 'Featured Projects', icon: Layers3, note: 'Full-stack & Mobile' },
  { value: '100%', label: 'Commitment to Quality', icon: Award, note: 'Clean Code' }
];

const highlights = [
  {
    icon: Cpu,
    title: 'Modern Architecture',
    desc: 'Scalable frontend & backend design using React, Node, Express, MongoDB, and Flutter.'
  },
  {
    icon: Zap,
    title: 'Performance & 3D Web',
    desc: 'Creating immersive interactive user interfaces with Three.js, WebGL, and Framer Motion.'
  },
  {
    icon: Terminal,
    title: 'Clean Engineering',
    desc: 'Deep foundations in Object-Oriented Programming, Data Structures, and Python algorithms.'
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section className="section-wrap section" id="about">
      <div className="section-heading">
        <span className="section-kicker">01 / ABOUT ME</span>
        <h2>
          Architecting digital products with <em>curiosity & precision.</em>
        </h2>
        <p>A glimpse into my background, engineering philosophy, and capabilities.</p>
      </div>

      <div className="about-grid">
        {/* 3D Interactive WebGL Crystal & Brand Mark */}
        <InteractiveCard3D className="about-mark glass-card" maxTilt={8}>
          <About3DCanvas />

          <div className="about-mark-content">
            <span className="big-letters">
              AJ<span>.</span>
            </span>
            <p>
              Curious Mind.<br />
              <strong>3D Web & Mobile Builder.</strong>
            </p>
            <div className="mark-badge">
              <Sparkles size={13} />
              <span>FULL STACK DEVELOPER</span>
            </div>
          </div>
        </InteractiveCard3D>

        {/* Content & Narrative */}
        <div className="about-copy">
          {/* Tab Selector */}
          <div className="about-tabs">
            <button
              className={`about-tab-btn ${activeTab === 'story' ? 'active' : ''}`}
              onClick={() => setActiveTab('story')}
            >
              My Story
            </button>
            <button
              className={`about-tab-btn ${activeTab === 'values' ? 'active' : ''}`}
              onClick={() => setActiveTab('values')}
            >
              Engineering Values
            </button>
          </div>

          {activeTab === 'story' ? (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="lead">
                I'm a Computer Science graduate from <strong>Riphah International University</strong> with
                a passion for building modern web applications and fluid mobile experiences.
              </p>
              <p>
                My work spans full-stack engineering (MERN stack), cross-platform mobile apps (Flutter & Firebase),
                and systems programming (C++, Python). I combine solid computer science fundamentals with an eye
                for interactive 3D aesthetics and snappy performance.
              </p>
              <p>
                Whether developing an e-commerce platform, crafting real-time safety apps, or experimenting
                with Three.js WebGL graphics, I focus on delivering clean, maintainable, and user-centric software.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="values"
              className="about-highlights-list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div className="about-highlight-card" key={title}>
                  <div className="highlight-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Interactive Stats Cards */}
          <div className="stats-row">
            {stats.map(({ value, label, icon: Icon, note }) => (
              <InteractiveCard3D
                className="stat-card"
                key={label}
                maxTilt={10}
                glare={false}
              >
                <div className="stat-header">
                  <Icon size={19} />
                  <span className="stat-note">{note}</span>
                </div>
                <strong>{value}</strong>
                <span>{label}</span>
              </InteractiveCard3D>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

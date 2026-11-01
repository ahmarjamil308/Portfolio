import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Orbit
} from 'lucide-react';
import InteractiveCard3D from './InteractiveCard3D';
import Skills3DSphere from './Skills3DSphere';

const skillCategories = [
  {
    title: 'Frontend & 3D Web',
    icon: Layers,
    accent: '#38bdf8',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'HTML5 & Modern CSS3', level: 95 },
      { name: 'Three.js & WebGL', level: 78 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Tailwind & Responsive UI', level: 90 }
    ]
  },
  {
    title: 'Backend & APIs',
    icon: Cpu,
    accent: '#a855f7',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 86 },
      { name: 'Python', level: 84 },
      { name: 'Django', level: 76 },
      { name: 'RESTful API Architecture', level: 90 },
      { name: 'Authentication (JWT)', level: 88 }
    ]
  },
  {
    title: 'Mobile App Development',
    icon: Code2,
    accent: '#ec4899',
    skills: [
      { name: 'Flutter Framework', level: 88 },
      { name: 'Dart Language', level: 85 },
      { name: 'Firebase Cloud Services', level: 82 },
      { name: 'State Management (Provider)', level: 85 },
      { name: 'Cross-Platform UI/UX', level: 90 },
      { name: 'Mobile Sensors & Geolocation', level: 80 }
    ]
  },
  {
    title: 'Core Systems & Databases',
    icon: Database,
    accent: '#10b981',
    skills: [
      { name: 'MongoDB', level: 86 },
      { name: 'Firebase Firestore', level: 82 },
      { name: 'C / C++', level: 84 },
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'Object-Oriented Design (OOP)', level: 92 },
      { name: 'Git & GitHub Version Control', level: 88 }
    ]
  }
];

export default function Skills() {
  return (
    <section className="section-wrap section" id="skills">
      <div className="section-heading">
        <span className="section-kicker">03 / TECHNICAL ARSENAL</span>
        <h2>
          Skills & <em>Competencies.</em>
        </h2>
        <p>A comprehensive overview of my technical stack and proficiency across domains.</p>
      </div>

      {/* 3D Celestial Tech Sphere Showcase */}
      <div className="skills-3d-feature-card glass-card">
        <div className="sphere-card-header">
          <div className="sphere-header-text">
            <span className="sphere-kicker">
              <Orbit size={14} className="text-cyan spin-slow" /> 3D PLANETARY ECOSYSTEM
            </span>
            <h3>Interactive Tech Sphere</h3>
            <p>Drag in 3D to orbit through core frameworks, languages, and runtime engines.</p>
          </div>
        </div>

        <Skills3DSphere />
      </div>

      {/* Categorized Skill Panels Grid */}
      <div className="skills-grid">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <InteractiveCard3D
              key={category.title}
              className="skill-panel glass-card"
              maxTilt={8}
              glare={true}
            >
              <div className="skill-panel-top">
                <div
                  className="skill-icon-wrap"
                  style={{ color: category.accent, borderColor: `${category.accent}40` }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <span className="skill-panel-num">0{idx + 1}</span>
                  <h3>{category.title}</h3>
                </div>
              </div>

              {/* Skill meter bars */}
              <div className="skill-meters-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-meter-row">
                    <div className="skill-meter-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress-track">
                      <motion.div
                        className="skill-progress-fill"
                        style={{
                          background: `linear-gradient(90deg, ${category.accent}88, ${category.accent})`
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </InteractiveCard3D>
          );
        })}
      </div>

      {/* Modern Tech Ecosystem Cloud */}
      <div className="tech-orbit-showcase glass-card">
        <div className="orbit-info">
          <Sparkles size={18} className="orbit-sparkle" />
          <div>
            <h4>Full Tooling & Infrastructure</h4>
            <p>Continuously expanding knowledge into 3D WebGL, modern UI animation, and cloud deployment.</p>
          </div>
        </div>
        <div className="tech-tags-cloud">
          {[
            'React.js', 'Flutter', 'Node.js', 'Three.js', 'MongoDB', 'Python',
            'Express.js', 'Firebase', 'C++', 'Dart', 'Framer Motion', 'TailwindCSS',
            'Git', 'REST APIs', 'Vercel', 'Vite'
          ].map((tag) => (
            <span key={tag} className="tech-cloud-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills" aria-label="Skills section">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-categories">
          <div className="skills-category">
            <h3>Programming Languages</h3>
            <div className="skills-tags">
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">Dart</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Frameworks & Libraries</h3>
            <div className="skills-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">Flutter</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Databases</h3>
            <div className="skills-tags">
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Firebase</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Specializations</h3>
            <div className="skills-tags">
              <span className="skill-tag">Software Engineering</span>
              <span className="skill-tag">Full-Stack Development</span>
              <span className="skill-tag">Mobile Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
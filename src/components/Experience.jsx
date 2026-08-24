// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience" aria-label="Experience section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-header">
              <h3>Co-Founder & COO</h3>
              <span className="company">ByteShift</span>
              <span className="date">2025 - Present</span>
            </div>
            <p>
              Leading strategic operations, product development, and business growth. 
              Overseeing cross-functional teams and driving innovation in software solutions.
            </p>
          </div>
          <div className="experience-item">
            <div className="experience-header">
              <h3>Python developer</h3>
              <span className="company">CongoRise INFOTECH</span>
              <span className="date">1 month</span>
            </div>
            <p>
              Developed Python-based applications using core Python programming concepts and problem-solving techniques.
                Implemented basic security practices and contributed to application logic, debugging, and system design.

            </p>
          </div>
          <div className="experience-item">
            <div className="experience-header">
              <h3>MERN Stack Developer</h3>
              <span className="company">Amrood's Lab</span>
              <span className="date">2 months</span>
            </div>
            <p>
              Assisted in developing and maintaining web applications using MongoDB, Express.js, React.js, and Node.js.
                Contributed to implementing basic application features, debugging, and improving overall website functionality.
            </p>
          </div>
          <div className="experience-item">
            <div className="experience-header">
              <h3>MERN Stack Developer</h3>
              <span className="company">Sheikhupura IT Park</span>
              <span className="date">6 months</span>
            </div>
            <p>
              Assisted in developing and maintaining web applications using MongoDB, Express.js, React.js, and Node.js.
                Contributed to implementing basic application features, debugging, and improving overall website functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
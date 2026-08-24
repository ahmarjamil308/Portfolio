// src/components/About.jsx - Updated with scroll animation
import React from 'react';
import profile from '../config/profile';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="about" aria-label="About section" ref={ref}>
      <div className="section-container">
        <h2 className={`section-title ${isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}>
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p className={isVisible ? 'animate-on-scroll visible' : 'animate-on-scroll'}>
              I'm <strong>{profile.name}</strong>, a Computer Science graduate from Riphah International University 
              with a deep passion for software development, Web or App developement and technology innovation. 
              My academic foundation in Computer Science, combined with hands-on experience in full-stack 
              development  has shaped me into a versatile technology professional.
            </p>
            <p className={isVisible ? 'animate-on-scroll visible delay-1' : 'animate-on-scroll delay-1'}>
              As the <strong>{profile.role}</strong>, I bridge the gap between technical 
              excellence and business strategy. My journey spans across software engineering, where I've 
              worked with technologies like React, Node.js, Django, and Flutter, 
              where I apply security principles to build robust and secure applications.
            </p>
            <p className={isVisible ? 'animate-on-scroll visible delay-2' : 'animate-on-scroll delay-2'}>
              I believe in creating technology that makes a difference. Whether it's developing 
              full-stack applications, ensuring cyber security best practices, or leading strategic 
              initiatives at ByteShift, my goal is to deliver solutions that are innovative, secure, 
              and impactful.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">BS CS</span>
                <span className="stat-label">Riphah International University</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies Mastered</span>
              </div>
              <div className="stat">
                <span className="stat-number">5</span>
                <span className="stat-label">Major Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
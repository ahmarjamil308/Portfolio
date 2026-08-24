// src/components/Hero.jsx - Updated with scroll animation
import React, { useState, useEffect, useRef } from 'react';
import profile from '../config/profile';
import SocialIcons from './SocialIcons';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero" ref={sectionRef} aria-label="Hero section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">Welcome to my portfolio</div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{profile.name}</span>
          </h1>
          <h2 className="hero-subtitle">{profile.role}</h2>
          <p className="hero-description">
            Computer Science graduate with expertise in software development, 
            cybersecurity, and business leadership. Building innovative technology 
            solutions that bridge the gap between engineering and business strategy.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get in Touch</a>
            <a href="#projects" className="btn-secondary">View Projects</a>
          </div>
          <SocialIcons className="hero-social" />
        </div>
        <div className="hero-image">
          <div className="profile-image-container">
            {!imageError ? (
              <img 
                src={profile.image} 
                alt={`${profile.name} - Profile photo`}
                onError={() => setImageError(true)}
                className="profile-image"
                loading="eager"
                width="300"
                height="300"
              />
            ) : (
              <div className="profile-placeholder" role="img" aria-label={`${profile.name} profile placeholder`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>Add Photo</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
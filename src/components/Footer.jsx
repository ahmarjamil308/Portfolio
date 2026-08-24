// src/components/Footer.jsx
import React from 'react';
import profile from '../config/profile';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-text">AJ</span>
            <p>{profile.name} • {profile.role}</p>
          </div>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <SocialIcons />
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
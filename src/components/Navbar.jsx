// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import SocialIcons from './SocialIcons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text" aria-label="Ahmar Jamil">AJ</span>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#experience" onClick={toggleMenu}>Experience</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
        <div className="navbar-social">
          <SocialIcons />
        </div>
        <div className="hamburger" onClick={toggleMenu} role="button" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
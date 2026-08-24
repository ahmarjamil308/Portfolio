// src/components/Contact.jsx
import React from 'react';
import profile from '../config/profile';
import SocialIcons from './SocialIcons';

const Contact = () => {
  const hasSocial = (platform) => {
    return profile.social[platform] && profile.social[platform] !== '';
  };

  const getSocialUrl = (platform) => {
    const url = profile.social[platform];
    if (!url) return '#';
    
    switch(platform) {
      case 'email':
        return `mailto:${url}`;
      case 'whatsapp':
        const cleanNumber = url.replace(/\D/g, '');
        return `https://wa.me/${cleanNumber}`;
      default:
        return url;
    }
  };

  return (
    <section id="contact" className="contact" aria-label="Contact section">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Let's connect and discuss how we can work together.</p>
            <div className="contact-details">
              {hasSocial('email') && (
                <a href={getSocialUrl('email')} className="contact-item">
                  <span aria-hidden="true">✉️</span> {profile.social.email}
                </a>
              )}
              {hasSocial('whatsapp') && (
                <a href={getSocialUrl('whatsapp')} className="contact-item" target="_blank" rel="noopener noreferrer">
                  <span aria-hidden="true">📱</span> WhatsApp
                </a>
              )}
              {hasSocial('instagram') && (
                <a href={getSocialUrl('instagram')} className="contact-item" target="_blank" rel="noopener noreferrer">
                  <span aria-hidden="true">📸</span> Instagram
                </a>
              )}
              {hasSocial('github') && (
                <a href={getSocialUrl('github')} className="contact-item" target="_blank" rel="noopener noreferrer">
                  <span aria-hidden="true">💻</span> GitHub
                </a>
              )}
              {hasSocial('linkedin') && (
                <a href={getSocialUrl('linkedin')} className="contact-item" target="_blank" rel="noopener noreferrer">
                  <span aria-hidden="true">🔗</span> LinkedIn
                </a>
              )}
              <div className="contact-social">
                <SocialIcons />
              </div>
            </div>
          </div>
          <form className="contact-form" aria-label="Contact form">
            <input type="text" placeholder="Your Name" className="form-input" aria-label="Your name" />
            <input type="email" placeholder="Your Email" className="form-input" aria-label="Your email" />
            <textarea placeholder="Your Message" className="form-input" rows="4" aria-label="Your message"></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// src/components/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services" aria-label="Services section">
      <div className="section-container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon" aria-hidden="true">🚀</div>
            <h3>Website Development</h3>
            <p>Full-stack development services using modern technologies and best practices.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" aria-hidden="true">💻</div>
            <h3>Software Development</h3>
            <p>Custom software solutions, application development, and system design.</p>
            </div>
          <div className="service-card">
            <div className="service-icon" aria-hidden="true">📱</div>
            <h3>Mobile Application Development</h3>
            <p>Cross-platform mobile apps using Flutter and modern development frameworks.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" aria-hidden="true">💼</div>
            <h3>Technology Strategy</h3>
            <p>Strategic planning and consulting for technology-driven business growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
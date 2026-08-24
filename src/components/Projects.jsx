// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects" aria-label="Projects section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">LifeGuard 360</div>
            </div>
            <h3>LifeGuard 360</h3>
            <p>
              A comprehensive mobile safety and emergency response application developed using Flutter. Designed to provide real-time monitoring, check-in reminders, activity tracking, and emergency alerts to help keep users safe.

            </p>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">EatValt</div>
            </div>
            <h3>EatValt</h3>
            <p>
              A mobile food ordering application developed using Flutter. Designed to allow users to browse food items, place orders, track orders, and rate their food and overall experience.


            </p>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">E-Commerce Platform</div>
            </div>
            <h3>E-Commerce Platform</h3>
            <p>
              A full-featured e-commerce solution with secure payment processing, inventory management, 
              and user authentication. Developed using the MERN stack with integrated security measures.
            </p>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">Bank Management System</div>
            </div>
            <h3>Bank Management System</h3>
            <p>
              A banking management application developed using C++ for account management, transaction processing, and financial record handling. Implemented basic data validation, file handling, and secure transaction operations.

            </p>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">Library Management System</div>
            </div>
            <h3>Library Management System</h3>
            <p>
              An efficient Library Management System developed using C++ and Data Structures & Algorithms (DSA) for managing books, members, and library records. Implemented search, book issuing and returning, and record management using fundamental data structures.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
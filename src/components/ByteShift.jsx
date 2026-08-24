// src/components/ByteShift.jsx
import React from 'react';
import profile from '../config/profile';

const ByteShift = () => {
  return (
    <section id="byteshift" className="byteshift" aria-label="ByteShift section">
      <div className="section-container">
        <div className="byteshift-content">
          <div className="byteshift-header">
            <h2 className="section-title">ByteShift</h2>
            <div className="byteshift-role">
              <h3>{profile.name}</h3>
              <p className="role-title">{profile.role}</p>
            </div>
          </div>
          <div className="byteshift-description">
            <p>
              ByteShift is a technology company focused on delivering innovative software solutions 
              that transform businesses. As Co-Founder and COO, I oversee strategic operations, 
              product development, and business growth initiatives.
            </p>
            <p>
              My role involves translating technical vision into business strategy, ensuring that 
              our solutions are not only technologically advanced but also commercially viable. 
              I lead cross-functional teams, drive operational efficiency, and foster a culture 
              of innovation and excellence.
            </p>
            <p>
              At ByteShift, we're committed to leveraging cutting-edge technologies to solve 
              real-world problems, delivering value to our clients and stakeholders through 
              thoughtful, secure, and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ByteShift;
import { motion } from 'framer-motion';
import {
  Globe2,
  AppWindow,
  Smartphone,
  Lightbulb,
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';
import InteractiveCard3D from './InteractiveCard3D';

const services = [
  {
    icon: Globe2,
    title: 'Full-Stack Web Apps',
    text: 'Modern, high-performance web applications built with React, Node.js, Express, and MongoDB. Fast, responsive, and SEO-optimized.',
    perks: ['Responsive & mobile-first', 'Custom RESTful APIs', 'Database architecture', '3D WebGL animations']
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform Mobile',
    text: 'Native-feel iOS and Android mobile applications crafted using Flutter and Dart with Firebase real-time integration.',
    perks: ['Single clean codebase', 'Real-time database sync', 'Offline support', 'Polished 60fps animations']
  },
  {
    icon: AppWindow,
    title: 'Custom Software & APIs',
    text: 'Tailored backend systems, desktop tools, and robust API microservices engineered for business automation.',
    perks: ['Secure authentication', 'Structured data pipelines', 'Desktop tools in C++', 'Automated Python logic']
  },
  {
    icon: Lightbulb,
    title: 'Architecture & Optimization',
    text: 'Code refactoring, performance profiling, bug fixing, and modernizing legacy codebases into scalable modern stacks.',
    perks: ['Performance tuning', 'Modern UI/UX revamp', 'Security best practices', 'Clean documentation']
  }
];

export default function Services() {
  return (
    <section className="section-wrap section" id="services">
      <div className="section-heading">
        <span className="section-kicker">05 / SERVICES OFFERED</span>
        <h2>
          Ways we can <em>collaborate.</em>
        </h2>
        <p>Turning complex business and technical requirements into elegant digital realities.</p>
      </div>

      <div className="services-grid">
        {services.map(({ icon: Icon, title, text, perks }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.09 }}
          >
            <InteractiveCard3D
              className="service-card glass-card"
              maxTilt={10}
              glare={true}
            >
              <div className="service-top-row">
                <div className="service-icon">
                  <Icon size={24} />
                </div>
                <span className="service-index">0{i + 1}</span>
              </div>

              <h3>{title}</h3>
              <p>{text}</p>

              <ul className="service-perks">
                {perks.map((perk) => (
                  <li key={perk}>
                    <CheckCircle size={14} className="perk-check" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="service-link"
                aria-label={`Discuss ${title}`}
              >
                <span>Start a project</span>
                <ArrowUpRight size={16} />
              </a>
            </InteractiveCard3D>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

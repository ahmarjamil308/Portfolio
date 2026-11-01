import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ShieldCheck,
  Utensils,
  ShoppingBag,
  Landmark,
  BookOpen,
  Code2,
  Sparkles,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import InteractiveCard3D from './InteractiveCard3D';
import ProjectModal from './ProjectModal';

const projects = [
  {
    name: 'E-Commerce Platform',
    category: 'Full-Stack Web',
    type: 'Full-stack web app',
    desc: 'A full-featured modern shopping platform with user authentication, catalog search, dynamic shopping cart, and admin dashboard.',
    longDesc: 'Engineered a full-stack e-commerce solution using React.js on the frontend with Node.js and MongoDB on the backend. Designed scalable REST APIs, secure JWT auth, product catalog filtering, cart persistence, and order management.',
    stack: 'React · Node.js · Express · MongoDB',
    icon: ShoppingBag,
    color: 'blue',
    url: 'https://e-commerce-frontend-olive-seven.vercel.app/',
    featured: true,
    features: [
      'JWT Authentication & protected route architecture',
      'Dynamic shopping cart with persistent state',
      'Admin management for inventory and categories',
      'Deployed on Vercel with high-availability REST backend'
    ]
  },
  {
    name: 'LifeGuard 360',
    category: 'Mobile Apps',
    type: 'Mobile safety application',
    desc: 'A personal safety and emergency monitoring mobile app featuring routine check-ins, automated alert triggers, and geolocation assistance.',
    longDesc: 'Designed to protect users through intelligent automated safety checks. Features emergency distress signals, trusted contacts integration, background location updates, and cloud sync using Firebase.',
    stack: 'Flutter · Dart · Firebase · Google Maps API',
    icon: ShieldCheck,
    color: 'violet',
    url: '',
    featured: true,
    features: [
      'Automated scheduled check-in countdown system',
      'Emergency SOS push dispatch to trusted contacts',
      'Real-time GPS coordinate broadcasting',
      'Clean cross-platform Flutter UI with smooth transitions'
    ]
  },
  {
    name: 'EatValt',
    category: 'Mobile Apps',
    type: 'Food ordering & review app',
    desc: 'A sleek food discovery and restaurant ordering mobile application with customized menus, cart flow, and customer feedback.',
    longDesc: 'Developed a vibrant food ordering interface focusing on appetizing visuals, micro-interactions, responsive menus, order customization, and user reviews.',
    stack: 'Flutter · Dart · REST API · State Management',
    icon: Utensils,
    color: 'orange',
    url: '',
    featured: false,
    features: [
      'Interactive item customization & dietary tags',
      'Streamlined checkout flow and order history',
      'Customer rating and feedback review system',
      'Smooth 60fps Flutter mobile animations'
    ]
  },
  {
    name: 'AI Client Hunter',
    category: 'Full-Stack Web',
    type: 'Lead research & intelligence tool',
    desc: 'An automated lead discovery and market research platform for identifying high-potential business opportunities and digital presence gaps.',
    longDesc: 'Automates digital footprint analysis to detect companies needing website revamps or custom mobile software, empowering developers with actionable business leads.',
    stack: 'React · Node.js · Web Scraping · Database',
    icon: Code2,
    color: 'cyan',
    url: '',
    featured: true,
    features: [
      'Automated search algorithm scanning company websites',
      'Mobile-readiness & performance scoring matrix',
      'Lead export and pipeline tracking interface',
      'Interactive analytics dashboard in React'
    ]
  },
  {
    name: 'Bank Management System',
    category: 'Systems & DSA',
    type: 'Desktop enterprise system',
    desc: 'A robust C++ software solution for bank account management, ledger accounting, secure transactions, and record audit trails.',
    longDesc: 'Demonstrates deep systems programming and software engineering fundamentals with secure file-based storage, multi-account hierarchies, error checking, and transactional integrity.',
    stack: 'C++ · File I/O · OOP Architecture',
    icon: Landmark,
    color: 'green',
    url: '',
    featured: false,
    features: [
      'Object-Oriented design with polymorphism and inheritance',
      'Encrypted persistent file records for client balances',
      'Deposit, withdrawal, and transfer audit mechanisms',
      'Strict input validation and boundary condition handling'
    ]
  },
  {
    name: 'Library Management System',
    category: 'Systems & DSA',
    type: 'DSA & Record System',
    desc: 'High-efficiency book inventory, member cataloging, search algorithms, and automated issue/return transaction tracker.',
    longDesc: 'Built to benchmark fundamental data structures including linked lists, hash-based indexing, and binary search algorithms for sub-second retrieval.',
    stack: 'C++ · Data Structures · Algorithms',
    icon: BookOpen,
    color: 'pink',
    url: '',
    featured: false,
    features: [
      'Custom implementation of search and sorting algorithms',
      'Automated calculation of due dates and penalty fees',
      'Fast catalog queries across large inventory sets',
      'Modular clean C++ codebase with comprehensive docs'
    ]
  }
];

const categories = ['All', 'Full-Stack Web', 'Mobile Apps', 'Systems & DSA'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="section-wrap section" id="projects">
      <div className="section-heading section-heading-row">
        <div>
          <span className="section-kicker">02 / PORTFOLIO SHOWCASE</span>
          <h2>
            Featured <em>Creations.</em>
          </h2>
          <p>Explore interactive 3D web apps, mobile systems, and software engineering projects.</p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter-bar">
          <SlidersHorizontal size={14} className="filter-icon" />
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects 3D Grid */}
      <motion.div layout className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <InteractiveCard3D
                  className={`project-card project-${project.color}`}
                  maxTilt={10}
                  glare={true}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Art Banner */}
                  <div className="project-art">
                    <div className="project-art-grid" />
                    <div className="project-glow-orb" />
                    <div className="project-icon">
                      <Icon size={38} strokeWidth={1.4} />
                    </div>

                    <span className="project-number">0{i + 1}</span>

                    {project.featured && (
                      <span className="project-badge-featured">
                        <Sparkles size={11} /> FEATURED
                      </span>
                    )}

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-open"
                        aria-label={`Open ${project.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight size={19} />
                      </a>
                    ) : (
                      <button
                        className="project-open"
                        aria-label={`View details of ${project.name}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        <Eye size={17} />
                      </button>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="project-info">
                    <div className="project-meta-line">
                      <span className="project-type">{project.type}</span>
                    </div>

                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>

                    <div className="project-stack">
                      {project.stack.split(' · ').map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>

                    <div className="project-card-footer">
                      <span className="view-details-prompt">
                        Click for 3D architecture view →
                      </span>
                    </div>
                  </div>
                </InteractiveCard3D>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Interactive 3D Project Quick-View Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

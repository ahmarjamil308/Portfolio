import { ArrowUp, Github, Linkedin } from 'lucide-react';
import profile from '../config/profile';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer section-wrap">
      <div className="footer-brand-col">
        <a
          className="brand"
          href="#home"
          onClick={scrollToTop}
        >
          <span>AJ</span>
          <i>.</i>
        </a>
        <p className="footer-tagline">
          Transforming Bold Ideas into High-Impact Software
        </p>
      </div>

      <div className="footer-center-col">
        <p>
          Designed & engineered with precision by <strong>{profile.name}</strong>.
        </p>
        <span className="footer-built-with">
          Powered by React · Three.js · Framer Motion · WebGL
        </span>
      </div>

      <div className="footer-links">
        <a
          href={profile.social.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Return to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>

      <div className="footer-bottom-line">
        <small>© {new Date().getFullYear()} Ahmar Jamil. All rights reserved.</small>
        <div className="footer-status">
          <span className="live-dot" /> SYSTEM ONLINE
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Services', '#services']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar">
        {/* Brand */}
        <a
          className="brand"
          href="#home"
          aria-label="Ahmar Jamil home"
        >
          <span className="brand-letters">AJ</span>
          <i className="brand-dot">.</i>
          <span className="brand-tag">3D</span>
        </a>

        {/* Desktop Nav */}
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            <span>Let's talk</span> <ArrowUpRight size={15} />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <div className="mobile-nav-actions">
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

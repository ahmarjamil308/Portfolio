import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  ['About', '#about'], ['Experience', '#experience'], ['Skills', '#skills'],
  ['Projects', '#projects'], ['Services', '#services']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Ahmar Jamil home"><span>AJ</span><i>.</i></a>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X/> : <Menu/>}
      </button>
    </header>
  );
}
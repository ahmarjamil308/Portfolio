import { ArrowUp, Github, Linkedin } from 'lucide-react';
import profile from '../config/profile';

export default function Footer() {
  return <footer className="footer section-wrap"><a className="brand" href="#home"><span>AJ</span><i>.</i></a><p>Designed & built with curiosity by {profile.name}.</p><div className="footer-links"><a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href="#home" aria-label="Back to top"><ArrowUp size={18}/></a></div><small>© {new Date().getFullYear()} Ahmar Jamil. All rights reserved.</small></footer>;
}
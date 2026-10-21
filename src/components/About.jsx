import { motion } from 'framer-motion';
import { Code2, GraduationCap, Layers3 } from 'lucide-react';

const stats = [
  { value: 'BS CS', label: 'Computer Science', icon: GraduationCap },
  { value: '5+', label: 'Core technologies', icon: Code2 },
  { value: '6', label: 'Featured projects', icon: Layers3 }
];

export default function About() {
  return (
    <section className="section-wrap section" id="about">
      <div className="section-heading"><span className="section-kicker">01 / ABOUT</span><h2>A little about <em>me.</em></h2></div>
      <div className="about-grid">
        <motion.div className="about-mark glass-card" whileHover={{ rotateY: 5, rotateX: -3 }}><span className="big-letters">AJ<span>.</span></span><p>Curious mind.<br/>Builder's mindset.</p><div className="mark-ring"/></motion.div>
        <div className="about-copy">
          <p className="lead">I'm a Computer Science graduate from <strong>Riphah International University</strong> with a passion for turning ideas into useful digital products.</p>
          <p>My work spans full-stack web development and mobile app development. I enjoy solving problems, learning modern tools, and creating applications that are reliable, accessible, and easy to use.</p>
          <p>From React and Node.js to Python, Django, and Flutter, I bring a practical, detail-oriented approach to every project.</p>
          <div className="stats-row">{stats.map(({ value, label, icon: Icon }) => <div className="stat-card" key={label}><Icon size={19}/><strong>{value}</strong><span>{label}</span></div>)}</div>
        </div>
      </div>
    </section>
  );
}
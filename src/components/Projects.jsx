import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Utensils, ShoppingBag, Landmark, BookOpen, Code2 } from 'lucide-react';

const projects = [
  { name: 'LifeGuard 360', type: 'Mobile application', desc: 'A personal safety concept with check-in reminders, monitoring, and emergency alert workflows.', stack: 'Flutter · Firebase', icon: ShieldCheck, color: 'violet', url: '' },
  { name: 'EatValt', type: 'Food & ordering', desc: 'A mobile food ordering experience for browsing meals, placing orders, and sharing feedback.', stack: 'Flutter', icon: Utensils, color: 'orange', url: '' },
  { name: 'E-Commerce Platform', type: 'Full-stack web app', desc: 'A shopping platform with product browsing, authentication, cart functionality, and admin product management.', stack: 'React · Node · MongoDB', icon: ShoppingBag, color: 'blue', url: 'https://e-commerce-frontend-olive-seven.vercel.app/' },
  { name: 'Bank Management System', type: 'Desktop application', desc: 'A C++ application for account management, transaction handling, and basic record operations.', stack: 'C++', icon: Landmark, color: 'green', url: '' },
  { name: 'Library Management System', type: 'DSA project', desc: 'Book and member record management with search, issue, and return workflows.', stack: 'C++ · Data Structures', icon: BookOpen, color: 'pink', url: '' },
  { name: 'AI Client Hunter', type: 'Lead research tool', desc: 'A lead discovery concept for finding businesses and identifying potential website opportunities.', stack: 'React · Node.js · Database', icon: Code2, color: 'cyan', url: '' }
];

export default function Projects() {
  return (
    <section className="section-wrap section" id="projects">
      <div className="section-heading section-heading-row"><div><span className="section-kicker">04 / SELECTED WORK</span><h2>Things I've <em>built.</em></h2></div><span className="project-count">01 — 06</span></div>
      <div className="projects-grid">{projects.map((project, i) => { const Icon = project.icon; return <motion.article className={`project-card project-${project.color}`} key={project.name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: (i % 3) * .1 }} whileHover={{ y: -8, rotateX: 1.5 }}><div className="project-art"><div className="project-art-grid"/><div className="project-icon"><Icon size={36} strokeWidth={1.4}/></div><span className="project-number">0{i + 1}</span>{project.url && <a href={project.url} target="_blank" rel="noreferrer" className="project-open" aria-label={`Open ${project.name}`}><ArrowUpRight size={19}/></a>}</div><div className="project-info"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.desc}</p><div className="project-stack">{project.stack.split(' · ').map(s => <span key={s}>{s}</span>)}</div></div></motion.article>; })}</div>
    </section>
  );
}
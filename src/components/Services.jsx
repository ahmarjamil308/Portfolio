import { motion } from 'framer-motion';
import { Globe2, AppWindow, Smartphone, Lightbulb, ArrowUpRight } from 'lucide-react';

const services = [
  { icon: Globe2, title: 'Web development', text: 'Modern, responsive websites and full-stack web applications.' },
  { icon: AppWindow, title: 'Custom software', text: 'Practical software solutions shaped around real user needs.' },
  { icon: Smartphone, title: 'Mobile applications', text: 'Cross-platform mobile experiences built with Flutter.' },
  { icon: Lightbulb, title: 'Technical problem-solving', text: 'Thoughtful architecture, debugging, and implementation support.' }
];

export default function Services() {
  return (
    <section className="section-wrap section" id="services">
      <div className="section-heading"><span className="section-kicker">05 / WHAT I DO</span><h2>Ways I can <em>help.</em></h2></div>
      <div className="services-grid">{services.map(({ icon: Icon, title, text }, i) => <motion.article className="service-card glass-card" key={title} whileHover={{ y: -7 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><div className="service-icon"><Icon size={23}/></div><span className="service-index">0{i + 1}</span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Discuss ${title}`}><ArrowUpRight size={18}/></a></motion.article>)}</div>
    </section>
  );
}
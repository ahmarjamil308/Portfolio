import { motion } from 'framer-motion';

const groups = [
  { title: 'Languages', items: ['C', 'C++', 'JavaScript', 'HTML5', 'CSS3', 'Dart', 'Python'] },
  { title: 'Frameworks & tools', items: ['React', 'Node.js', 'Express.js', 'Django', 'Flutter', 'Git'] },
  { title: 'Databases', items: ['MongoDB', 'Firebase'] },
  { title: 'Focus areas', items: ['Full-stack development', 'Mobile applications', 'Software engineering', 'Responsive UI'] }
];

export default function Skills() {
  return (
    <section className="section-wrap section" id="skills">
      <div className="section-heading"><span className="section-kicker">03 / TOOLKIT</span><h2>Tools of the <em>trade.</em></h2><p>Technologies I use to bring ideas to life.</p></div>
      <div className="skills-grid">{groups.map((group, i) => <motion.div className="skill-panel glass-card" key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}><div className="skill-panel-top"><span>0{i + 1}</span><h3>{group.title}</h3></div><div className="skill-tags">{group.items.map(item => <span className="skill-tag" key={item}>{item}</span>)}</div></motion.div>)}</div>
    </section>
  );
}
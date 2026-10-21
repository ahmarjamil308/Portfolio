import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';

const jobs = [
  { role: 'MERN Stack Developer', company: "Sheikhupura IT Park", period: '6 months', text: 'Contributed to web application development, feature implementation, debugging, and improvements to application functionality.' },
  { role: 'MERN Stack Developer', company: "Amrood's Lab", period: '2 months', text: 'Worked with MongoDB, Express.js, React, and Node.js to build and maintain web application features.' },
  { role: 'Python Developer', company: 'CongoRise INFOTECH', period: '1 month', text: 'Practiced core Python, application logic, debugging, problem-solving, and basic secure development practices.' }
];

export default function Experience() {
  return (
    <section className="section-wrap section" id="experience">
      <div className="section-heading"><span className="section-kicker">02 / EXPERIENCE</span><h2>Where I've <em>grown.</em></h2><p>Learning by building, collaborating, and solving real problems.</p></div>
      <div className="timeline">{jobs.map((job, i) => <motion.article className="timeline-item glass-card" key={job.company} initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i * .12 }}><div className="timeline-icon"><BriefcaseBusiness size={20}/></div><div className="timeline-body"><div className="timeline-meta"><span>{job.period}</span><span className="timeline-index">0{i + 1}</span></div><h3>{job.role}</h3><h4>{job.company}</h4><p>{job.text}</p></div></motion.article>)}</div>
    </section>
  );
}
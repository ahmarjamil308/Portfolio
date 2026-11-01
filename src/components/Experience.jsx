import { motion } from 'framer-motion';
import { BriefcaseBusiness, Calendar } from 'lucide-react';
import InteractiveCard3D from './InteractiveCard3D';

const jobs = [
  {
    role: 'WEB Instructor & Mentor',
    company: 'Sheikhupura IT Park',
    period: '6 months',
    type: 'Full-time / Onsite',
    text: 'Architected and enhanced modern web applications utilizing MongoDB, Express.js, React.js, and Node.js. Developed responsive user interfaces, implemented RESTful API endpoints, resolved complex debugging challenges, and ensured high code maintainability.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs']
  },
  {
    role: 'MERN Stack Developer',
    company: "Amrood's Lab",
    period: '2 months',
    type: 'Software Internship',
    text: 'Collaborated with senior engineers to implement dynamic full-stack modules. Built stateful React components, integrated database schemas, handled API requests, and optimized component render cycles for improved user performance.',
    tags: ['React.js', 'Node.js', 'State Management', 'UI/UX']
  },
  {
    role: 'Python Developer',
    company: 'CongoRise INFOTECH',
    period: '1 month',
    type: 'Internship',
    text: 'Honed core Python application logic, algorithmic problem solving, automated data routines, and secure software development practices. Strengthened core programming paradigms and object-oriented architecture.',
    tags: ['Python', 'OOP', 'Algorithms', 'Scripting']
  }
];

export default function Experience() {
  return (
    <section className="section-wrap section" id="experience">
      <div className="section-heading">
        <span className="section-kicker">04 / TRACK RECORD</span>
        <h2>
          Professional <em>Experience.</em>
        </h2>
        <p>Real-world experience building production web applications, collaborating, and shipping code.</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-spine" />

        <div className="timeline-list">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12 }}
            >
              <InteractiveCard3D
                className="timeline-item glass-card"
                maxTilt={6}
                glare={true}
              >
                <div className="timeline-node">
                  <BriefcaseBusiness size={20} />
                </div>

                <div className="timeline-body">
                  <div className="timeline-meta">
                    <div className="meta-badge-group">
                      <span className="period-badge">
                        <Calendar size={13} /> {job.period}
                      </span>
                      <span className="type-badge">{job.type}</span>
                    </div>
                    <span className="timeline-index">PHASE 0{i + 1}</span>
                  </div>

                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>

                  <p>{job.text}</p>

                  <div className="timeline-tags">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="timeline-tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </InteractiveCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

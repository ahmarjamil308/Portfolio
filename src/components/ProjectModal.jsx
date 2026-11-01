import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2, Layers, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const Icon = project.icon;

  return (
    <AnimatePresence>
      <div className="project-modal-backdrop" onClick={onClose}>
        <motion.div
          className={`project-modal-content project-${project.color}`}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Cyber modal header */}
          <div className="modal-header">
            <div className="modal-title-group">
              <div className="modal-icon-wrap">
                <Icon size={28} />
              </div>
              <div>
                <span className="modal-type-badge">{project.type}</span>
                <h3>{project.name}</h3>
              </div>
            </div>
            <button
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal body */}
          <div className="modal-body">
            <p className="modal-description">{project.desc}</p>

            {project.longDesc && (
              <p className="modal-extended-desc">{project.longDesc}</p>
            )}

            {/* Key highlights */}
            <div className="modal-highlights">
              <h4>
                <Layers size={16} /> Key Features & Architecture
              </h4>
              <ul>
                {project.features?.map((feat, i) => (
                  <li key={i}>
                    <CheckCircle2 size={15} />
                    <span>{feat}</span>
                  </li>
                )) || (
                  <>
                    <li>
                      <CheckCircle2 size={15} />
                      <span>Optimized UI/UX architecture with fluid responsiveness.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={15} />
                      <span>Clean modular code structure and state management.</span>
                    </li>
                    <li>
                      <CheckCircle2 size={15} />
                      <span>Tested for cross-platform reliability and performance.</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="modal-stack-group">
              <h4>
                <Code2 size={16} /> Built With
              </h4>
              <div className="modal-tags">
                {project.stack.split(' · ').map((tag) => (
                  <span className="modal-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal footer / CTA */}
          <div className="modal-footer">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="button button-primary modal-action"
              >
                Launch Live App <ExternalLink size={16} />
              </a>
            ) : (
              <a
                href="#contact"
                className="button button-primary modal-action"
                onClick={onClose}
              >
                Request Architecture Demo <ExternalLink size={16} />
              </a>
            )}
            <button
              className="button button-ghost"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

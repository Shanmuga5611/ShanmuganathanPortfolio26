import { motion } from 'framer-motion'

export default function Projects({ data }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="eyebrow">04 / Selected work</div>
        <h2 className="section-title">Key <span>Projects</span></h2>
        <div className="projects-grid">
          {data.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <h3 className="project-title">{project.title}</h3>
              <span className="project-sub">{project.subTitle}</span>
              <p className="project-desc">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

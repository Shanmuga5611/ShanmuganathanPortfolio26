import { motion } from 'framer-motion'

export default function Experience({ data }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="eyebrow">02 / Career path</div>
        <h2 className="section-title">Work <span>Experience</span> — 3 Years</h2>
        <div className="timeline">
          {data.map((job, i) => (
            <motion.div
              key={job.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <span className="timeline-dot" />
              <h3 className="timeline-company">{job.company}</h3>
              <span className="timeline-duration">{job.duration}</span>
              <p className="timeline-role">{job.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

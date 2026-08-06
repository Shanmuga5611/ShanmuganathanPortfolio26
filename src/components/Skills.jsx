import { motion } from 'framer-motion'

export default function Skills({ data }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="eyebrow">03 / Toolbox</div>
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="skills-grid">
          {data.map((skill, i) => (
            <motion.div
              key={skill.id}
              className="skill-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <h4>{skill.category}</h4>
              <div className="skill-tags">
                {skill.items.split(',').map((tag) => (
                  <span className="skill-tag" key={tag}>{tag.trim()}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

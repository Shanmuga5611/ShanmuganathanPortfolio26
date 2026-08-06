import { motion } from 'framer-motion'

export default function Summary({ data }) {
  return (
    <section id="summary" className="section">
      <div className="container">
        <div className="eyebrow">01 / About</div>
        <h2 className="section-title">Professional <span>Summary</span></h2>
        <ul className="summary-list">
          {data.map((item, i) => (
            <motion.li
              key={item.id}
              className="summary-item"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className="marker">▹</span>
              <p>{item.point}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const CONTACT_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'shan-muga-49a6a2305',
    href: 'https://www.linkedin.com/in/shan-muga-49a6a2305',
    icon: '💼',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'Shanmuga5611',
    href: 'https://github.com/Shanmuga5611',
    icon: '🖥️',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Chennai, India',
    href: 'https://maps.app.goo.gl/W3xLghaVYRE5x9WJA?g_st=aw',
    icon: '📍',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="eyebrow">05 / Get in touch</div>
        <h2 className="section-title">Let's <span>Connect</span></h2>
        <div className="contact-grid">
          {CONTACT_LINKS.map((link, i) => (
            <motion.a
              key={link.id}
              className="contact-card"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="contact-icon">{link.icon}</span>
              <div>
                <div className="contact-label">{link.label}</div>
                <div className="contact-value">{link.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

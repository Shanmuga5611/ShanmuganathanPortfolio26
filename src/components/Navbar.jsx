import { useState } from 'react'
import { resumeDownloadUrl } from '../api/portfolio'

const LINKS = [
  { href: '#summary', label: 'Summary' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar-row">
        <div className="logo">shanmuganathan<span>.dev</span></div>

        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle light and dark theme"
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a className="btn-download" href={resumeDownloadUrl} download>
            ⬇ Download PDF
          </a>
          <button
            className="hamburger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="btn-download" href={resumeDownloadUrl} download onClick={() => setOpen(false)}>
            ⬇ Download PDF
          </a>
        </div>
      )}
    </nav>
  )
}

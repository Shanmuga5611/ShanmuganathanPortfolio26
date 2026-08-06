import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { getPortfolio } from './api/portfolio'

export default function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  // theme: 'dark' (default) or 'light', remembered across visits
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    getPortfolio()
      .then(setData)
      .catch(() => setError('Backend API-la irundhu data fetch aagala. Server run pannirukkeengala? (dotnet run)'))
  }, [])

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />

      {error && <p className="state-msg">{error}</p>}
      {!data && !error && <p className="state-msg">Loading portfolio data from API...</p>}

      {data && (
        <>
          <Summary data={data.summary} />
          <Experience data={data.experience} />
          <Skills data={data.skills} />
          <Projects data={data.projects} />
        </>
      )}

      <Contact />
      <Footer />
    </>
  )
}

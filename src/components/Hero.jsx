import { motion } from 'framer-motion'
import { resumeDownloadUrl } from '../api/portfolio'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-role">// Jr. .NET Developer</div>
          <h1 className="hero-title">
            Hi, I'm <span className="grad">Shanmuganathan K</span>
          </h1>
          <p className="hero-desc">
            3 years building data-centric web apps with ASP.NET Core, C#, VB.NET,
            and Oracle / MS SQL. I turn legacy systems into clean, maintainable
            ASP.NET MVC applications — from ERP modules to e-commerce platforms.
          </p>
          <div className="hero-cta">
            <a className="btn-primary" href={resumeDownloadUrl} download>
              ⬇ Download Resume (PDF)
            </a>
            <a className="btn-download" href="#projects">View Projects</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="editor"
        >
          <div className="editor-tabbar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="editor-filename">Developer.cs</span>
          </div>
          <div className="editor-body">
            <div><span className="tok-key">public class</span> <span className="tok-type">Developer</span></div>
            <div>{'{'}</div>
            <div>&nbsp;&nbsp;<span className="tok-key">public string</span> <span className="tok-prop">Name</span> = <span className="tok-str">"Shanmuganathan K"</span>;</div>
            <div>&nbsp;&nbsp;<span className="tok-key">public string</span> <span className="tok-prop">Role</span> = <span className="tok-str">"Jr. .NET Developer"</span>;</div>
            <div>&nbsp;&nbsp;<span className="tok-key">public int</span> <span className="tok-prop">ExperienceYears</span> = <span className="tok-str">3</span>;</div>
            <div>&nbsp;&nbsp;<span className="tok-key">public string</span>[] <span className="tok-prop">Stack</span> = {'{'} <span className="tok-str">"C#"</span>, <span className="tok-str">"ASP.NET Core"</span>, <span className="tok-str">"Oracle SQL"</span> {'}'};</div>
            <div>&nbsp;</div>
            <div className="tok-comment">// always shipping, always learning</div>
            <div>&nbsp;&nbsp;<span className="tok-key">public void</span> <span className="tok-prop">SayHello</span>() =&gt; Console.Write("Vanakkam!"<span className="cursor-blink" />);</div>
            <div>{'}'}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

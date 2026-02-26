import { useState, useEffect, useRef } from 'react'
import {
  profile,
  images,
  about,
  experience,
  education,
  techStacks,
} from './data/resume'
import SocialIcons from './components/SocialIcons'
import BlockchainSideDecor from './components/BlockchainSideDecor'
import './App.css'

// Split name for hero (v4 style)
const [firstName, ...lastNameParts] = (profile.name || 'Shubham Tiwari').split(' ')
const lastName = lastNameParts.join(' ') || 'Tiwari'

const NAV_SECTIONS = [
  { id: 'about', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'tech-stacks', label: 'My Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const NAV_ICON_FALLBACK = {
  top: '⌂',
  about: '⌂',
  experience: '💼',
  'tech-stacks': '🛠️',
  education: '🎓',
  contact: '✉️',
}

// Tech stacks split into 3 rows for marquee (row 1: R→L, row 2: L→R, row 3: R→L)
const n = techStacks.length
const techStacksRow1 = techStacks.slice(0, Math.ceil(n / 3))
const techStacksRow2 = techStacks.slice(Math.ceil(n / 3), Math.ceil((2 * n) / 3))
const techStacksRow3 = techStacks.slice(Math.ceil((2 * n) / 3), n)

function App() {
  const [activeNav, setActiveNav] = useState('#')
  const [revealed, setRevealed] = useState({})
  const lastScrollY = useRef(0)

  // Track which section is in view (nav active + scroll reveal)
  useEffect(() => {
    const sectionIds = NAV_SECTIONS.map((s) => s.id).filter((id) => id !== 'top')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.target.id) return
          if (entry.isIntersecting) {
            setRevealed((v) => ({ ...v, [entry.target.id]: true }))
            setActiveNav(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-15% 0px -50% 0px', threshold: 0 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    // One-time check after layout: if a section is already in view (e.g. on load), set revealed so animations run
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sectionIds.forEach((id) => {
          const el = document.getElementById(id)
          if (!el) return
          const rect = el.getBoundingClientRect()
          const vh = window.innerHeight
          const top = vh * 0.15
          const bottom = vh * 0.5
          if (rect.top < vh - top && rect.bottom > bottom) {
            setRevealed((v) => (v[id] ? v : { ...v, [id]: true }))
          }
        })
      })
    })
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  // Keep nav visible; update active section on scroll. Also ensure tech-stacks gets in-view when scrolled into view (fallback for skills animation).
  useEffect(() => {
    const checkTechStacksInView = () => {
      const el = document.getElementById('tech-stacks')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.top < vh * 0.75 && rect.bottom > vh * 0.25) {
        setRevealed((v) => (v['tech-stacks'] ? v : { ...v, 'tech-stacks': true }))
      }
    }
    const handleScroll = () => {
      const y = window.scrollY
      if (y < 300) setActiveNav('#')
      lastScrollY.current = y
      checkTechStacksInView()
    }
    checkTechStacksInView()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href || !href.startsWith('#')) return
    e.preventDefault()
    const id = href.slice(1)
    const el = id === 'top' ? document.documentElement : document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <div className="v4-bg-blockchain" aria-hidden="true">
        <div className="v4-bg-nodes" />
        <div className="v4-bg-veil" />
      </div>
      <div className="noise v4-noise" aria-hidden="true" />
      <BlockchainSideDecor />

      <nav className="v4-nav v4-nav--visible">
        <div className="v4-nav-center">
          <div className="v4-nav-card">
            <ul className="v4-nav-menu">
              {NAV_SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeNav === `#${id}` ? 'active' : ''}
                    onClick={handleNavClick}
                    aria-label={label}
                  >
                    <span className="v4-nav-tooltip" role="tooltip">{label}</span>
                    <span className="v4-nav-icon" aria-hidden="true">
                      <img
                        src={`/icons/nav-${id === 'about' ? 'top' : id}.svg`}
                        alt=""
                        onError={(e) => {
                          e.target.style.display = 'none'
                          const fallback = e.target.nextElementSibling
                          if (fallback) fallback.style.display = 'inline'
                        }}
                      />
                      <span className="v4-nav-icon-fallback" style={{ display: 'none' }}>
                        {NAV_ICON_FALLBACK[id]}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <a
        href="/Shubham_Resume.pdf"
        className="v4-nav-btn v4-nav-btn-fixed"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>

      <div className="v4-two-column">
        <header id="top" className="v4-hero v4-hero-column">
          <div className="v4-hero-card">
            <div className="v4-hero-window-body">
              <div className="v4-hero-image-wrap v4-hero-image-top">
                <div className="v4-hero-image-card">
                  <img src={images.hero} alt="" />
                </div>
              </div>
              <div className="v4-hero-inner v4-hero-inner-column">
                <div className="v4-hero-code-block">
                  <div className="v4-hero-code-line">
                    <span className="v4-hero-name-brace">&#123;</span>
                    <span className="v4-hero-name-inner"> {profile.name} </span>
                    <span className="v4-hero-name-brace">&#125;</span>
                  </div>
                  <div className="v4-hero-code-line">
                    <span className="v4-hero-bio-quote">&quot;</span>
                    <span className="v4-hero-bio-inner">{profile.shortBio || profile.tagline}</span>
                    <span className="v4-hero-bio-quote">&quot;</span>
                  </div>
                  <div className="v4-hero-code-line v4-hero-code-cta">
                    <a href="#tech-stacks" className="v4-hero-code-link" onClick={handleNavClick}>
                      seeMySkills()
                    </a>
                    <span className="v4-hero-code-sep"> </span>
                    <a href="#experience" className="v4-hero-code-link" onClick={handleNavClick}>
                      experience()
                    </a>
                  </div>
                  <div className="v4-hero-code-line v4-hero-socials-inner">
                    <SocialIcons profile={profile} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="v4-main v4-main-right">
          <a href="#about" className="v4-nav-logo v4-main-logo" onClick={handleNavClick} aria-label="Home">
            <span className="v4-nav-logo-slot">
              <span className="v4-nav-logo-typewriter" aria-hidden="true">My code is poetry in a language you don't speak</span>
            </span>
          </a>
          <div className="v4-hero-mail">
            <div className="v4-hero-mail-line" />
            <a href={`mailto:${profile.email}`} className="v4-hero-mail-link">
              {profile.email}
            </a>
          </div>
        <section id="about" className={`v4-section scroll-reveal ${revealed.about ? 'in-view' : ''}`}>
          <h5 className="v4-section-subtitle">Get to know</h5>
          <h2 className="v4-section-title">About Me</h2>
          <div className="v4-about-card v4-window-card">
            <div className="v4-window-titlebar" aria-hidden="true">
              <div className="v4-window-buttons">
                <span className="v4-window-btn v4-window-btn-close" />
                <span className="v4-window-btn v4-window-btn-min" />
                <span className="v4-window-btn v4-window-btn-max" />
              </div>
            </div>
            <div className="v4-window-body">
            <div className="v4-about-grid">
              <div className="v4-about-image-wrap">
                <div className="v4-about-image-card">
                  <img src={images.about} alt="" />
                </div>
              </div>
              <div className="v4-about-inner">
                <p className="v4-about-intro">&quot;{about.intro}&quot;</p>
                <div className="v4-about-stats">
                  <span className="v4-about-stat">{about.stats.experience}</span>
                  <span className="v4-about-stat-sep">·</span>
                  <span className="v4-about-stat">{about.stats.chains}</span>
                  <span className="v4-about-stat-sep">·</span>
                  <span className="v4-about-stat">{about.stats.focus}</span>
                </div>
                <div className="v4-about-body">
                  {about.body.split('\n\n').map((para, i) => (
                    <p key={i} className="v4-about-para">{para}</p>
                  ))}
                </div>
                <ul className="v4-about-highlights">
                  {about.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          </div>
        </section>

        <section id="experience" className={`v4-section scroll-reveal ${revealed.experience ? 'in-view' : ''}`}>
          <h5 className="v4-section-subtitle">What I&apos;ve done</h5>
          <h2 className="v4-section-title">Experience</h2>
          <div className="v4-exp-grid">
            {experience.map((job, i) => (
              <article key={i} className="v4-exp-card v4-window-card">
                <div className="v4-window-titlebar" aria-hidden="true">
                  <div className="v4-window-buttons">
                    <span className="v4-window-btn v4-window-btn-close" />
                    <span className="v4-window-btn v4-window-btn-min" />
                    <span className="v4-window-btn v4-window-btn-max" />
                  </div>
                </div>
                <div className="v4-window-body">
                <span className="v4-exp-date">{job.period || '—'}</span>
                <h3>{job.role}</h3>
                <p className="v4-exp-company">{job.company}</p>
                <ul>
                  {job.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="tech-stacks" className={`v4-section scroll-reveal ${revealed['tech-stacks'] ? 'in-view' : ''}`}>
          <h5 className="v4-section-subtitle">Tools &amp; platforms</h5>
          <h2 className="v4-section-title">My Skills</h2>
          <div className="v4-skills-card v4-window-card">
            <div className="v4-window-titlebar" aria-hidden="true">
              <div className="v4-window-buttons">
                <span className="v4-window-btn v4-window-btn-close" />
                <span className="v4-window-btn v4-window-btn-min" />
                <span className="v4-window-btn v4-window-btn-max" />
              </div>
            </div>
            <div className="v4-window-body v4-skills-window-body">
              <div className="v4-stacks-marquee">
                <div className="v4-stacks-row v4-stacks-row-1">
                  <div className="v4-stacks-row-inner">
                    {[...techStacksRow1, ...techStacksRow1].map((item, i) => (
                      <span key={i} className="v4-stack-pill">
                        <img src={item.icon} alt="" className="v4-stack-icon" />
                        <span>{item.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="v4-stacks-row v4-stacks-row-2">
                  <div className="v4-stacks-row-inner">
                    {[...techStacksRow2, ...techStacksRow2].map((item, i) => (
                      <span key={i} className="v4-stack-pill">
                        <img src={item.icon} alt="" className="v4-stack-icon" />
                        <span>{item.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="v4-stacks-row v4-stacks-row-3">
                  <div className="v4-stacks-row-inner">
                    {[...techStacksRow3, ...techStacksRow3].map((item, i) => (
                      <span key={i} className="v4-stack-pill">
                        <img src={item.icon} alt="" className="v4-stack-icon" />
                        <span>{item.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className={`v4-section scroll-reveal ${revealed.education ? 'in-view' : ''}`}>
          <h5 className="v4-section-subtitle">Background</h5>
          <h2 className="v4-section-title">Education</h2>
          <div className="v4-edu-window v4-window-card">
            <div className="v4-window-titlebar" aria-hidden="true">
              <div className="v4-window-buttons">
                <span className="v4-window-btn v4-window-btn-close" />
                <span className="v4-window-btn v4-window-btn-min" />
                <span className="v4-window-btn v4-window-btn-max" />
              </div>
            </div>
            <div className="v4-window-body">
              <div className="v4-edu-grid">
                {education.map((edu, i) => (
                  <div key={i} className="v4-edu-card">
                    <article className="v4-edu-item">
                      <span className="v4-edu-date">{edu.period}</span>
                      <h3>{edu.degree}</h3>
                      <p className="v4-edu-institution">{edu.institution}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={`v4-section scroll-reveal ${revealed.contact ? 'in-view' : ''}`}>
          <h5 className="v4-section-subtitle">What&apos;s next?</h5>
          <h2 className="v4-section-title">Get In Touch</h2>
          <div className="v4-contact-card v4-window-card">
            <div className="v4-window-titlebar" aria-hidden="true">
              <div className="v4-window-buttons">
                <span className="v4-window-btn v4-window-btn-close" />
                <span className="v4-window-btn v4-window-btn-min" />
                <span className="v4-window-btn v4-window-btn-max" />
              </div>
            </div>
            <div className="v4-window-body">
              <p className="v4-contact-lead">
                Open to protocol work, audits, and long-term projects. Say hi.
              </p>
              <div className="v4-contact-links">
                <a href={`mailto:${profile.email}`} className="v4-btn v4-btn-primary">
                  Say Hello
                </a>
                <a href={profile.whatsapp} className="v4-btn v4-btn-outline" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
              <div className="v4-contact-social">
                <SocialIcons profile={profile} />
              </div>
            </div>
          </div>
        </section>
        </main>
      </div>

      <footer className="v4-footer">
        <p>Designed &amp; built by {profile.name}</p>
        <p className="v4-footer-meta">© {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default App

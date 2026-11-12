import { useRef } from 'react'
import { profile } from '../data/profile'
import { useTilt } from '../hooks/useTilt'
import { Icon } from './Icon'

export function Hero() {
  const host = useRef<HTMLDivElement>(null)
  const tilt = useRef<HTMLDivElement>(null)
  useTilt(host, tilt)

  return (
    <header className="hero" id="top">
      <div className="hero-text">
        <img className="mini-av" src="/photo.jpg" width={84} height={84} alt="Rodrigo Geneta" />
        <span className="status-pill">
          <span className="dot" />
          Open to work
        </span>
        <h1>
          {profile.first} <span className="l2">{profile.last}</span>
        </h1>
        <div className="role">
          <div className="role-track">
            {[false, true].map((dup) => (
              <div key={String(dup)} className={`role-set ${dup ? 'dup' : ''}`} aria-hidden={dup || undefined}>
                {profile.roleTags.map((t) => (
                  <span key={t} className="rt">
                    <span>{t}</span>
                    <i />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="sub">{profile.summary}</p>
        <ul className="hl">
          {profile.points.map((p) => (
            <li key={p}>
              <Icon name="ok" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="cta">
          <a className="btn p" href="#contact">
            Get in touch <Icon name="arrow" />
          </a>
          <div className="soc">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Icon name="gh" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Icon name="in" />
            </a>
          </div>
        </div>
      </div>
      <div className="portrait-w" ref={host}>
        <div className="tilt" ref={tilt}>
          <span className="ring" />
          <div className="portrait">
            <img src="/photo.jpg" width={1000} height={1500} alt="Rodrigo Geneta in a black suit and red patterned tie" fetchPriority="high" />
            <span className="shine" />
          </div>
        </div>
      </div>
    </header>
  )
}

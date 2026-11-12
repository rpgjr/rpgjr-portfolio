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
        <img className="mini-av" src="/photo.jpg" width={84} height={84} alt="Rodrigo P. Geneta Jr." />
        <span className="status-pill">
          <span className="dot" />
          Open to work
        </span>
        <h1>
          <span>{profile.first}</span>
          <span className="l2">{profile.last}</span>
        </h1>
        <div className="role">
          {profile.roleTags.map((t, i) => (
            <span key={t} style={{ display: 'contents' }}>
              {i > 0 && <i />}
              <span>{t}</span>
            </span>
          ))}
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
          {profile.resumeUrl && (
            <>
              <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                <Icon name="eye" />
                <span>View resume</span>
              </a>
              <a className="btn icon" href={profile.resumeUrl} download="Rodrigo-Geneta-Resume.pdf" aria-label="Download resume">
                <Icon name="dl" />
              </a>
            </>
          )}
          <div className="soc">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Icon name="gh" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Icon name="in" />
            </a>
            <a href="#contact" aria-label="Email">
              <Icon name="mail" />
            </a>
          </div>
        </div>
      </div>
      <div className="portrait-w" ref={host}>
        <div className="tilt" ref={tilt}>
          <span className="ring" />
          <div className="portrait">
            <img src="/photo.jpg" width={1000} height={1500} alt="Rodrigo P. Geneta Jr. in a black suit and red patterned tie" fetchPriority="high" />
            <span className="shine" />
          </div>
        </div>
      </div>
    </header>
  )
}

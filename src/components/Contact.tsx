import { useRef } from 'react'
import { profile } from '../data/profile'
import { useFlash } from '../hooks/useFlash'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function Contact() {
  const emailRef = useRef<HTMLElement>(null)
  const [label, flash] = useFlash('Copy')

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      flash('Copied')
    } catch {
      // Clipboard blocked: select the address so Ctrl or Cmd + C works.
      const el = emailRef.current
      if (el) {
        const range = document.createRange()
        range.selectNodeContents(el)
        const sel = getSelection()
        sel?.removeAllRanges()
        sel?.addRange(range)
      }
      flash('Press copy')
    }
  }

  return (
    <section className="sec" id="contact">
      <Reveal className="ct">
        <div>
          <span className="label">contact</span>
          <h2 style={{ marginTop: 12 }}>Let's get in touch</h2>
          <p>Email me or message me on LinkedIn about a role, a project or a question. I would be glad to hear from you.</p>
          <div className="csoc">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Icon name="gh" />
              <span>GitHub</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Icon name="in" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div>
          <div className="mail email">
            <code ref={emailRef}>{profile.email}</code>
            <button type="button" className="cp" onClick={copy}>
              <Icon name="copy" />
              <span>{label}</span>
            </button>
          </div>
          <div className="mail actions">
            {profile.resumeUrl && (
              <>
                <a className="mailto" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  <Icon name="eye" />
                  <span>View resume</span>
                </a>
                <a className="mailto o ico" href={profile.resumeUrl} download="Rodrigo-Geneta-Resume.pdf" aria-label="Download resume">
                  <Icon name="dl" />
                  <span>Download</span>
                </a>
              </>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

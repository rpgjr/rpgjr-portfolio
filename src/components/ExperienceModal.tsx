import { useEffect, useRef } from 'react'
import type { Employer } from '../data/types'
import { Icon } from './Icon'

/** Full list of results for one employer. Phones use it because the cards there only show a short version. */
export function ExperienceModal({ employer, onClose }: { employer: Employer | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (employer && !d.open) {
      d.showModal()
      document.documentElement.classList.add('locked')
    }
    if (!employer && d.open) d.close()
    return () => document.documentElement.classList.remove('locked')
  }, [employer])

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="exp-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close()
      }}
    >
      {employer && (
        <div className="modal-body solo">
          <button type="button" className="ib modal-x" aria-label="Close details" onClick={() => ref.current?.close()}>
            <Icon name="x" />
          </button>
          <span className="label">{employer.span}</span>
          <h2 id="exp-title">{employer.company}</h2>
          {employer.roles.map((r) => (
            <section key={r.title} className="mrole">
              <div className="rhead">
                <h3>{r.title}</h3>
                <span className="when">{r.period}</span>
              </div>
              <ul className="hi">
                {[...r.key, ...r.more].map((b) => (
                  <li key={b}>
                    <Icon name="ok" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="stk">
                {r.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </dialog>
  )
}

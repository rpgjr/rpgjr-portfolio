import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/types'
import { Icon } from './Icon'

/** Details window for a deployed project. Uses the native <dialog>, which traps focus and closes on Esc. */
export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const zoomRef = useRef<HTMLDialogElement>(null)
  const [shot, setShot] = useState(0)
  const [zoom, setZoom] = useState(false)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (project && !d.open) {
      setShot(0)
      setZoom(false)
      d.showModal()
      document.documentElement.classList.add('locked')
    }
    if (!project && d.open) d.close()
    return () => document.documentElement.classList.remove('locked')
  }, [project])

  // The showcase video, when there is one, is the first item and sits beside the screenshots.
  const clip = project?.video
  useEffect(() => {
    const z = zoomRef.current
    if (!z) return
    if (zoom && !z.open) z.showModal()
    if (!zoom && z.open) z.close()
  }, [zoom])

  const gallery: { src: string; alt: string; caption: string; video?: boolean }[] = [
    ...(clip ? [{ src: clip.src, alt: `${project.title} showcase video`, caption: clip.caption, video: true }] : []),
    ...(project?.gallery ?? []),
  ]
  const current = gallery[shot]
  // The large view steps through the screenshots only, skipping the video.
  const stills = gallery.flatMap((g, i) => (g.video ? [] : [i]))
  const step = (dir: 1 | -1) => {
    const at = stills.indexOf(shot)
    if (at >= 0) setShot(stills[(at + dir + stills.length) % stills.length])
  }

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close()
      }}
    >
      {project && (
        <div className="modal-body">
          <button type="button" className="ib modal-x" aria-label="Close details" onClick={() => ref.current?.close()}>
            <Icon name="x" />
          </button>
          <div className="modal-shots">
            {!current && (
              <figure>
                <div className="th2 big" aria-hidden="true">
                  <div className="plate">
                    <span className="plate-ini">{project.title.charAt(0)}</span>
                    <span className="plate-meta">{project.stack.slice(0, 3).join(' · ') || project.kind}</span>
                  </div>
                </div>
                <figcaption>No screenshots yet.</figcaption>
              </figure>
            )}
            {current && (
              <figure>
                {current.video && clip ? (
                  <video key={current.src} src={current.src} poster={clip.poster} controls autoPlay muted loop playsInline style={{ aspectRatio: clip.ratio }} aria-label={current.alt} />
                ) : (
                  <button type="button" className="zoom-btn" aria-label={`Enlarge: ${current.caption}`} onClick={() => setZoom(true)}>
                    <img key={current.src} src={current.src} alt={current.alt} />
                  </button>
                )}
                <figcaption>{current.caption}</figcaption>
              </figure>
            )}
            {gallery.length > 1 && (
              <div className="thumbs" role="group" aria-label="Video and screenshots">
                {gallery.map((g, i) => (
                  <button key={g.src} type="button" aria-pressed={i === shot} aria-label={g.caption} className={g.video ? 'is-video' : undefined} onClick={() => setShot(i)}>
                    <img src={g.video && clip ? clip.poster : g.src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="modal-text">
            <span className="label">{project.status === 'live' ? (project.live ? 'Live site' : 'Runs on my Mac') : project.status === 'wip' ? 'In development' : 'Project'}</span>
            <h2 id="modal-title">{project.title}</h2>
            <span className="pm">
              {project.year} · {project.kind}
            </span>
            <p>{project.description}</p>
            {project.bullets && (
              <>
                <h3>What it does</h3>
                <ul>
                  {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </>
            )}
            {project.build && (
              <>
                <h3>How I built it</h3>
                <ul>
                  {project.build.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </>
            )}
            {project.stack.length > 0 && (
              <div className="stk">
                {project.stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            )}
            <div className="pl">
              {project.live && (
                <a className="go" href={project.live} target="_blank" rel="noreferrer">
                  <Icon name="up" />
                  Visit
                </a>
              )}
              {project.repos.map((r) => (
                <a key={r.url} href={r.url} target="_blank" rel="noreferrer">
                  <Icon name="gh" />
                  {r.label === 'Code' ? 'Repository' : (<span>{r.label}<span className="rl-x"> repository</span></span>)}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      <dialog
        ref={zoomRef}
        className="lightbox"
        aria-label="Enlarged screenshot"
        onClose={(e) => {
          // React bubbles close events up the component tree, which would also close the project window.
          e.stopPropagation()
          setZoom(false)
        }}
        onCancel={(e) => e.stopPropagation()}
        onClick={() => setZoom(false)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1)
          if (e.key === 'ArrowLeft') step(-1)
        }}
      >
        {current && !current.video && (
          <figure>
            <img src={current.src} alt={current.alt} />
            <figcaption>{current.caption}</figcaption>
          </figure>
        )}
        <button type="button" className="ib modal-x" aria-label="Close enlarged image" onClick={() => setZoom(false)}>
          <Icon name="x" />
        </button>
        {stills.length > 1 && (
          <>
            <button
              type="button"
              className="ib lb-nav prev"
              aria-label="Previous screenshot"
              onClick={(e) => {
                e.stopPropagation()
                step(-1)
              }}
            >
              <Icon name="chev" className="rot-l" />
            </button>
            <button
              type="button"
              className="ib lb-nav next"
              aria-label="Next screenshot"
              onClick={(e) => {
                e.stopPropagation()
                step(1)
              }}
            >
              <Icon name="chev" className="rot-r" />
            </button>
          </>
        )}
      </dialog>
    </dialog>
  )
}

import { useCallback, useEffect, useRef, useState } from 'react'
import { projectFilters, projects } from '../data/projects'
import type { DeployStatus, Project } from '../data/types'
import { Chips } from './Chips'
import { CodeArt } from './CodeArt'
import { Icon } from './Icon'
import { ProjectModal } from './ProjectModal'
import { Reveal } from './Reveal'

const statusLabel: Record<DeployStatus, string> = {
  live: 'Live',
  repo: 'Repo only',
  wip: 'In development',
  tbd: 'Deploy: to confirm',
}

/** Fades a card out before removing it from the grid, and back in when it returns. */
function useFilterPhase(match: boolean) {
  const [gone, setGone] = useState(!match)
  const [fade, setFade] = useState(!match)
  useEffect(() => {
    if (!match) {
      setFade(true)
      const t = setTimeout(() => setGone(true), 260)
      return () => clearTimeout(t)
    }
    setGone(false)
    const r = requestAnimationFrame(() => requestAnimationFrame(() => setFade(false)))
    return () => cancelAnimationFrame(r)
  }, [match])
  return { gone, fade }
}

const SHOWN_TAGS = 4

function Card({ project, index, match, onOpen }: { project: Project; index: number; match: boolean; onOpen: (p: Project) => void }) {
  const { gone, fade } = useFilterPhase(match)
  const bar = (project.live ?? project.repos[0].url).replace('https://', '')
  // Every card opens the details window
  const opens = true
  const tags = project.stack.slice(0, SHOWN_TAGS)
  const hidden = project.stack.length - tags.length

  return (
    <Reveal
      tag="article"
      index={index % 4}
      className={`pc ${project.featured ? 'feat' : ''} ${opens ? 'click' : ''} ${fade ? 'fade' : ''} ${gone ? 'hide' : ''}`}
    >
      {opens && (
        <button type="button" className="card-hit" aria-label={`Open details for ${project.title}`} onClick={() => onOpen(project)} />
      )}
      <div className="win">
        <div className="wbar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>{bar}</span>
        </div>
        <div className="th2" aria-hidden={project.image ? undefined : true}>
          <span className={`st ${project.status}`}>{statusLabel[project.status]}</span>
          {project.image ? (
            <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" />
          ) : (
            <CodeArt art={project.art} />
          )}
          {!project.image && project.featured && <span className="shot">screenshot goes here</span>}
        </div>
      </div>
      <div className="pb">
        {project.featured && <span className="badge">highlighted project</span>}
        <h3>{project.title}</h3>
        <span className="pm">
          {project.year} · {project.kind}
        </span>
        <p className={project.featured ? '' : 'clamp'}>{project.description}</p>
        {project.stack.length > 0 && (
          <div className="stk">
            {tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
            {hidden > 0 && <span className="tag">+{hidden}</span>}
          </div>
        )}
        <div className="pl">
          {project.live && (
            <a className="go" href={project.live} target="_blank" rel="noreferrer">
              <Icon name="up" />
              Visit
            </a>
          )}
          {opens && (
            <button type="button" className="vm" onClick={() => onOpen(project)}>
              View more
              <Icon name="chev" className="rot-r" />
            </button>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All')
  const track = useRef<HTMLDivElement>(null)
  const [opened, setOpened] = useState<Project | null>(null)
  const [edge, setEdge] = useState({ start: true, end: false })

  const matches = (p: Project) => filter === 'All' || p.kind === filter
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  const measure = useCallback(() => {
    const el = track.current
    if (!el) return
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 })
  }, [])

  useEffect(() => {
    measure()
    // Cards leave the row after their 260 ms fade, so measure again once that is done.
    const t = setTimeout(measure, 320)
    addEventListener('resize', measure)
    return () => {
      clearTimeout(t)
      removeEventListener('resize', measure)
    }
  }, [filter, measure])

  const slide = (dir: 1 | -1) => {
    const el = track.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section className="sec" id="projects">
      <Reveal className="sh">
        <span className="label">projects</span>
        <h2>Things I built</h2>
        <p className="muted">One featured build and smaller ones from my own repositories. Each card takes a screenshot and shows whether it is deployed.</p>
      </Reveal>
      <Chips options={projectFilters} value={filter} label="Filter projects" onChange={setFilter} />
      {featured.map((p, i) => (
        <div key={p.title} className="pj-feat">
          <Card project={p} index={i} match={matches(p)} onOpen={setOpened} />
        </div>
      ))}
      <div className="hs-head">
        <h3>More projects</h3>
        <div className="hs-btns">
          <button type="button" className="ib" aria-label="Scroll projects left" disabled={edge.start} onClick={() => slide(-1)}>
            <Icon name="chev" className="rot-l" />
          </button>
          <button type="button" className="ib" aria-label="Scroll projects right" disabled={edge.end} onClick={() => slide(1)}>
            <Icon name="chev" className="rot-r" />
          </button>
        </div>
      </div>
      <div className="hscroll" ref={track} onScroll={measure} tabIndex={0} role="region" aria-label="More projects, scroll sideways">
        {rest.map((p, i) => (
          <Card key={p.title} project={p} index={i} match={matches(p)} onOpen={setOpened} />
        ))}
      </div>
      <ProjectModal project={opened} onClose={() => setOpened(null)} />
    </section>
  )
}

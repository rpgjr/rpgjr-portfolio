import { useState } from 'react'
import { employers, techFilters } from '../data/experience'
import type { Employer, Role } from '../data/types'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { Chips } from './Chips'
import { ExperienceModal } from './ExperienceModal'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SwipeHint } from './SwipeHint'

function RoleBlock({ role, showPeriod, compact }: { role: Role; showPeriod: boolean; compact: boolean }) {
  const tech = compact ? role.tech.slice(0, 4) : role.tech
  return (
    <div className="rb">
      <div className="rhead">
        <strong>{role.title}</strong>
        {showPeriod && <span className="when">{role.period}</span>}
      </div>
      <ul className="hi">
        {role.key.map((k) => (
          <li key={k}>
            <Icon name="ok" />
            <span>{k}</span>
          </li>
        ))}
      </ul>
      <div className="stk">
        {tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
        {compact && role.tech.length > 4 && <span className="tag">+{role.tech.length - 4}</span>}
      </div>
    </div>
  )
}

function Entry({ employer, index, dim, phone, onOpen }: { employer: Employer; index: number; dim: boolean; phone: boolean; onOpen: (e: Employer) => void }) {
  const several = employer.roles.length > 1
  // Phone cards show the newest position only. The rest is in the details window.
  const roles = phone ? employer.roles.slice(0, 1) : employer.roles

  return (
    <Reveal index={index} className={`ent ${employer.earlier ? 'old' : ''} ${dim ? 'dim' : ''}`}>
      <span className="mk">{employer.monogram}</span>
      <div className="eh">
        <button type="button" className="card-hit" aria-label={`Open details for ${employer.company}`} onClick={() => onOpen(employer)} />
        <div className="row1">
          <span className="cname">
            <span className="mono-b mk-in">{employer.monogram}</span>
            {employer.company}
          </span>
          {(!several || phone) && <span className="when">{phone ? roles[0].period : employer.span}</span>}
        </div>
        {roles.map((r) => (
          <RoleBlock key={r.title} role={r} showPeriod={several && !phone} compact={phone} />
        ))}
        {phone && several && <span className="more-roles">+{employer.roles.length - 1} more position</span>}
        <div className="eh-foot">
          <button type="button" className="vm" onClick={() => onOpen(employer)}>
            View more
            <Icon name="chev" className="rot-r" />
          </button>
        </div>
      </div>
    </Reveal>
  )
}

export function Experience() {
  const [tech, setTech] = useState<string | null>(null)
  const [opened, setOpened] = useState<Employer | null>(null)
  const phone = useMediaQuery('(max-width: 700px)')

  return (
    <section className="sec" id="log">
      <Reveal className="sh">
        <span className="label">experience</span>
        <h2>Where I have worked</h2>
        <p className="muted">Key results for each role, newest first. Filter by technology, and open a role for the full list.</p>
        <SwipeHint />
      </Reveal>
      <Chips options={techFilters} value={tech} label="Filter by technology" onChange={(t) => setTech((c) => (c === t ? null : t))} />
      <div className="log">
        {employers.map((e, i) => (
          <Entry
            key={e.company}
            employer={e}
            index={i}
            dim={tech !== null && !e.roles.some((r) => r.tech.includes(tech))}
            phone={phone}
            onOpen={setOpened}
          />
        ))}
      </div>
      <ExperienceModal employer={opened} onClose={() => setOpened(null)} />
    </section>
  )
}

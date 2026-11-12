import { skillGroups } from '../data/skills'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SwipeHint } from './SwipeHint'

export function Skills() {
  return (
    <section className="sec" id="stack">
      <Reveal className="sh">
        <span className="label">skills</span>
        <h2>What I work with</h2>
        <p className="muted">The tools and practices behind my work, grouped by what they are used for.</p>
        <SwipeHint />
      </Reveal>
      <Reveal className="legend">
        <span><i className="d on" />Used in my jobs</span>
        <span><i className="d" />Used in school and personal projects</span>
      </Reveal>
      <div className="stkg">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} index={i} className="sc">
            <span className="ico"><Icon name={g.icon} /></span>
            <h3>{g.title}</h3>
            <p>{g.blurb}</p>
            <div className="sks">
              {g.skills.map((s) => (
                <span key={s.name} className={`sk ${s.work ? 'on' : ''}`}>{s.name}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

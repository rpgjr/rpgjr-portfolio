import { workingAgreement } from '../data/skills'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SwipeHint } from './SwipeHint'

export function HowIWork() {
  return (
    <section className="sec" id="how">
      <Reveal className="sh">
        <span className="label">working agreement</span>
        <h2>How I work with a team</h2>
        <SwipeHint />
      </Reveal>
      <div className="agr">
        {workingAgreement.map((a, i) => (
          <Reveal key={a.title} index={i} className="ac">
            <span className="ico"><Icon name={a.icon} /></span>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

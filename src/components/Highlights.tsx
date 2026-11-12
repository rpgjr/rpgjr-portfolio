import { useState } from 'react'
import { companyFilters, companyMonogram, highlights, VISIBLE_AT_FIRST } from '../data/highlights'
import type { Highlight } from '../data/types'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { Chips } from './Chips'
import { HighlightModal } from './HighlightModal'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SwipeHint } from './SwipeHint'

const SHOWN_TAGS = 3

function Card({ item, delay, onOpen }: { item: Highlight; delay: number; onOpen: (h: Highlight) => void }) {
  const tags = item.stack.slice(0, SHOWN_TAGS)
  const more = item.stack.length - tags.length
  return (
    <article className="lc click" style={{ '--j': delay } as React.CSSProperties}>
      <button type="button" className="card-hit" aria-label={`Open details for ${item.title}`} onClick={() => onOpen(item)} />
      <header>
        <span className="co">
          <span className="mono-b">{companyMonogram[item.company]}</span>
          {item.company}
        </span>
        <h3>{item.title}</h3>
      </header>
      <div className="ba">
        {item.before && (
          <div className="b">
            <Icon name="x" />
            <div>
              <small>before</small>
              <span className="cl2">{item.before}</span>
            </div>
          </div>
        )}
        <div className="a">
          <Icon name="ok" />
          <div>
            <small>{item.before ? 'after' : 'delivered'}</small>
            <span className="cl3">{item.after}</span>
          </div>
        </div>
      </div>
      <div className="stk">
        {tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
        {more > 0 && <span className="tag">+{more}</span>}
      </div>
      <button type="button" className="vm hvm" onClick={() => onOpen(item)}>
        View more
        <Icon name="chev" className="rot-r" />
      </button>
    </article>
  )
}

export function Highlights() {
  const [company, setCompany] = useState<(typeof companyFilters)[number]>('All')
  const [showAll, setShowAll] = useState(false)
  const [opened, setOpened] = useState<Highlight | null>(null)
  const phone = useMediaQuery('(max-width: 700px)')

  const list = highlights.filter((h) => company === 'All' || h.company === company)
  // On phones every card sits in one swipe row, so nothing needs a "Show all" button
  const split = company === 'All' && !phone ? VISIBLE_AT_FIRST : list.length
  const first = list.slice(0, split)
  const rest = list.slice(split)
  const hasMore = rest.length > 0

  return (
    <section className="sec" id="highlights">
      <Reveal className="sh">
        <span className="label">career highlights</span>
        <h2>What I have built and delivered</h2>
        <p className="muted">Major work first, then the smaller things that kept it running. Filter by where I did it.</p>
        <SwipeHint />
      </Reveal>
      <Chips
        options={companyFilters}
        value={company}
        label="Filter highlights by company"
        onChange={(c) => {
          setCompany(c)
          setShowAll(false)
        }}
      />
      <div className="led">
        {first.map((h) => (
          <Card key={h.title} item={h} delay={0} onOpen={setOpened} />
        ))}
      </div>
      {hasMore && (
        <div className={`mw ${showAll ? 'open' : ''}`}>
          <div>
            <div className="led">
              {rest.map((h, i) => (
                <Card key={h.title} item={h} delay={i} onOpen={setOpened} />
              ))}
            </div>
          </div>
        </div>
      )}
      {hasMore && (
        <div className="more-row">
          <button className="fc more" type="button" aria-expanded={showAll} onClick={() => setShowAll((v) => !v)}>
            <span>{showAll ? 'Show fewer' : `Show all ${list.length}`}</span>
            <Icon name="chev" />
          </button>
        </div>
      )}
      <HighlightModal item={opened} onClose={() => setOpened(null)} />
    </section>
  )
}

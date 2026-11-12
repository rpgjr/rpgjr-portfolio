import type { CSSProperties } from 'react'
import type { Seg } from '../data/types'

/** The code lines drawn inside a project thumbnail. Lines type in one by one through CSS. */
export function CodeArt({ art }: { art: Seg[][] }) {
  return (
    <>
      {art.map((line, n) => (
        <span key={n} className={`ln ${n === art.length - 1 ? 'last' : ''}`} style={{ '--n': n } as CSSProperties}>
          {line.map(([cls, text], k) => (cls ? <span key={k} className={cls}>{text}</span> : text))}
        </span>
      ))}
    </>
  )
}

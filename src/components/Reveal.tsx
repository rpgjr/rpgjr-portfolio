import { createElement, useRef, type CSSProperties, type ReactNode } from 'react'
import { useInView } from 'motion/react'

interface Props {
  tag?: 'div' | 'article' | 'section' | 'footer'
  className?: string
  /** Position in a row of siblings. Each step delays the entrance by 70 ms. */
  index?: number
  children: ReactNode
}

/** Fades and slides its content in once, the first time it scrolls into view. Adds `in` so CSS can react too. */
export function Reveal({ tag = 'div', className = '', index = 0, children }: Props) {
  const ref = useRef<HTMLElement>(null)
  const seen = useInView(ref, { once: true, amount: 0.06 })
  return createElement(
    tag,
    { ref, className: `rv ${seen ? 'in' : ''} ${className}`.trim(), style: { '--i': index } as CSSProperties },
    children,
  )
}

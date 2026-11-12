import { useEffect, type RefObject } from 'react'

/** Tilts `target` toward the pointer while it is over `host`. Skipped on touch screens and for reduced motion. */
export function useTilt(host: RefObject<HTMLElement | null>, target: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const h = host.current
    const t = target.current
    if (!h || !t) return
    if (!matchMedia('(hover: hover)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const move = (e: PointerEvent) => {
      const r = h.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      t.style.setProperty('--ry', `${x * 10}deg`)
      t.style.setProperty('--rx', `${-y * 8}deg`)
    }
    const leave = () => {
      t.style.setProperty('--ry', '0deg')
      t.style.setProperty('--rx', '0deg')
    }
    h.addEventListener('pointermove', move)
    h.addEventListener('pointerleave', leave)
    return () => {
      h.removeEventListener('pointermove', move)
      h.removeEventListener('pointerleave', leave)
    }
  }, [host, target])
}

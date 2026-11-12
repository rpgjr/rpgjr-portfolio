import { useEffect, useState } from 'react'

/** Returns the scroll progress (0 to 1) and the id of the section nearest the top third of the screen. */
export function useScrollSpy(ids: string[]) {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      setProgress(max > 0 ? scrollY / max : 0)
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < innerHeight * 0.35) current = id
      }
      setActive(current)
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [ids])

  return { progress, active }
}

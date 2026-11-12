import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useTheme } from '../hooks/useTheme'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { Icon } from './Icon'

export const sections = [
  { id: 'highlights', label: 'highlights' },
  { id: 'log', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'stack', label: 'stack' },
  { id: 'how', label: 'how I work' },
  { id: 'contact', label: 'contact' },
]
const ids = sections.map((s) => s.id)

export function Nav() {
  const toggleTheme = useTheme()
  const { progress, active } = useScrollSpy(ids)
  const [menu, setMenu] = useState(false)

  // Close the phone menu with Escape or when the screen grows past the phone layout
  useEffect(() => {
    if (!menu) return
    const key = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    const grow = matchMedia('(min-width: 901px)')
    const close = () => grow.matches && setMenu(false)
    addEventListener('keydown', key)
    grow.addEventListener('change', close)
    return () => {
      removeEventListener('keydown', key)
      grow.removeEventListener('change', close)
    }
  }, [menu])

  const goTop = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
    history.replaceState(null, '', '#top')
    setMenu(false)
  }

  return (
    <>
      <div id="prog" style={{ transform: `scaleX(${progress})` }} />
      <div className="top">
        <div className="pill">
          <a className="brand" href="#top" onClick={goTop} aria-label="Back to top">
            <b>~/</b>
            {profile.shortName}
          </a>
          <nav className="links" aria-label="Sections">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'on' : ''}>
                {s.label}
              </a>
            ))}
          </nav>
          <button className="ib" type="button" onClick={toggleTheme} aria-label="Toggle light and dark theme">
            <Icon name="sun" className="sun" />
            <Icon name="moon" className="moon" />
          </button>
          <button
            className="ib burger"
            type="button"
            aria-label={menu ? 'Close menu' : 'Open menu'}
            aria-expanded={menu}
            aria-controls="mnav"
            onClick={() => setMenu((v) => !v)}
          >
            <Icon name={menu ? 'x' : 'menu'} />
          </button>
        </div>
        <nav id="mnav" className={`mnav ${menu ? 'open' : ''}`} aria-label="Sections" aria-hidden={!menu}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} tabIndex={menu ? 0 : -1} className={active === s.id ? 'on' : ''} onClick={() => setMenu(false)}>
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}

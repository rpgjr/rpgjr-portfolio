import { useCallback } from 'react'

/** Flips between light and dark. With no saved choice the OS setting decides what "current" means. */
export function useTheme() {
  return useCallback(() => {
    const root = document.documentElement
    const saved = root.getAttribute('data-theme')
    const isDark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
    const next = isDark ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* private mode: choice lasts for this visit only */
    }
  }, [])
}

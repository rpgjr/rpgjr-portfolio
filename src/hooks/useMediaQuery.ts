import { useSyncExternalStore } from 'react'

/** True while the screen matches the media query, and updates when it changes. */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (notify) => {
      const m = matchMedia(query)
      m.addEventListener('change', notify)
      return () => m.removeEventListener('change', notify)
    },
    () => matchMedia(query).matches,
    () => false,
  )
}

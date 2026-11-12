import { useState } from 'react'

/** Shows a temporary label (for example "Copied") and then goes back to the normal one. */
export function useFlash(normal: string, ms = 1800) {
  const [label, setLabel] = useState(normal)
  const flash = (text: string) => {
    setLabel(text)
    setTimeout(() => setLabel(normal), ms)
  }
  return [label, flash] as const
}

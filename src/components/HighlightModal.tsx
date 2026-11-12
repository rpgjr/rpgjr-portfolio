import { useEffect, useRef } from 'react'
import { companyMonogram } from '../data/highlights'
import type { Highlight } from '../data/types'
import { Icon } from './Icon'

/** Full text of one career highlight: the problem, the result and every technology involved. */
export function HighlightModal({ item, onClose }: { item: Highlight | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (item && !d.open) {
      d.showModal()
      document.documentElement.classList.add('locked')
    }
    if (!item && d.open) d.close()
    return () => document.documentElement.classList.remove('locked')
  }, [item])

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="hl-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close()
      }}
    >
      {item && (
        <div className="modal-body solo">
          <button type="button" className="ib modal-x" aria-label="Close details" onClick={() => ref.current?.close()}>
            <Icon name="x" />
          </button>
          <span className="co">
            <span className="mono-b">{companyMonogram[item.company]}</span>
            {item.company}
          </span>
          <h2 id="hl-title">{item.title}</h2>
          <div className="ba">
            {item.before && (
              <div className="b">
                <Icon name="x" />
                <div>
                  <small>before</small>
                  {item.before}
                </div>
              </div>
            )}
            <div className="a">
              <Icon name="ok" />
              <div>
                <small>{item.before ? 'after' : 'delivered'}</small>
                {item.after}
              </div>
            </div>
          </div>
          <div className="stk">
            {item.stack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
      )}
    </dialog>
  )
}

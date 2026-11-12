import { Icon } from './Icon'

/** Phone-only cue under a section title that the cards below slide sideways. */
export function SwipeHint() {
  return (
    <span className="swipe" aria-hidden="true">
      Swipe for more <Icon name="arrow" />
    </span>
  )
}

/** Fixed page backdrop: a regular grid of small solid squares that fades out toward the bottom. Pure CSS. */
export function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <span className="sqdots" />
    </div>
  )
}

interface Props<T extends string> {
  options: readonly T[]
  value: T | null
  onChange: (next: T) => void
  label: string
  className?: string
}

/** Row of toggle chips used by every filter on the page. */
export function Chips<T extends string>({ options, value, onChange, label, className = '' }: Props<T>) {
  return (
    <div className={`filt rv in ${className}`.trim()} role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o} type="button" className="fc" aria-pressed={value === o} onClick={() => onChange(o)}>
          {o}
        </button>
      ))}
    </div>
  )
}

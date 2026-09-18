export default function SectionHeader({ eyebrow, title, action, align = 'left', className = '' }) {
  const aligned = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'

  return (
    <div className={`mb-6 ${aligned} ${className}`}>
      <div>
        {eyebrow ? (
          <p className="text-sm font-semibold tracking-wide text-brand-700 uppercase">{eyebrow}</p>
        ) : null}
        <h2 className="font-display mt-1 text-2xl font-bold tracking-tight text-ink md:text-3xl">{title}</h2>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

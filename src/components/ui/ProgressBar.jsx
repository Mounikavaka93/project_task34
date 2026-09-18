import { useEffect, useState } from 'react'

export default function ProgressBar({ value = 0, delay = 0, className = '' }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(Math.min(100, Math.max(0, value))), 180 + delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return (
    <div className={`h-2.5 overflow-hidden rounded-full bg-slate-200 ${className}`}>
      <div
        className="relative h-full overflow-hidden rounded-full bg-linear-to-r from-brand-500 to-brand-700 transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      >
        <span className="progress-shimmer absolute inset-0" />
      </div>
    </div>
  )
}

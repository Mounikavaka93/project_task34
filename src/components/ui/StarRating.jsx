import { Star } from 'lucide-react'

export default function StarRating({ value = 0, size = 14, showValue = false, className = '' }) {
  const rounded = Math.round(value)

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={`transition duration-300 group-hover:scale-110 ${index < rounded ? 'fill-gold text-gold' : 'text-slate-300'}`}
        />
      ))}
      {showValue ? <span className="ml-1 text-sm font-semibold">{value.toFixed(1)}</span> : null}
    </div>
  )
}

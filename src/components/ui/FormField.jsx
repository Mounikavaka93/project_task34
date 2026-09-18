import { Check } from 'lucide-react'

export default function FormField({
  label,
  error,
  touched = false,
  valid = false,
  hint,
  showValidIcon = true,
  children,
}) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      <div className="relative">
        {children}
        {showValidIcon && touched && valid && !error ? (
          <Check size={16} className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-emerald-500" />
        ) : null}
      </div>
      {touched && error ? (
        <p className="mt-1 text-xs font-medium text-red-500">{error}</p>
      ) : hint && !(touched && valid) ? (
        <p className="mt-1 text-xs text-slate-400">{hint}</p>
      ) : null}
    </label>
  )
}

export const inputClass = (touched, error, extra = '') =>
  `mt-1 w-full rounded-2xl border bg-white px-4 py-3 text-sm transition duration-200 ${
    touched && error
      ? 'animate-shake border-red-400 ring-2 ring-red-100'
      : touched && !error
        ? 'border-emerald-400 focus:border-emerald-500'
        : 'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
  } ${extra}`

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}) {
  const variants = {
    primary:
      'bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-600/25',
    secondary:
      'bg-ink text-white shadow-lg shadow-ink/15 hover:bg-ink-soft hover:-translate-y-0.5',
    outline:
      'border-2 border-brand-600 text-brand-700 bg-white/70 hover:bg-brand-50 hover:-translate-y-0.5',
    ghost: 'text-ink hover:bg-white/70',
    gold: 'bg-gold text-ink shadow-lg shadow-gold/30 hover:brightness-105 hover:-translate-y-0.5',
  }

  const sizes = {
    sm: 'px-3.5 py-2 text-sm rounded-xl',
    md: 'px-5 py-2.5 text-sm rounded-2xl',
    lg: 'px-6 py-3.5 text-base rounded-2xl',
  }

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition duration-300 will-change-transform hover:[&_svg]:translate-x-0.5 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

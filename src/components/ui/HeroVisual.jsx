export default function HeroVisual() {
  return (
    <div className="relative">
      <div className="animate-float relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
          alt="Students learning together in an online classroom"
          className="h-[240px] w-full object-cover md:h-[360px] lg:h-[420px]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/50 via-ink/10 to-transparent" />
      </div>

      <svg
        className="animate-float pointer-events-none absolute -top-7 -left-3 hidden w-24 drop-shadow-lg md:block"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden
      >
        <rect x="10" y="28" width="100" height="72" rx="14" fill="#14736c" />
        <path d="M22 40h76M22 54h52M22 68h64" stroke="#F4B942" strokeWidth="6" strokeLinecap="round" />
        <circle cx="92" cy="28" r="16" fill="#F4B942" />
        <path d="M86 28h12M92 22v12" stroke="#0b1520" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <div className="pointer-events-none absolute -top-4 -right-3 hidden rounded-2xl bg-white p-3 shadow-xl md:block">
        <svg width="64" height="48" viewBox="0 0 72 56" fill="none" aria-hidden>
          <path d="M8 44 36 12l28 32" stroke="#14736c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 44h36" stroke="#F4B942" strokeWidth="5" strokeLinecap="round" />
          <circle cx="36" cy="14" r="6" fill="#F4B942" />
        </svg>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Popular courses', to: '/#popular-courses' },
      { label: 'Featured instructors', to: '/#instructors' },
      { label: 'All courses', to: '/courses' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Development', to: '/courses?category=development' },
      { label: 'Design', to: '/courses?category=design' },
      { label: 'Business', to: '/courses?category=business' },
      { label: 'Data Science', to: '/courses?category=data-science' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Student dashboard', to: '/dashboard' },
      { label: 'Create account', to: '/register' },
      { label: 'Sign in', to: '/login' },
      { label: 'Student stories', to: '/#testimonials' },
    ],
  },
]

const social = [
  {
    label: 'Learnify on X',
    href: 'https://x.com',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Learnify on Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Learnify on LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M6.5 9H4v11h2.5V9zM5.25 4A1.75 1.75 0 1 0 5.25 7.5 1.75 1.75 0 0 0 5.25 4zM20 20h-2.5v-5.6c0-1.34-.48-2.25-1.68-2.25-.92 0-1.47.62-1.71 1.22-.09.21-.11.51-.11.8V20H11.5s.03-9.07 0-10H14v1.42c.33-.51 1.17-1.24 2.85-1.24 2.08 0 3.15 1.36 3.15 4.27V20z" />
      </svg>
    ),
  },
  {
    label: 'Learnify on YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M23 12.2s0-3.2-.4-4.6c-.22-.86-.9-1.54-1.76-1.76C19.5 5.4 12 5.4 12 5.4s-7.5 0-8.84.44c-.86.22-1.54.9-1.76 1.76C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.22.86.9 1.54 1.76 1.76C4.5 18.99 12 19 12 19s7.5 0 8.84-.44c.86-.22 1.54-.9 1.76-1.76.4-1.4.4-4.6.4-4.6zM9.75 15.5v-6.6l6.3 3.3-6.3 3.3z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="page-shell grid items-start gap-8 py-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500">
              <GraduationCap />
            </span>
            <span className="font-display text-xl font-extrabold">Learnify</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            A focused online classroom for people who want better courses, better teachers, and a clearer view of their
            progress.
          </p>
          <div className="mt-5 flex gap-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:-translate-y-0.5 hover:scale-110 hover:bg-brand-500"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="font-display mb-4 text-sm font-bold tracking-wide uppercase">{column.title}</h4>
            <ul className="space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/70 transition hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>© 2026 Learnify. Built for focused learners.</p>
          <p>Privacy · Terms · Accessibility</p>
        </div>
      </div>
    </footer>
  )
}

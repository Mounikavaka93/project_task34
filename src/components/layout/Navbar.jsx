import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GraduationCap, Menu, Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'
import Button from '../ui/Button'

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/#instructors', label: 'Instructors' },
  { to: '/dashboard', label: 'Dashboard' },
]

export default function Navbar() {
  const { user } = useAuth()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (link) =>
    (link.to === '/' && location.pathname === '/' && !location.hash) ||
    (link.to === '/courses' && location.pathname.startsWith('/courses')) ||
    (link.to === '/dashboard' && location.pathname === '/dashboard') ||
    (link.to.includes('#instructors') && location.hash === '#instructors')

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="page-shell flex h-16 items-center justify-between md:h-[72px]">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition duration-300 group-hover:rotate-6 group-hover:scale-105">
            <GraduationCap size={22} />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-ink">Learnify</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link text-sm font-medium ${
                isActive(link) ? 'active text-ink' : 'text-slate-600 hover:text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/courses"
            className="rounded-full p-2 text-slate-500 transition duration-300 hover:scale-110 hover:bg-brand-50 hover:text-brand-700"
            aria-label="Search courses"
          >
            <Search size={18} />
          </Link>
          {user ? (
            <Link
              to="/dashboard"
              className="flex items-center gap-2 rounded-full bg-sand py-1 pr-3 pl-1 transition hover:bg-brand-50"
            >
              <img src={user.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
              <span className="text-sm font-semibold">{user.name.split(' ')[0]}</span>
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold text-ink transition hover:text-brand-700">
                Log in
              </Link>
              <Link to="/register">
                <Button size="sm">Start Learning</Button>
              </Link>
            </>
          )}
        </div>

        <button
          className="rounded-xl p-2 text-ink transition hover:bg-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="flex"
          >
            {open ? <X /> : <Menu />}
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index }}
                >
                  <Link
                    to={link.to}
                    className={`block rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-sand ${
                      isActive(link) ? 'bg-brand-50 text-brand-800' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex gap-2">
                {user ? (
                  <Link to="/dashboard" className="w-full">
                    <Button className="w-full">Dashboard</Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/login" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Log in
                      </Button>
                    </Link>
                    <Link to="/register" className="flex-1">
                      <Button className="w-full">Join free</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

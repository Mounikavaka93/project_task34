import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Award, BookOpen, CheckCircle2, Clock3, LayoutDashboard, LogOut, Menu, UserRound, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'
import PageTransition from '../motion/PageTransition'
import { smoothScrollTo } from '../../lib/smoothScroll'

const items = [
  { to: '/dashboard', hash: '', label: 'Overview', icon: LayoutDashboard },
  { to: '/dashboard#courses', hash: '#courses', label: 'My courses', icon: BookOpen },
  { to: '/dashboard#recent', hash: '#recent', label: 'Recently accessed', icon: Clock3 },
  { to: '/dashboard#completed', hash: '#completed', label: 'Completed', icon: CheckCircle2 },
  { to: '/dashboard#certificates', hash: '#certificates', label: 'Certificates', icon: Award },
  { to: '/dashboard#profile', hash: '#profile', label: 'Profile', icon: UserRound },
]

export default function DashboardLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!location.hash) return
    const el = document.querySelector(location.hash)
    if (!el) return
    const timer = setTimeout(() => smoothScrollTo(el, { offset: -16 }), 80)
    return () => clearTimeout(timer)
  }, [location.hash])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const nav = (
    <nav className="flex flex-1 flex-col gap-1">
      {items.map((item) => {
        const active = item.hash ? location.hash === item.hash : !location.hash
        return (
          <a
            key={item.label}
            href={item.to}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition duration-200 hover:translate-x-0.5 ${
              active ? 'bg-brand-50 text-brand-800' : 'text-slate-600 hover:bg-brand-50 hover:text-brand-800'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </a>
        )
      })}
    </nav>
  )

  return (
    <div className="min-h-svh overflow-x-clip bg-[#f3f5f2]">
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 lg:hidden">
        <NavLink to="/" className="font-display font-extrabold">
          Learnify
        </NavLink>
        <button
          className="rounded-xl p-2 transition hover:bg-sand"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open dashboard menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-slate-200 bg-white px-4 py-4 lg:hidden"
          >
            {nav}
            <button onClick={handleLogout} className="mt-3 text-sm font-medium text-red-600">
              Log out
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="page-shell flex items-start gap-0 lg:gap-8 lg:py-6">
        <motion.aside
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="sticky top-6 hidden h-[calc(100svh-48px)] w-64 shrink-0 flex-col rounded-3xl bg-white p-5 shadow-sm lg:flex"
        >
          <NavLink to="/" className="font-display mb-8 text-xl font-extrabold text-ink">
            Learnify
          </NavLink>
          {nav}
          <button
            onClick={handleLogout}
            className="mt-auto flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <LogOut size={18} />
            Log out
          </button>
        </motion.aside>

        <div className="min-w-0 flex-1 py-5 lg:py-0">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Student dashboard</p>
              <h1 className="font-display text-xl font-bold text-ink md:text-2xl">{user?.name}</h1>
            </div>
            <img src={user?.avatar} alt="" className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white md:h-12 md:w-12" />
          </div>
          <PageTransition />
        </div>
      </div>
    </div>
  )
}

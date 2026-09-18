import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import PageTransition from '../motion/PageTransition'

export default function AuthLayout() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <aside className="relative hidden overflow-hidden bg-ink lg:block">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
          alt="Students collaborating"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-brand-900/40" />
        <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-12 text-white">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 transition hover:rotate-6">
                <GraduationCap />
              </span>
              <span className="font-display text-xl font-extrabold">Learnify</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display max-w-md text-3xl leading-tight font-bold lg:text-4xl">Learn with intention, not noise.</p>
            <p className="mt-4 max-w-md text-white/75">
              Join a classroom built around expert instructors, honest progress, and courses you can actually finish.
            </p>
          </motion.div>
        </div>
      </aside>
      <div className="flex items-center justify-center bg-sand px-4 py-8 md:px-8">
        <div className="w-full max-w-md">
          <Link to="/" className="mb-6 inline-flex items-center gap-2 lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <GraduationCap />
            </span>
            <span className="font-display text-xl font-extrabold text-ink">Learnify</span>
          </Link>
          <PageTransition />
        </div>
      </div>
    </div>
  )
}

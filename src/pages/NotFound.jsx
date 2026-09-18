import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-bold tracking-widest text-brand-700 uppercase">404</p>
          <h1 className="font-display mt-2 text-3xl font-extrabold md:text-4xl">This page is off the syllabus</h1>
          <p className="mt-3 text-slate-500">The link may be old, or the course moved. Head back to the catalog.</p>
          <Link to="/" className="mt-6 inline-block">
            <Button>Return home</Button>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

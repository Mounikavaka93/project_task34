import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { GraduationCap } from 'lucide-react'

const openEase = [0.66, 0.05, 0.25, 1]
const pageEase = [0.42, 0, 0.2, 1]

const pages = [
  { delay: 1.12, z: 26, title: '01', text: 'Development · Design · Data' },
  { delay: 1.36, z: 25, title: '02', text: 'Instructors who still practice' },
  { delay: 1.6, z: 24, title: '03', text: 'Your classroom is open' },
]

export default function EntranceOverlay() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    if (!visible) return undefined
    const timer = setTimeout(() => setVisible(false), 2900)
    return () => clearTimeout(timer)
  }, [visible])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="book-stage fixed inset-0 z-[120] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0 [transform-style:preserve-3d]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {pages.map((page) => (
              <motion.div
                key={page.title}
                className="book-leaf absolute inset-y-0 right-0 w-1/2 origin-left"
                style={{ zIndex: page.z }}
                initial={{ rotateY: 0, opacity: 1 }}
                animate={{ rotateY: -108, opacity: 0 }}
                transition={{
                  rotateY: { duration: 0.9, delay: page.delay, ease: pageEase },
                  opacity: { duration: 0.25, delay: page.delay + 0.55 },
                }}
              >
                <div className="book-face book-paper absolute inset-0 flex flex-col items-start justify-center border-l border-black/10 px-8 shadow-[-20px_0_32px_rgba(0,0,0,0.16)] sm:px-12">
                  <p className="text-xs font-semibold tracking-[0.3em] text-brand-700 uppercase">{page.title}</p>
                  <p className="font-display mt-3 max-w-[16rem] text-2xl leading-snug font-bold text-ink">{page.text}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="book-leaf absolute inset-y-0 left-0 w-1/2 origin-right"
              style={{ zIndex: 35 }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: -102 }}
              transition={{ duration: 1.45, delay: 0.7, ease: openEase }}
            >
              <div className="book-face book-cover absolute inset-0 overflow-hidden text-white">
                <div className="absolute inset-4 rounded-sm border border-gold/20" />
                <div className="absolute top-0 right-0 h-full w-8 bg-linear-to-l from-black/25 to-transparent" />
                <div className="flex h-full flex-col items-end justify-center pr-6 pl-8 sm:pr-12">
                  <GraduationCap className="mb-5 text-gold" size={40} />
                  <p className="text-right text-[11px] font-semibold tracking-[0.32em] text-gold uppercase">
                    Open the book
                  </p>
                  <p className="mt-3 max-w-[11rem] text-right text-sm text-white/70">A classroom bound in one place.</p>
                </div>
              </div>
              <div className="book-face book-face-back book-paper absolute inset-0" />
            </motion.div>

            <motion.div
              className="book-leaf absolute inset-y-0 right-0 w-1/2 origin-left"
              style={{ zIndex: 40 }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 102 }}
              transition={{ duration: 1.45, delay: 0.78, ease: openEase }}
            >
              <div className="book-face book-cover absolute inset-0 overflow-hidden text-white">
                <div className="absolute inset-4 rounded-sm border border-gold/20" />
                <div className="absolute top-0 left-0 h-full w-8 bg-linear-to-r from-black/25 to-transparent" />
                <div className="flex h-full flex-col items-start justify-center pr-8 pl-6 sm:pl-12">
                  <p className="text-[11px] font-semibold tracking-[0.35em] text-gold uppercase">Online classroom</p>
                  <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight sm:text-6xl">Learnify</h2>
                  <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-white/75">
                    Turn the page. Your next course is waiting.
                  </p>
                </div>
              </div>
              <div className="book-face book-face-back book-paper absolute inset-0" />
            </motion.div>

            <motion.div
              className="book-spine absolute top-[4%] bottom-[4%] left-1/2 z-50 w-[3px] -translate-x-1/2 rounded-full sm:w-1"
              initial={{ opacity: 1, scaleY: 0.9 }}
              animate={{ opacity: [1, 1, 0], scaleY: [0.9, 1, 1.02] }}
              transition={{ duration: 1.55, delay: 0.55, times: [0, 0.42, 1] }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

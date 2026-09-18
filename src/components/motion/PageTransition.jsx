import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, useOutlet } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

export default function PageTransition({ className = '' }) {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className={className}
        initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
        transition={{ duration: 0.45, ease }}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  )
}

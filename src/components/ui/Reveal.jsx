import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const presets = {
  up: {
    hidden: { opacity: 0, y: 42, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  down: {
    hidden: { opacity: 0, y: -28, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  left: {
    hidden: { opacity: 0, x: -48, filter: 'blur(10px)' },
    show: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  right: {
    hidden: { opacity: 0, x: 48, filter: 'blur(10px)' },
    show: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
    show: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
  duration = 0.75,
}) {
  return (
    <motion.div
      className={className}
      variants={presets[variant] || presets.up}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -8% 0px' }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className = '', delay = 0, stagger = 0.1 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', variant = 'up' }) {
  return (
    <motion.div className={className} variants={presets[variant] || presets.up} transition={{ duration: 0.7, ease }}>
      {children}
    </motion.div>
  )
}

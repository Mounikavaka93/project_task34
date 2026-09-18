import { motion, useReducedMotion } from 'framer-motion'

export default function SplitHeadline({ text, className = '', delay = 0.35 }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <h1 className={className}>{text}</h1>
  }

  return (
    <h1 className={className}>
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block pr-[0.22em]"
            initial={{ y: '115%', rotate: 8, opacity: 0 }}
            animate={{ y: '0%', rotate: 0, opacity: 1 }}
            transition={{
              duration: 0.78,
              delay: delay + index * 0.055,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}

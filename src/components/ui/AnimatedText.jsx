import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
}

const word = {
  hidden: { opacity: 0, y: '100%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AnimatedText({ text, as: Tag = 'span', className = '' }) {
  const words = text.split(' ')
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={`inline ${className}`}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span variants={word} className="inline-block">
            {w}
            {i !== words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

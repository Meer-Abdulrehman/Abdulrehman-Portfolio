import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../utils/animations'

export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light' }) {
  const isCenter = align === 'center'
  const isDark = tone === 'dark'
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mb-14 max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <p className={`eyebrow mb-4 ${isDark ? '!text-indigo-400' : ''}`}>{eyebrow}</p>
      )}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          isDark ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${isDark ? 'text-white/60' : 'text-ink-500'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

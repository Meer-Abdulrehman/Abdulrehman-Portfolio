import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'

export default function HeroBackground() {
  const reduced = usePrefersReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <motion.div
        className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl"
        animate={reduced ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-40 h-80 w-80 rounded-full bg-volt-400/10 blur-3xl"
        animate={reduced ? undefined : { x: [0, -20, 0], y: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

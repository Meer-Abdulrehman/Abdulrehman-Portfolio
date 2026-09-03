import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary:
    'bg-ink-900 text-canvas hover:bg-ink-700 shadow-soft border border-ink-700/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]',
  accent:
    'bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.75)] border border-indigo-400/30',
  outline:
    'bg-transparent text-ink-900 border border-line hover:border-indigo-500/50 hover:bg-indigo-500/5 shadow-sm',
  ghost: 'bg-transparent text-ink-900 hover:bg-surface2/80',
}

export default function Button({
  children,
  as = 'button',
  href,
  variant = 'primary',
  icon = false,
  className = '',
  ...props
}) {
  const Comp = as === 'a' ? motion.a : motion.button
  const extra = as === 'a' ? { href } : {}

  return (
    <Comp
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-bold tracking-tight whitespace-nowrap transition-all duration-300 ${variants[variant]} ${className}`}
      {...extra}
      {...props}
    >
      {/* Light Streak Sweep Effect on Hover */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {icon && (
        <ArrowRight
          size={15}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Comp>
  )
}

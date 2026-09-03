import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, as: Comp = motion.div, ...props }) {
  return (
    <Comp
      className={`rounded-2xl border border-line bg-canvas p-6 shadow-card ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-ink-900/10 hover:shadow-lift' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
}

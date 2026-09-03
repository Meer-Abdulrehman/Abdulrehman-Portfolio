import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsDesktop } from '../../hooks/useIsDesktop'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'

export default function CustomCursor() {
  const isDesktop = useIsDesktop()
  const reduced = usePrefersReducedMotion()
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  const active = isDesktop && !reduced

  useEffect(() => {
    if (!active) return

    document.body.classList.add('cursor-active')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const over = (e) => {
      setHovering(!!e.target.closest('a, button, input, textarea, [role="button"]'))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)

    return () => {
      document.body.classList.remove('cursor-active')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [active])

  if (!active) return null

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      animate={{ scale: hovering ? 2.4 : 1 }}
      transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500 mix-blend-difference"
    />
  )
}

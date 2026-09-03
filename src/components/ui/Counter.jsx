import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// Parses values like "10+", "1.5+", "100%", or non-numeric strings like "MERN"
export default function Counter({ value, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(value)

  const match = value.match(/^(\d+(\.\d+)?)(.*)$/)

  useEffect(() => {
    if (!inView) return
    if (!match) {
      setDisplay(value)
      return
    }
    const target = parseFloat(match[1])
    const suffix = match[3] || ''
    const isDecimal = match[1].includes('.')
    const duration = 1200
    const start = performance.now()

    let frame
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased
      setDisplay(`${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}

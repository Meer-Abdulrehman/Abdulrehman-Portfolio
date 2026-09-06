import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'
import { Code2, Server, Database, Cloud, Container, Cpu, Flame, Layers, Sparkles, Network } from 'lucide-react'

const orbitItems = [
  { label: 'React', icon: Code2, color: '#00D8FF', shadow: 'rgba(0, 216, 255, 0.35)' },
  { label: 'Node.js', icon: Server, color: '#10B981', shadow: 'rgba(16, 185, 129, 0.35)' },
  { label: 'TypeScript', icon: Cpu, color: '#3178C6', shadow: 'rgba(49, 120, 198, 0.35)' },
  { label: 'MongoDB', icon: Database, color: '#059669', shadow: 'rgba(5, 150, 105, 0.35)' },
  { label: 'PostgreSQL', icon: Database, color: '#336791', shadow: 'rgba(51, 103, 145, 0.35)' },
  { label: 'Next.js', icon: Flame, color: '#818CF8', shadow: 'rgba(129, 140, 248, 0.35)' },
  { label: 'System Design', icon: Network, color: '#EC4899', shadow: 'rgba(236, 72, 153, 0.35)' },
  { label: 'Redis Cache', icon: Cpu, color: '#DC382D', shadow: 'rgba(220, 56, 45, 0.35)' },
  { label: 'AI Automations', icon: Sparkles, color: '#10B981', shadow: 'rgba(16, 185, 129, 0.35)' },
  { label: 'Docker & K8s', icon: Container, color: '#0ea5e9', shadow: 'rgba(14, 165, 233, 0.35)' },
  { label: 'AWS Cloud', icon: Cloud, color: '#F59E0B', shadow: 'rgba(245, 158, 11, 0.35)' },
  { label: 'Architecture', icon: Layers, color: '#A855F7', shadow: 'rgba(168, 85, 247, 0.35)' },
]

const RX = 175 // Horizontal Radius
const RY = 75  // Vertical Radius (creates 3D tilt perspective)
const STEPS = 36

export default function AboutVisual() {
  const reduced = usePrefersReducedMotion()
  const wrapRef = useRef(null)

  // 3D Parallax Mouse Tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 22 })
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 22 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['18deg', '-18deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-18deg', '18deg'])

  const handleMove = (e) => {
    if (reduced || !wrapRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center py-4 scale-[0.8] xs:scale-90 sm:scale-100 transition-transform duration-300"
      aria-hidden="true"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative flex h-full w-full items-center justify-center [perspective:1000px]"
      >
        {/* Tilted 3D Orbit Ring SVG */}
        <svg
          className="absolute inset-0 h-full w-full overflow-visible pointer-events-none"
          viewBox="0 0 460 460"
        >
          <defs>
            <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Outer Orbit Ellipse */}
          <ellipse
            cx="230"
            cy="230"
            rx={RX}
            ry={RY}
            fill="none"
            stroke="url(#orbitGlow)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="opacity-70"
          />

          {/* Inner Accent Ring */}
          <ellipse
            cx="230"
            cy="230"
            rx={RX * 0.65}
            ry={RY * 0.65}
            fill="none"
            stroke="rgb(var(--line))"
            strokeWidth="1"
            className="opacity-40"
          />
        </svg>

        {/* Center 3D Floating Glass Core */}
        <motion.div
          animate={reduced ? undefined : { y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-20 flex h-44 w-44 flex-col items-center justify-center gap-3 rounded-3xl border border-line bg-surface/80 p-5 shadow-card backdrop-blur-md transition-all duration-300"
          style={{ transform: 'translateZ(30px)' }}
        >
          {/* Inner Glowing Badge */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]">
            <span className="font-display text-xl font-bold tracking-tight">&lt;/&gt;</span>
          </div>

          <div className="text-center">
            <h3 className="font-display text-sm font-semibold tracking-wide text-ink-900">
              SOFTWARE
            </h3>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-indigo-500 font-medium">
              Engineer
            </p>
          </div>

          {/* Status Indicator */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Active
          </div>
        </motion.div>

        {/* Orbiting 3D Tech Nodes */}
        {orbitItems.map((item, i) => {
          const keyframesX = []
          const keyframesY = []
          const keyframesScale = []
          const keyframesOpacity = []
          const keyframesZIndex = []

          for (let step = 0; step <= STEPS; step++) {
            const angleDeg = i * (360 / orbitItems.length) + (step / STEPS) * 360
            const rad = (angleDeg * Math.PI) / 180
            const xVal = Math.cos(rad) * RX
            const yVal = Math.sin(rad) * RY
            const depth = Math.sin(rad) // -1 (back) to +1 (front)

            keyframesX.push(xVal)
            keyframesY.push(yVal)
            keyframesScale.push(0.8 + (depth + 1) * 0.15) // 0.8 to 1.1
            keyframesOpacity.push(0.55 + (depth + 1) * 0.225) // 0.55 to 1.0
            keyframesZIndex.push(depth > 0 ? 30 : 10) // 30 passes in front of center card (20), 10 passes behind
          }

          const IconComponent = item.icon

          return (
            <motion.div
              key={item.label}
              className="absolute left-1/2 top-1/2 -ml-14 -mt-5 flex items-center gap-2 rounded-full border border-line bg-surface/90 px-3 py-1.5 shadow-soft backdrop-blur-sm transition-colors"
              style={{
                boxShadow: `0 4px 15px ${item.shadow}`,
              }}
              animate={
                reduced
                  ? undefined
                  : {
                      x: keyframesX,
                      y: keyframesY,
                      scale: keyframesScale,
                      opacity: keyframesOpacity,
                      zIndex: keyframesZIndex,
                    }
              }
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <IconComponent size={14} style={{ color: item.color }} />
              <span className="font-mono text-[11px] font-semibold text-ink-900 whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

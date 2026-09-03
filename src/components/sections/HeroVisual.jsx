import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'

// A small "system architecture" graph: nodes represent services/layers of a
// full-stack app (client, api, auth, db, cache, cloud), connected by edges
// that draw themselves in on load. Doubles as the site's signature motif.
const nodes = [
  { id: 'client', label: 'Client', x: 60, y: 60, tone: 'indigo' },
  { id: 'api', label: 'API', x: 220, y: 40, tone: 'ink' },
  { id: 'auth', label: 'Auth', x: 340, y: 110, tone: 'rose' },
  { id: 'db', label: 'DB', x: 260, y: 220, tone: 'ink' },
  { id: 'cache', label: 'Cache', x: 100, y: 220, tone: 'emerald' },
  { id: 'cloud', label: 'Cloud', x: 40, y: 150, tone: 'sky' },
]

const edges = [
  ['client', 'api'],
  ['api', 'auth'],
  ['api', 'db'],
  ['api', 'cache'],
  ['client', 'cloud'],
  ['cloud', 'db'],
]

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]))

const toneFill = {
  indigo: '#4F46E5',
  volt: '#5B5FEF',
  ink: 'rgb(var(--ink-900))',
  rose: '#F43F5E',
  emerald: '#10B981',
  sky: '#0EA5E9',
}

export default function HeroVisual() {
  const reduced = usePrefersReducedMotion()
  const wrapRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg'])

  const handleMove = (e) => {
    if (reduced) return
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
      className="relative mx-auto aspect-square w-full max-w-[440px]"
      aria-hidden="true"
    >
      {/* soft glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-indigo-500/10 blur-3xl" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full w-full [perspective:1200px]"
      >
        <motion.svg
          viewBox="0 0 400 280"
          className="h-full w-full overflow-visible"
          animate={reduced ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* card frame */}
          <rect
            x="10"
            y="10"
            width="380"
            height="260"
            rx="24"
            fill="rgb(var(--surface))"
            stroke="rgb(var(--line))"
            strokeWidth="1.5"
            style={{ transition: 'fill 0.3s ease, stroke 0.3s ease' }}
          />

          {/* edges */}
          {edges.map(([a, b], i) => {
            const from = nodeMap[a]
            const to = nodeMap[b]
            const length = Math.hypot(to.x - from.x, to.y - from.y)
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="rgb(var(--ink-300))"
                strokeWidth="1.5"
                strokeDasharray={length}
                initial={{ strokeDashoffset: length }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: 'easeInOut' }}
                style={{ transition: 'stroke 0.3s ease' }}
              />
            )
          })}

          {/* traveling pulse along all edges */}
          {!reduced && (
            <motion.circle
              r="3.5"
              fill="#4F46E5"
              style={{ filter: 'drop-shadow(0 0 6px rgba(79, 70, 229, 0.4))' }}
              initial={{
                cx: nodeMap.client.x,
                cy: nodeMap.client.y
              }}
              animate={{
                cx: [
                  nodeMap.client.x,
                  nodeMap.cloud.x,
                  nodeMap.db.x,
                  nodeMap.api.x,
                  nodeMap.auth.x,
                  nodeMap.api.x,
                  nodeMap.cache.x,
                  nodeMap.api.x,
                  nodeMap.client.x
                ],
                cy: [
                  nodeMap.client.y,
                  nodeMap.cloud.y,
                  nodeMap.db.y,
                  nodeMap.api.y,
                  nodeMap.auth.y,
                  nodeMap.api.y,
                  nodeMap.cache.y,
                  nodeMap.api.y,
                  nodeMap.client.y
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
          )}

          {/* nodes */}
          {nodes.map((n, i) => (
            <motion.g
              key={n.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.circle
                cx={n.x}
                r="18"
                fill="rgb(var(--surface))"
                stroke={toneFill[n.tone]}
                strokeWidth="2.5"
                initial={{ cy: n.y }}
                animate={reduced ? undefined : { cy: [n.y, n.y - 5, n.y] }}
                transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ 
                  transition: 'fill 0.3s ease, stroke 0.3s ease',
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                }}
              />
              <circle cx={n.x} cy={n.y} r="4" fill={toneFill[n.tone]} style={{ transition: 'fill 0.3s ease', filter: 'drop-shadow(0 0 4px currentColor)' }} color={toneFill[n.tone]} />
              <text
                x={n.x}
                y={n.y + 32}
                textAnchor="middle"
                className="font-mono"
                fontSize="10"
                fill="rgb(var(--ink-700))"
                style={{ transition: 'fill 0.3s ease' }}
              >
                {n.label}
              </text>
            </motion.g>
          ))}
        </motion.svg>
      </motion.div>
    </div>
  )
}

 import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import Badge from '../ui/Badge'
import { fadeUp } from '../../utils/animations'

export default function ProjectCard({ project }) {
  const ref = useRef(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg'])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-canvas shadow-card transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lift"
    >
      {/* Top Media / Thumbnail Section */}
      <div 
        className="relative h-44 overflow-hidden border-b border-line/60 bg-surface"
        style={{ transform: 'translateZ(20px)' }}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />

        {project.image ? (
          <div className="relative h-full w-full overflow-hidden group/img">
            {/* Top Browser Bar */}
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-line/40 bg-surface/90 px-3 py-1.5 backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500/80" />
                <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                <span className="h-2 w-2 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-[9px] text-ink-400 truncate max-w-[150px]">
                {project.name.toLowerCase().replace(/\s+/g, '')}.app
              </span>
            </div>
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover object-top pt-6 transition-transform duration-500 group-hover/img:scale-105"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="font-display text-4xl font-bold text-ink-300/60 transition-colors group-hover:text-indigo-400/80"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.08 }}
            >
              {project.name.replace(/[\[\]]/g, '').charAt(0)}
            </motion.span>
          </div>
        )}
      </div>

      {/* Card Content Section */}
      <div 
        className="flex flex-1 flex-col justify-between p-6"
        style={{ transform: 'translateZ(30px)' }}
      >
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-bold tracking-tight text-ink-900 transition-colors group-hover:text-indigo-400">
              {project.name}
            </h3>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-1 text-ink-400 transition-colors hover:bg-indigo-500/10 hover:text-indigo-400"
              title="Open Live Demo"
            >
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <p className="mt-2.5 text-xs leading-relaxed text-ink-700 font-normal">
            {project.description}
          </p>

          <p className="mt-3 text-[11px] leading-relaxed text-ink-500">
            <span className="font-semibold text-ink-900">Solves:</span> {project.problem}
          </p>

          {/* Tech Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge key={t} className="!py-0.5 !px-2 font-mono text-[10px]">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-6 flex items-center gap-3 border-t border-line/60 pt-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-soft transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/25 active:scale-95"
          >
            <ArrowUpRight size={14} /> Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-line/80 bg-surface px-4 py-2 text-xs font-bold text-ink-900 transition-all duration-200 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400 active:scale-95"
          >
            <Github size={14} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

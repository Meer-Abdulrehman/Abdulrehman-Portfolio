import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { featuredProject } from '../../data/projects'
import careerImg from '../../data/projectsImges/career .png'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { fadeUp, viewportOnce } from '../../utils/animations'

export default function ProjectShowcase() {
  return (
    <div className="mb-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        whileHover={{ y: -4 }}
        transition={{ ...fadeUp.show.transition, type: 'spring', stiffness: 200, damping: 22 }}
        className="group grid overflow-hidden rounded-3xl border border-line bg-canvas shadow-card transition-shadow duration-300 hover:shadow-lift lg:grid-cols-2"
      >
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <Badge tone="dark" className="mb-5 w-fit font-semibold shadow-sm">
            ⚡ Flagship Project
          </Badge>
          <h3 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
            {featuredProject.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-indigo-500">{featuredProject.tagline}</p>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            {featuredProject.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {featuredProject.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href={featuredProject.demo} target="_blank" rel="noopener noreferrer" variant="accent">
              Live Demo
            </Button>
            <Button as="a" href={featuredProject.github} target="_blank" rel="noopener noreferrer" variant="outline" icon={false}>
              <span className="inline-flex items-center gap-2">
                <Github size={16} /> Source Code
              </span>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden bg-surface p-6 sm:p-8 flex items-center justify-center">
          <div className="absolute inset-0 grid-bg opacity-70" />
          <motion.div
            className="relative h-full w-full flex items-center justify-center"
            whileHover="hover"
          >
            <motion.div
              variants={{ hover: { rotateX: -2, rotateY: 4, scale: 1.02 } }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="w-full overflow-hidden rounded-2xl border border-line/80 bg-canvas shadow-2xl transition-all duration-300"
            >
              {/* Browser Window Header Bar */}
              <div className="flex items-center justify-between border-b border-line/60 bg-surface/90 px-4 py-2.5 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-line/60 bg-canvas/90 px-3 py-1 text-[11px] font-mono text-ink-500 shadow-inner">
                  <ExternalLink size={12} className="text-indigo-400" />
                  <span className="truncate max-w-[180px] sm:max-w-[240px]">
                    https://career-pulse-drab.vercel.app/
                  </span>
                </div>
              </div>

              {/* Real Project Screenshot */}
              <div className="relative overflow-hidden bg-surface group/img">
                <img
                  src={careerImg}
                  alt="CareerPulse Project Screenshot"
                  className="w-full h-auto max-h-[340px] object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Cpu,
  Terminal,
  Database,
  Sparkles,
  Layers,
  Flame,
  Smartphone,
  Server,
  Network,
  Workflow,
  Activity,
  Mail,
  Cloud,
  Container,
  Zap,
  GitBranch,
  Github,
  Send,
  CreditCard,
  Image,
  ShieldCheck,
  Lock,
  Key,
  Search,
} from 'lucide-react'
import { allSkills, skillCategories } from '../../data/skills'
import SectionHeading from '../ui/SectionHeading'
import { fadeUp, viewportOnce } from '../../utils/animations'

const iconMap = {
  Code2,
  Cpu,
  Terminal,
  Database,
  Sparkles,
  Layers,
  Flame,
  Smartphone,
  Server,
  Network,
  Workflow,
  Activity,
  Mail,
  Cloud,
  Container,
  Zap,
  GitBranch,
  Github,
  Send,
  CreditCard,
  Image,
  ShieldCheck,
  Lock,
  Key,
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Core Technologies"
          title="Tools, Frameworks & Engineering Ecosystem."
          description="A comprehensive inventory of programming languages, full-stack frameworks, cloud infrastructure, and architectural concepts I use to engineer production-ready software."
        />

        {/* Core Technologies Pill Cloud Container (Matching Screenshot Style) */}
        <motion.div
          layout
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-wrap gap-3 rounded-3xl border border-line bg-canvas p-6 shadow-card sm:p-8"
        >
          <AnimatePresence mode="popLayout">
            {allSkills.map((skill) => {
              const IconComponent = iconMap[skill.iconType] || Code2

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="group flex cursor-default items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 shadow-soft transition-all duration-200 hover:border-indigo-500/40 hover:bg-surface2 hover:shadow-lift"
                >
                  <span
                    className="flex h-6.5 w-6.5 flex-none items-center justify-center rounded-full border border-line/80 bg-surface2/90 p-1 shadow-inner transition-transform group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    <IconComponent size={13} />
                  </span>
                  <span className="font-display text-xs font-semibold text-ink-900 transition-colors group-hover:text-indigo-500">
                    {skill.name}
                  </span>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

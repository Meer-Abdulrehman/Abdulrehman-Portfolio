import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Layers } from 'lucide-react'
import { projects } from '../../data/projects'
import SectionHeading from '../ui/SectionHeading'
import ProjectShowcase from './ProjectShowcase'
import ProjectCard from './ProjectCard'

const categories = ['All', 'Frontend', 'Backend', 'Fullstack', 'Mobile']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = projects.filter((project) =>
    activeCategory === 'All' ? true : project.category === activeCategory
  )

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="section-pad bg-surface overflow-hidden">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work worth a closer look."
          description="A mix of production systems and self-directed builds — each one solving a real, specific problem."
        />

        <ProjectShowcase />

        <div className="my-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setShowAll(false)
              }}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === category ? 'text-canvas' : 'text-ink-500 hover:text-ink-900'
              }`}
            >
              {activeCategory === category && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-ink-900"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{category}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, i) => (
              <motion.div
                key={project.name || i}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Toggle Button */}
        {filteredProjects.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-canvas px-8 py-3.5 text-sm font-bold text-ink-900 shadow-card transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-600/10 hover:text-indigo-400 hover:shadow-lift active:scale-95"
            >
              <Layers size={18} className="text-indigo-500 transition-transform duration-300 group-hover:rotate-12" />
              <span>{showAll ? 'Show Less Projects' : 'View All Projects'}</span>
              {showAll ? (
                <ChevronUp size={18} className="text-ink-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown size={18} className="text-ink-400 transition-transform duration-300 group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

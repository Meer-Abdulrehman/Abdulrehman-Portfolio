import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Cpu, Users, Compass, Zap, Sparkles, CheckCircle2, Layers3 } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'
import SectionHeading from '../ui/SectionHeading'
import AboutVisual from './AboutVisual'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations'

const iconMap = {
  Trophy,
  Cpu,
  Users,
  Compass,
  Zap,
}

export default function About() {
  const [activeTab, setActiveTab] = useState('track-record')

  const currentPillar = personalInfo.aboutPillars.find((p) => p.id === activeTab) || personalInfo.aboutPillars[0]

  return (
    <section id="about" className="section-pad bg-canvas">
      <div className="container-page">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering that ships, not just impresses."
          description="From hackathon victories and complex systems to AI prediction engines and technical mentorship."
        />

        {/* Top Intro Spotlight Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12 overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:border-indigo-500/40 sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4 lg:max-w-2xl">
              <p className="text-base leading-relaxed text-ink-900 sm:text-lg">
                <span className="font-bold text-indigo-500">Hi, I&rsquo;m Abdulrehman</span>, a Full-Stack Software Engineer who engineers fast, reliable products that solve real business problems. I build high-performance, user-focused platforms using{' '}
                <span className="font-semibold text-ink-900 underline decoration-indigo-500/40">React/Next.js, Node.js, MongoDB, and TypeScript</span>, and have built{' '}
                <span className="font-bold text-indigo-500">10+ production-ready projects</span>.
              </p>

              {/* What Sets Me Apart Box */}
              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4 sm:p-5">
                <p className="text-sm leading-relaxed text-ink-700">
                  <span className="font-bold text-indigo-500">What sets me apart:</span> I don&rsquo;t just code, I build solutions. From a DRM-protected learning platform that prevents video piracy to a multi-vendor marketplace with complex payments and hackathon wins under tight deadlines, I deliver products that work in the real world.
                </p>
              </div>
            </div>

            {/* Currently Focused Badge Card */}
            <div className="flex flex-none items-start gap-3.5 rounded-2xl border border-line bg-canvas p-4 shadow-soft lg:max-w-xs">
              <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-500 shadow-soft">
                <Layers3 size={18} />
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-indigo-500">
                    Currently Focused
                  </p>
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
                </div>
                <p className="mt-1 text-xs font-medium leading-relaxed text-ink-900">
                  {personalInfo.currentlyFocused}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Story Pillars + 3D Orbit Visual Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Interactive Story Pillars */}
          <div className="lg:col-span-7">
            {/* Tab Navigation Buttons */}
            <div className="mb-6 flex flex-wrap gap-2">
              {personalInfo.aboutPillars.map((pillar) => {
                const IconComponent = iconMap[pillar.icon] || Sparkles
                const isActive = activeTab === pillar.id

                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(pillar.id)}
                    className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? 'border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 shadow-soft'
                        : 'border border-line bg-surface text-ink-500 hover:border-ink-400 hover:text-ink-900'
                    }`}
                  >
                    <IconComponent size={14} />
                    <span>{pillar.title}</span>
                  </button>
                )
              })}
            </div>

            {/* Active Pillar Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
                    {(() => {
                      const Icon = iconMap[currentPillar.icon] || Sparkles
                      return <Icon size={20} />
                    })()}
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink-900">
                    {currentPillar.title}
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  {currentPillar.content.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-1 flex-none text-indigo-500" />
                      <p className="text-sm leading-relaxed text-ink-700">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: 3D Solar Orbit Visual */}
          <div className="flex justify-center lg:col-span-5">
            <AboutVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

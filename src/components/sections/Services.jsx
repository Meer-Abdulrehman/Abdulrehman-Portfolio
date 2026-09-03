import { motion } from 'framer-motion'
import { ArrowUpRight, MessageSquare } from 'lucide-react'
import { services } from '../../data/services'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations'

export default function Services() {
  return (
    <section id="services" className="section-pad bg-canvas relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/3 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="container-page relative z-10">
        <SectionHeading
          eyebrow="Services & Capabilities"
          title="Engineering Solutions Built to Scale."
          description="For founders and engineering teams who need a developer to own features end-to-end — from UI design to cloud backend architecture."
        />

        {/* Compact & Sleek Bento Grid */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const idxStr = `0${index + 1}`

            return (
              <motion.a
                key={service.id}
                href="#contact"
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_12px_35px_rgba(99,102,241,0.18)]"
              >
                {/* Top Border Glow Beam */}
                <div
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: service.accentColor }}
                />

                <div>
                  {/* Top Bar: Icon + Index Badge + Arrow */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-line/80 bg-canvas shadow-soft transition-transform duration-300 group-hover:scale-110"
                        style={{ color: service.accentColor }}
                      >
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-xs font-bold tracking-widest text-ink-400 group-hover:text-ink-900">
                        {idxStr}
                      </span>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-line/60 bg-canvas text-ink-400 transition-all duration-300 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 group-hover:text-indigo-400">
                      <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink-900">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-xs leading-relaxed text-ink-700 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Tech Pills Row */}
                <div className="mt-5 border-t border-line/60 pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line/80 bg-canvas px-2 py-0.5 font-mono text-[10px] font-medium text-ink-700 transition-colors group-hover:border-indigo-500/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Bottom Callout Banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-line bg-surface p-6 text-center shadow-card sm:p-7 md:flex-row md:text-left"
        >
          <div className="space-y-1">
            <h4 className="font-display text-base font-bold text-ink-900">
              Need a custom engineering solution or MVP?
            </h4>
            <p className="text-xs text-ink-700">
              Whether you need full-stack development, AI workflows, or cloud setup, let&rsquo;s discuss your project goals.
            </p>
          </div>

          <Button as="a" href="#contact" variant="accent" icon={true} className="flex-none !py-3 !px-6 text-xs font-bold">
            <MessageSquare size={15} />
            Start a Conversation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

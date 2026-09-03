import { motion } from 'framer-motion'
import { whyWorkWithMe } from '../../data/services'
import SectionHeading from '../ui/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations'

export default function WhyWorkWithMe() {
  return (
    <section className="section-pad bg-surface border-y border-line/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="A partner in the build, not just a pair of hands."
          description="I don't just write code — I build production systems focused on scalability, high performance, and real business outcomes."
        />

        {/* Clean & Attention Grabbing Grid */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyWorkWithMe.map((item) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.id || item.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-line bg-canvas p-6 shadow-card transition-all duration-300 hover:border-indigo-500/40 hover:shadow-lift"
              >
                <div>
                  {/* Icon & Accent Tag */}
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-line/80 bg-surface shadow-soft transition-transform duration-300 group-hover:scale-105 group-hover:border-indigo-500/30"
                      style={{ color: item.accentColor }}
                    >
                      <Icon size={20} />
                    </div>

                    <span className="font-mono text-[10px] font-semibold text-ink-400 group-hover:text-indigo-400">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base font-bold text-ink-900 transition-colors group-hover:text-indigo-400">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-ink-700 font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

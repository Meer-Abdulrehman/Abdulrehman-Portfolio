import { motion } from 'framer-motion'
import { stats } from '../../data/personalInfo'
import Counter from '../ui/Counter'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations'

export default function Stats() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="container-page">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 divide-x divide-line lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="px-4 py-10 text-center sm:py-12">
              <div className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
                <Counter value={s.value} />
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

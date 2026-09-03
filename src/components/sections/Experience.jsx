import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { experience } from '../../data/experience'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import { fadeUp, viewportOnce } from '../../utils/animations'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 60%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work happened."
          description="A timeline of roles, responsibilities and the technologies behind them."
        />

        <div ref={ref} className="relative">
          {/* base line */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-line sm:left-[9px]" />
          {/* animated draw-in line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-indigo-500 to-volt-500 sm:left-[9px]"
          />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative pl-8 sm:pl-10"
              >
                <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-indigo-500 bg-canvas sm:h-[18px] sm:w-[18px]" />

                <div className="rounded-2xl border border-line bg-canvas p-6 shadow-card transition-shadow hover:shadow-lift sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink-900">
                        {item.position}
                      </h3>
                      <p className="text-sm font-medium text-indigo-600">{item.company}</p>
                    </div>
                    <Badge tone="neutral">{item.duration}</Badge>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-500">{item.summary}</p>

                  <ul className="mt-4 space-y-1.5">
                    {item.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-ink-500">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ink-300" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {item.achievements?.length > 0 && (
                    <div className="mt-4 space-y-1.5">
                      {item.achievements.map((a, idx) => (
                        <p key={idx} className="text-sm font-medium text-ink-700">
                          ↳ {a}
                        </p>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <Badge key={t} tone="indigo">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

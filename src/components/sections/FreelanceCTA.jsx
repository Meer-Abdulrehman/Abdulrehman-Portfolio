import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { fadeUp, viewportOnce } from '../../utils/animations'

export default function FreelanceCTA() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] px-6 py-16 text-center sm:px-16 sm:py-20 shadow-lift"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-volt-500/20 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Have an idea? Let&rsquo;s turn it into a product.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
              Whether you&rsquo;re validating an MVP, scaling an existing application, or building
              something from scratch, let&rsquo;s build it together.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button as="a" href="#contact" variant="accent">
                Start a Project
              </Button>
              <Button as="a" href="#projects" variant="outline" className="!border-white/20 !text-white hover:!border-white">
                View My Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

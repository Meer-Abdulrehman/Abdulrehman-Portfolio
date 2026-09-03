import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'
import Button from '../ui/Button'
import AnimatedText from '../ui/AnimatedText'
import HeroBackground from './HeroBackground'
import HeroVisual from './HeroVisual'
import { fadeUp, staggerContainer } from '../../utils/animations'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <HeroBackground />
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 shadow-soft">
              <Sparkles size={14} className="text-indigo-500" />
              <span className="font-mono text-[11px] tracking-[0.14em] text-ink-500">
                {personalInfo.heroBadge}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
              <AnimatedText text="I Build Scalable" />{' '}
              <AnimatedText text="Digital Products That" />{' '}
              <span className="text-gradient">
                <AnimatedText text="Actually Work." />
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg leading-relaxed text-ink-700">
              {personalInfo.heroSubtext}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
              <Button as="a" href="#projects" variant="accent">
                View My Work
              </Button>
              <Button as="a" href="#contact" variant="outline">
                Let&rsquo;s Work Together
              </Button>
            </motion.div>

            <motion.a
              variants={fadeUp}
              href={personalInfo.resumeUrl}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-ink-900"
            >
              <Download size={15} />
              Download Resume
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

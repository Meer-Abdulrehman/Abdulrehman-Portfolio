import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'
import Button from '../ui/Button'
import AnimatedText from '../ui/AnimatedText'
import HeroBackground from './HeroBackground'
import HeroVisual from './HeroVisual'
import { fadeUp, staggerContainer } from '../../utils/animations'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-14 pt-28 sm:pb-20 sm:pt-40 lg:pt-44">
      <HeroBackground />
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="mb-5 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3.5 py-1.5 shadow-soft">
              <span className="font-mono text-[10px] tracking-[0.14em] text-ink-500 sm:text-[11px]">
                {personalInfo.heroBadge}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
              <AnimatedText text="I Build Scalable" />{' '}
              <AnimatedText text="Digital Products That" />{' '}
              <span className="text-gradient">
                <AnimatedText text="Actually Work." />
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 max-w-lg text-sm leading-relaxed text-ink-700 sm:mt-6 sm:text-lg">
              {personalInfo.heroSubtext}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
              <Button as="a" href="#projects" variant="accent" className="!px-7 !py-3.5 text-sm font-bold shadow-lg">
                <span>View My Work</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button as="a" href="#contact" variant="outline" className="!px-7 !py-3.5 text-sm font-bold">
                Let&rsquo;s Work Together
              </Button>
            </motion.div>

            <motion.a
              variants={fadeUp}
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Abdulrehman_Resume.pdf"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="group mt-6 inline-flex items-center gap-2.5 rounded-full border border-line/60 bg-surface/50 px-4 py-2 font-mono text-xs font-semibold text-ink-700 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:bg-surface hover:text-indigo-500 hover:shadow-card"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500 transition-colors group-hover:bg-indigo-500 group-hover:text-white">
                <Download size={12} />
              </div>
              <span>Download Resume</span>
              <ArrowRight size={13} className="text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-indigo-500" />
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

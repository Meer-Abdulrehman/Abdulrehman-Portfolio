import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Download, Sun, Moon, Sparkles, ArrowUpRight } from 'lucide-react'
import { navLinks } from '../../data/nav'
import { personalInfo } from '../../data/personalInfo'
import Button from '../ui/Button'
import { useTheme } from '../ThemeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2.5 sm:py-3' : 'py-4 sm:py-6'
      }`}
    >
      <div className="container-page">
        {/* Floating Glassmorphic Container */}
        <div
          className={`relative flex items-center justify-between rounded-full px-3.5 py-2 transition-all duration-500 sm:px-5 ${
            scrolled
              ? 'border border-line/80 bg-canvas/80 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl'
              : 'border border-line/40 bg-surface/60 shadow-soft backdrop-blur-lg'
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 font-display text-base font-bold tracking-tight sm:text-lg"
          >
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <span className="font-display text-sm font-extrabold tracking-widest">
                {personalInfo.name.charAt(0)}
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity hover:opacity-100" />
            </div>
            <span className="hidden text-ink-900 font-semibold sm:inline-block">
              {personalInfo.name}
            </span>
          </motion.a>

          {/* Desktop Navigation Items */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold tracking-wide transition-colors ${
                    isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full border border-line/60 bg-surface shadow-soft"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ rotate: 15, scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-700 shadow-soft transition-all duration-300 hover:border-indigo-500/40 hover:text-indigo-500"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-indigo-500" />}
            </motion.button>

            {/* CTA Button */}
            <Button as="a" href="#contact" variant="accent" className="!py-2 !px-4 text-xs font-bold">
              Let&rsquo;s Work Together
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-700 shadow-soft"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-indigo-500" />}
            </motion.button>

            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-900 shadow-soft"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="container-page overflow-hidden lg:hidden"
          >
            <div className="mt-3 flex flex-col gap-1.5 rounded-3xl border border-line/80 bg-canvas/95 p-5 shadow-2xl backdrop-blur-xl">
              {navLinks.map((link, i) => {
                const isActive = active === link.href
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 font-display text-sm font-semibold transition-all ${
                      isActive
                        ? 'border border-indigo-500/20 bg-indigo-500/10 text-indigo-500'
                        : 'text-ink-700 hover:bg-surface hover:text-ink-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <Sparkles size={14} className="text-indigo-500" />}
                  </motion.a>
                )
              })}

              <div className="mt-3 border-t border-line/80 pt-4">
                <Button as="a" href="#contact" variant="accent" onClick={() => setOpen(false)} className="w-full justify-center !py-3 text-sm font-bold">
                  Let&rsquo;s Work Together
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

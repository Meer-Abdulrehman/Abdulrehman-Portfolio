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

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    setActive(href)
    const targetEl = document.querySelector(href)
    if (targetEl) {
      const topOffset = targetEl.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: topOffset, behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-3 sm:py-4 pointer-events-none">
      <div className="container-page pointer-events-auto">
        {/* Floating Glassmorphic Container */}
        <div
          className={`relative flex items-center justify-between rounded-full px-3.5 py-2 transition-colors transition-shadow duration-300 sm:px-5 ${
            scrolled
              ? 'border border-line/80 bg-canvas/85 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl'
              : 'border border-line/40 bg-surface/70 shadow-soft backdrop-blur-lg'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 font-display text-base font-bold tracking-tight sm:text-lg"
          >
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <span className="font-display text-sm font-extrabold tracking-widest">
                {personalInfo.name.charAt(0)}
              </span>
            </div>
            <span className="hidden text-ink-900 font-semibold sm:inline-block">
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Navigation Items */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
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
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-700 shadow-soft transition-colors duration-200 hover:border-indigo-500/40 hover:text-indigo-500"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-indigo-500" />}
            </button>

            {/* CTA Button */}
            <Button as="a" href="#contact" onClick={(e) => handleNavClick(e, '#contact')} variant="accent" className="!py-2 !px-4 text-xs font-bold">
              Let&rsquo;s Work Together
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-700 shadow-soft"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-indigo-500" />}
            </button>

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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="container-page overflow-hidden lg:hidden pointer-events-auto"
          >
            <div className="mt-2.5 flex flex-col gap-1.5 rounded-3xl border border-line/80 bg-canvas/95 p-5 shadow-2xl backdrop-blur-xl">
              {navLinks.map((link, i) => {
                const isActive = active === link.href
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 font-display text-sm font-semibold transition-colors ${
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
                <Button as="a" href="#contact" variant="accent" onClick={(e) => handleNavClick(e, '#contact')} className="w-full justify-center !py-3 text-sm font-bold">
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

import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { personalInfo } from '../../data/personalInfo'
import { navLinks } from '../../data/nav'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="font-display text-xl font-semibold tracking-tight text-ink-900">
              {personalInfo.name}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-500">
              Software Engineer building scalable digital products.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <FooterIcon icon={Github} href={personalInfo.social.github} label="GitHub" />
              <FooterIcon icon={Linkedin} href={personalInfo.social.linkedin} label="LinkedIn" />
              <FooterIcon icon={Mail} href={`mailto:${personalInfo.email}`} label="Email" />
              <FooterIcon icon={FileText} href={personalInfo.resumeUrl} label="Resume" />
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-500 hover:text-ink-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">Get in touch</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-500">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-400">Built with React, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterIcon({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-500 transition-colors hover:border-ink-900 hover:text-ink-900"
    >
      <Icon size={15} />
    </a>
  )
}

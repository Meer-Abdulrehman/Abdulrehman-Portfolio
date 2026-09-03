# Devfolio — Premium Animated Developer Portfolio

A light-themed, highly animated personal portfolio built with React, Vite, Tailwind CSS
and Framer Motion. Built for job applications and freelance client acquisition.

## Stack

- React 18 + Vite
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- Framer Motion (page-load, scroll and hover animations)
- Lucide Icons
- No 3D dependency — the hero visual is a hand-built animated SVG "system
  architecture graph" (client → API → auth → DB → cache → cloud), which stays
  lightweight and on-brand for a full-stack engineer without the performance
  cost of a Three.js scene.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Customizing your content

All personal content lives in `src/data/` — you never need to touch a
component file to update your info:

| File | What it controls |
|---|---|
| `src/data/personalInfo.js` | Name, contact info, hero copy, about paragraphs, stats |
| `src/data/nav.js` | Navbar links |
| `src/data/skills.js` | Skills grouped by category |
| `src/data/experience.js` | Work experience timeline |
| `src/data/projects.js` | Featured project + project grid |
| `src/data/services.js` | Freelance services + "Why work with me" points |

Search the project for `[YOUR ...]` placeholders — every one needs a real
value before you ship:

```bash
grep -rn "\[YOUR" src/
```

Replace `public/og-cover.png` with a real 1200×630 social preview image, and
update `og:image` / `twitter:image` paths in `index.html` if you rename it.
Also update `<link rel="canonical">` and `og:url` in `index.html` with your
real domain once deployed.

## Structure

```
src/
  components/
    layout/      Navbar, Footer, CustomCursor
    sections/    Hero, About, Skills, Experience, Projects, Services, Contact, etc.
    ui/          Button, Badge, Card, SectionHeading, AnimatedText, Counter
  data/          All editable content (see table above)
  hooks/         useReducedMotion, useIsDesktop
  pages/         Home.jsx composes all sections
  utils/         animations.js — shared Framer Motion variants
```

## Notes

- The contact form validates on the client only — no backend is wired up.
  Point `handleSubmit` in `src/components/sections/Contact.jsx` at your API
  or a form service (Formspree, Resend, etc.) when ready.
- Respects `prefers-reduced-motion` throughout (custom cursor, orbiting
  badges, background blobs and the hero graph all disable their motion).
- The custom cursor only activates on devices with a fine pointer at
  `lg` breakpoint and above — it never renders on mobile/touch.

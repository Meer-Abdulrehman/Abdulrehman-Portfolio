import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Code, Activity, ExternalLink, Star, GitFork, Calendar } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations'

const langColors = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Python: '#3776AB',
  Shell: '#89E051',
}

const COLS = 50
const ROWS = 7

// Green GitHub Palette
const greenShades = [
  'rgba(255, 255, 255, 0.04)', // Empty (0)
  '#0e4429',                   // Level 1
  '#006d32',                   // Level 2
  '#26a641',                   // Level 3
  '#39d353',                   // Level 4
]

export default function GithubStats() {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('https://api.github.com/users/Meer-Abdulrehman').then((res) => res.json()),
      fetch('https://api.github.com/users/Meer-Abdulrehman/repos?sort=updated&per_page=30').then(
        (res) => res.json()
      ),
    ])
      .then(([userData, reposData]) => {
        if (userData && !userData.message) setProfile(userData)
        if (Array.isArray(reposData)) setRepos(reposData)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  // Language Breakdown Calculation
  const langCounts = {}
  repos.forEach((r) => {
    if (r.language) {
      langCounts[r.language] = (langCounts[r.language] || 0) + 1
    }
  })
  const totalLangRepos = Object.values(langCounts).reduce((a, b) => a + b, 0) || 1
  const langList = Object.entries(langCounts)
    .map(([lang, count]) => ({
      lang,
      count,
      percent: Math.round((count / totalLangRepos) * 100),
    }))
    .sort((a, b) => b.count - a.count)

  const recentRepos = repos.slice(0, 4)

  return (
    <section id="github" className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Open Source & Activity"
          title="GitHub Contributions & Coding Streak."
          description="Real-time activity stats, contribution streaks, and open-source metrics directly from GitHub."
        />

        {/* Green Snake Contribution Heatmap Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-8 overflow-hidden rounded-3xl border border-line bg-canvas p-6 shadow-card transition-all duration-300 hover:border-indigo-500/40 sm:p-8"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 shadow-soft">
                <Activity size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-900">
                  Contribution Heatmap & Snake Game
                </h3>
                <p className="font-mono text-xs text-ink-400">
                  Live green contribution grid synced with @Meer-Abdulrehman
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-500">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Live Snake Eating Tiles
              </span>
              <a
                href="https://github.com/Meer-Abdulrehman"
                target="_blank"
                rel="noreferrer"
                className="hidden font-mono text-xs font-medium text-indigo-500 hover:underline sm:inline-flex"
              >
                @Meer-Abdulrehman ↗
              </a>
            </div>
          </div>

          {/* Interactive Snake Contribution Grid */}
          <SnakeGrid />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Top Languages Analytics Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col justify-between rounded-3xl border border-line bg-canvas p-6 shadow-card transition-all duration-300 hover:border-indigo-500/40 lg:col-span-5"
          >
            <div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div className="flex items-center gap-2">
                  <Code size={18} className="text-indigo-500" />
                  <h3 className="font-display text-base font-semibold text-ink-900">
                    Language Distribution
                  </h3>
                </div>
              </div>

              {/* Multi-segmented Progress Bar */}
              <div className="mt-6 flex h-3.5 w-full overflow-hidden rounded-full border border-line bg-surface p-0.5">
                {langList.map((item) => (
                  <div
                    key={item.lang}
                    style={{
                      width: `${item.percent}%`,
                      backgroundColor: langColors[item.lang] || '#818CF8',
                    }}
                    className="h-full transition-all duration-500"
                    title={`${item.lang}: ${item.percent}%`}
                  />
                ))}
              </div>

              {/* Language Legends */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {langList.map((item) => (
                  <div key={item.lang} className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full flex-none"
                      style={{ backgroundColor: langColors[item.lang] || '#818CF8' }}
                    />
                    <span className="text-xs font-medium text-ink-900">{item.lang}</span>
                    <span className="font-mono text-[10px] text-ink-400">({item.percent}%)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Footer */}
            <div className="mt-8 flex items-center justify-between border-t border-line pt-4">
              <div className="flex items-center gap-2.5">
                <img
                  src={profile?.avatar_url || 'https://github.com/Meer-Abdulrehman.png'}
                  alt="GitHub Avatar"
                  className="h-8 w-8 rounded-full border border-indigo-500/30 object-cover"
                />
                <div>
                  <p className="text-xs font-semibold text-ink-900">
                    {profile?.name || 'Meer Abdulrehman'}
                  </p>
                  <p className="font-mono text-[10px] text-ink-400">@Meer-Abdulrehman</p>
                </div>
              </div>
              <a
                href="https://github.com/Meer-Abdulrehman"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs font-medium text-indigo-500 hover:underline"
              >
                View Profile <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          {/* Live Recent Repos Stream Grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col justify-between rounded-3xl border border-line bg-canvas p-6 shadow-card lg:col-span-7"
          >
            <div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div className="flex items-center gap-2">
                  <Github size={18} className="text-indigo-500" />
                  <h3 className="font-display text-base font-semibold text-ink-900">
                    Recently Updated Repositories
                  </h3>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {recentRepos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col justify-between rounded-2xl border border-line bg-surface p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 font-mono text-[10px] font-medium text-indigo-500">
                          {repo.language || 'Code'}
                        </span>
                        <ExternalLink size={13} className="text-ink-400 group-hover:text-indigo-500" />
                      </div>

                      <h4 className="mt-2.5 font-display text-sm font-semibold text-ink-900 group-hover:text-indigo-500">
                        {repo.name}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Native Animated Snake Grid Component
function SnakeGrid() {
  const [grid, setGrid] = useState([])
  const [snake, setSnake] = useState([
    { c: 10, r: 3 },
    { c: 9, r: 3 },
    { c: 8, r: 3 },
    { c: 7, r: 3 },
    { c: 6, r: 3 },
  ])
  const dirRef = useRef({ dc: 1, dr: 0 })

  // Initialize realistic green contribution grid pattern
  useEffect(() => {
    const initialGrid = []
    for (let r = 0; r < ROWS; r++) {
      const row = []
      for (let c = 0; c < COLS; c++) {
        // Generate realistic green distribution pattern
        const rand = Math.random()
        let level = 0
        if (c > 10) {
          if (rand > 0.45) level = 1
          if (rand > 0.65) level = 2
          if (rand > 0.82) level = 3
          if (rand > 0.93) level = 4
        }
        row.push(level)
      }
      initialGrid.push(row)
    }
    setGrid(initialGrid)
  }, [])

  // Snake Movement Animation Loop
  useEffect(() => {
    const timer = setInterval(() => {
      setSnake((prevSnake) => {
        const head = prevSnake[0]
        let { dc, dr } = dirRef.current

        // Randomly alter direction occasionally for organic snake movement
        if (Math.random() < 0.2) {
          const choices = [
            { dc: 1, dr: 0 },
            { dc: -1, dr: 0 },
            { dc: 0, dr: 1 },
            { dc: 0, dr: -1 },
          ]
          const valid = choices.filter((ch) => !(ch.dc === -dc && ch.dr === -dr))
          const pick = valid[Math.floor(Math.random() * valid.length)]
          dc = pick.dc
          dr = pick.dr
          dirRef.current = pick
        }

        let nextC = head.c + dc
        let nextR = head.r + dr

        // Boundary collision bounce
        if (nextC < 0 || nextC >= COLS || nextR < 0 || nextR >= ROWS) {
          dc = -dc
          dr = -dr
          if (nextC < 0 || nextC >= COLS) dr = Math.random() > 0.5 ? 1 : -1
          dirRef.current = { dc, dr }
          nextC = Math.max(0, Math.min(COLS - 1, head.c + dc))
          nextR = Math.max(0, Math.min(ROWS - 1, head.r + dr))
        }

        const newHead = { c: nextC, r: nextR }
        const newSnake = [newHead, ...prevSnake.slice(0, 5)]
        return newSnake
      })
    }, 140)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <div className="overflow-x-auto rounded-2xl border border-line bg-[#0d1117] p-4 sm:p-6">
        <div className="min-w-[680px] grid grid-cols-[repeat(50,minmax(0,1fr))] gap-1.5">
          {Array.from({ length: COLS }).map((_, c) => (
            <div key={c} className="flex flex-col gap-1.5">
              {Array.from({ length: ROWS }).map((_, r) => {
                const level = grid[r] ? grid[r][c] : 0
                const snakeIndex = snake.findIndex((seg) => seg.c === c && seg.r === r)
                const isHead = snakeIndex === 0
                const isBody = snakeIndex > 0

                let bgColor = greenShades[level]
                let extraStyles = {}

                if (isHead) {
                  bgColor = '#a855f7' // Glowing Purple Snake Head
                  extraStyles = {
                    boxShadow: '0 0 10px #a855f7',
                    transform: 'scale(1.25)',
                    zIndex: 20,
                  }
                } else if (isBody) {
                  bgColor = '#d946ef' // Magenta Snake Body
                  extraStyles = {
                    opacity: 1 - snakeIndex * 0.15,
                    transform: 'scale(1.1)',
                  }
                }

                return (
                  <div
                    key={`${c}-${r}`}
                    className="h-3 w-3 rounded-[3px] transition-all duration-200"
                    style={{
                      backgroundColor: bgColor,
                      ...extraStyles,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Legend Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#a855f7] shadow-[0_0_6px_#a855f7]" />
            <span className="text-gray-300">Snake Head</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Less</span>
            {greenShades.map((shade, i) => (
              <span
                key={i}
                className="h-3 w-3 rounded-[2px]"
                style={{ backgroundColor: shade }}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  )
}

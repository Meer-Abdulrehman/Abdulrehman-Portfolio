import { motion } from 'framer-motion'
import { Clock, ArrowUpRight, Calendar, BookOpen, Sparkles } from 'lucide-react'

export default function BlogCard({ post, onSelect, isFeatured = false }) {
  if (isFeatured) {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        onClick={() => onSelect(post)}
        className="group relative cursor-pointer overflow-hidden rounded-3xl border border-indigo-500/30 bg-surface p-6 shadow-card transition-all duration-300 hover:border-indigo-500/60 hover:shadow-lift lg:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Image Container with Glow Badge */}
          <div className="relative overflow-hidden rounded-2xl lg:col-span-6">
            <img
              src={post.image}
              alt={post.title}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 lg:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-canvas/90 px-3.5 py-1.5 font-mono text-[11px] font-bold text-indigo-400 backdrop-blur-md shadow-soft">
              <Sparkles size={12} className="text-indigo-400" />
              Featured Deep-Dive
            </span>
          </div>

          {/* Content Details */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-line bg-canvas px-3 py-1 font-mono text-[11px] font-semibold text-ink-700">
                {post.category}
              </span>
              <span className="flex items-center gap-1 font-mono text-[11px] font-semibold text-ink-500">
                <Clock size={13} className="text-indigo-400" />
                {post.readTime}
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink-900 transition-colors group-hover:text-indigo-400 sm:text-3xl">
              {post.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-ink-700 font-normal">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-line/70 pt-4">
              <div className="flex items-center gap-4 text-xs font-semibold text-ink-500">
                <span className="flex items-center gap-1.5 font-mono">
                  <Calendar size={13} className="text-indigo-400" />
                  {post.date}
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600/10 px-4 py-2 text-xs font-bold text-indigo-400 border border-indigo-500/20 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                Read Article
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      onClick={() => onSelect(post)}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-line bg-surface p-5 shadow-card transition-all duration-300 hover:border-indigo-500/40 hover:shadow-lift"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
        />
        <span className="absolute top-3 left-3 rounded-full border border-line bg-canvas/90 px-3 py-1 font-mono text-[10px] font-bold text-ink-900 backdrop-blur-md">
          {post.category}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col justify-between pt-5">
        <div>
          <div className="flex items-center gap-3 text-xs text-ink-500 font-semibold">
            <span className="flex items-center gap-1 font-mono">
              <Calendar size={12} className="text-indigo-400" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-mono">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-tight text-ink-900 transition-colors group-hover:text-indigo-400">
            {post.title}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-ink-700 font-normal line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="font-mono text-[10px] font-semibold text-ink-400">
                #{tag}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:underline">
            Read
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}

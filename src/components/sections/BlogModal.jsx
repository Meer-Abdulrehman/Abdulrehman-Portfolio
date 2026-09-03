import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, Calendar, Share2, Sparkles, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function BlogModal({ post, isOpen, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!post) return null

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Article link copied to clipboard!')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-line bg-canvas shadow-2xl"
          >
            {/* Header Sticky Control */}
            <div className="flex items-center justify-between border-b border-line bg-surface/80 px-6 py-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-indigo-500">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-ink-500">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>

              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-canvas text-ink-700 transition-colors hover:bg-surface hover:text-ink-900"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Article Body */}
            <div className="overflow-y-auto p-6 sm:p-10">
              {/* Title & Metadata */}
              <h1 className="font-display text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl lg:text-4xl">
                {post.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 border-b border-line pb-6 text-xs text-ink-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-indigo-500" />
                  {post.date}
                </span>
                <span>•</span>
                <span>By Abdulrehman</span>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] text-ink-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cover Image */}
              {post.image && (
                <div className="my-6 overflow-hidden rounded-2xl border border-line shadow-soft">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-64 w-full object-cover sm:h-80"
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-slate dark:prose-invert max-w-none text-base leading-relaxed text-ink-700">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="mt-8 mb-3 font-display text-xl font-semibold text-ink-900">
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  }
                  if (paragraph.startsWith('#### ')) {
                    return (
                      <h4 key={index} className="mt-6 mb-2 font-display text-lg font-semibold text-ink-900">
                        {paragraph.replace('#### ', '')}
                      </h4>
                    )
                  }
                  if (paragraph.startsWith('```')) {
                    const lines = paragraph.split('\n')
                    const code = lines.slice(1, -1).join('\n')
                    return (
                      <pre key={index} className="my-6 overflow-x-auto rounded-2xl border border-line bg-surface p-4 font-mono text-xs text-ink-900 shadow-inner">
                        <code>{code}</code>
                      </pre>
                    )
                  }
                  return (
                    <p key={index} className="my-4 text-ink-700 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>

            {/* Footer Bar */}
            <div className="flex items-center justify-between border-t border-line bg-surface/80 px-6 py-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 font-display text-xs font-bold text-white">
                  AR
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink-900">Abdulrehman</p>
                  <p className="font-mono text-[10px] text-ink-500">Software Engineer</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline" icon={false} onClick={handleShare} className="!py-2 !px-4 text-xs">
                  <Share2 size={14} className="mr-1.5 inline" /> Share
                </Button>
                <Button variant="accent" icon={false} onClick={onClose} className="!py-2 !px-4 text-xs">
                  Close Article
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { blogPosts, blogCategories } from '../../data/blogs'
import SectionHeading from '../ui/SectionHeading'
import BlogCard from './BlogCard'
import BlogModal from './BlogModal'

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedPost, setSelectedPost] = useState(null)

  const filteredPosts = blogPosts.filter(
    (post) => activeCategory === 'All' || post.category === activeCategory
  )

  const featuredPost = activeCategory === 'All' ? blogPosts.find((p) => p.featured) : null
  const regularPosts = featuredPost
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts

  return (
    <section id="blogs" className="section-pad bg-canvas">
      <div className="container-page">
        <SectionHeading
          eyebrow="Articles & Insights"
          title="Engineering thoughts, system designs, & deep dives."
          description="Technical writing on scaling APIs, database optimization, frontend architecture, and developer productivity."
        />

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'text-canvas'
                  : 'text-ink-500 hover:text-ink-900'
              }`}
            >
              {activeCategory === category && (
                <motion.span
                  layoutId="activeBlogCategory"
                  className="absolute inset-0 rounded-full bg-ink-900"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Featured Post Banner (Only in 'All' tab) */}
        {featuredPost && (
          <div className="mb-8">
            <BlogCard post={featuredPost} isFeatured={true} onSelect={setSelectedPost} />
          </div>
        )}

        {/* Grid of Posts */}
        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {regularPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <BlogCard post={post} onSelect={setSelectedPost} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Article Reader Modal */}
      <BlogModal
        post={selectedPost}
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </section>
  )
}

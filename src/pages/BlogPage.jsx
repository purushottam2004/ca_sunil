import { useState } from 'react'
import { Calendar, Clock, User, Tag } from 'lucide-react'
import { blogs, blogCategories } from '@/data/blogs'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import SearchBar from '@/components/ui/SearchBar'

const categoryColor = { GST: 'blue', 'Income Tax': 'green', TDS: 'gold', Compliance: 'purple' }

export default function BlogPage() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = blogs.filter(b => {
    const matchCat = category === 'All' || b.category === category
    const matchQ = !query || b.title.toLowerCase().includes(query.toLowerCase()) || b.excerpt.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="bg-gradient-to-br from-brand-navy via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Knowledge Hub</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tax Knowledge Blog</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical, plain-language articles on GST, Income Tax, TDS, and compliance by CA Sunil Udavant.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <SearchBar onSearch={setQuery} placeholder="Search articles..." className="flex-1" />
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {blogCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    category === cat
                      ? 'bg-brand-navy text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-16">No articles found. Try a different search.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((blog, i) => (
                <AnimatedSection key={blog.id} delay={(i % 6) * 0.07}>
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group cursor-pointer">
                    <div className="h-1.5 bg-brand-navy" />
                    <div className="p-6 flex flex-col flex-1">
                      <Badge color={categoryColor[blog.category] || 'blue'} className="mb-3 self-start">
                        {blog.category}
                      </Badge>
                      <h3 className="text-brand-navy dark:text-white font-bold text-base leading-snug mb-3 line-clamp-2 group-hover:text-brand-gold transition-colors flex-1">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {blog.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="flex items-center gap-1 text-xs text-gray-400 bg-gray-50 dark:bg-gray-700 px-2 py-0.5 rounded-md">
                            <Tag className="w-2.5 h-2.5" />{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" />
                          {blog.author}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {blog.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

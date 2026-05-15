import { useState } from 'react'
import { Calendar, Clock } from 'lucide-react'
import { itUpdates, itCategories } from '@/data/itUpdates'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'
import SearchBar from '@/components/ui/SearchBar'

export default function IncomeTaxUpdatesPage() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = itUpdates.filter(u => {
    const matchCat = category === 'All' || u.category === category
    const matchQ = !query || u.title.toLowerCase().includes(query.toLowerCase()) || u.excerpt.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="bg-gradient-to-br from-brand-navy via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Income Tax News</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Income Tax Updates</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Budget updates, TDS amendments, new tax regime changes, and ITR filing updates explained clearly.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <SearchBar onSearch={setQuery} placeholder="Search income tax updates..." className="flex-1" />
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {itCategories.map(cat => (
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
            <p className="text-center text-gray-400 py-16">No updates found matching your search.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((update, i) => (
                <AnimatedSection key={update.id} delay={(i % 6) * 0.07}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 h-full border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
                    <Badge color="green" className="mb-3 self-start">{update.category}</Badge>
                    <h3 className="text-brand-navy dark:text-white font-semibold text-base leading-snug mb-3 line-clamp-2 flex-1">
                      {update.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {update.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-700">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(update.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {update.readTime}
                      </span>
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

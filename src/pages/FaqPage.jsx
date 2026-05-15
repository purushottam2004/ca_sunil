import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs, faqCategories } from '@/data/faqs'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import SearchBar from '@/components/ui/SearchBar'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const catColor = { GST: 'blue', 'Income Tax': 'green', TDS: 'gold', Compliance: 'purple' }

export default function FaqPage() {
  const [open, setOpen] = useState(null)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = faqs.filter(f => {
    const matchCat = category === 'All' || f.category === category
    const matchQ = !query || f.question.toLowerCase().includes(query.toLowerCase()) || f.answer.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="bg-gradient-to-br from-brand-navy via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Quick answers to the most common questions on GST, Income Tax, TDS, and business compliance.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SearchBar
              onSearch={setQuery}
              placeholder="Search questions (e.g. 'PF applicability', 'GST on rent'...)"
              className="mb-6"
            />
            <div className="flex flex-wrap gap-2 mb-10">
              {faqCategories.map(cat => (
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
            <p className="text-center text-gray-400 py-16">No questions found. Try a different search or category.</p>
          ) : (
            <div className="space-y-3">
              {filtered.map((faq, i) => (
                <AnimatedSection key={faq.id} delay={(i % 8) * 0.04}>
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpen(open === faq.id ? null : faq.id)}
                      className="w-full flex items-start justify-between gap-4 px-6 py-4 text-left"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <Badge color={catColor[faq.category] || 'blue'} className="mt-0.5 shrink-0">{faq.category}</Badge>
                        <span className="font-semibold text-brand-navy dark:text-white text-sm leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-brand-gold shrink-0 transition-transform duration-300 mt-0.5 ${open === faq.id ? 'rotate-180' : ''}`} />
                    </button>
                    {open === faq.id && (
                      <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4 ml-0">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          <AnimatedSection className="mt-16 text-center">
            <div className="bg-brand-light dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-3">Didn't Find Your Answer?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Book a free consultation with CA Sunil Udavant and get a personalized answer to your specific question.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button to="/contact" variant="primary">Book Free Consultation</Button>
                <a
                  href="https://wa.me/918055518999?text=Hi%20CA%20Sunil%20Academy%2C%20I%20have%20a%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

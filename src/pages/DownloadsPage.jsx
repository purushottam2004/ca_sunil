import { useState } from 'react'
import { Download, FileCheck, FileSpreadsheet, Calendar, FileEdit } from 'lucide-react'
import { downloads, downloadCategories } from '@/data/downloads'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

const iconMap = { FileCheck, FileSpreadsheet, Calendar, FileEdit: FileCheck }
const typeColors = {
  PDF:   'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  Excel: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  Word:  'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
}
const catColor = { GST: 'blue', 'Income Tax': 'green', TDS: 'gold', Compliance: 'purple', General: 'gray' }

export default function DownloadsPage() {
  const [category, setCategory] = useState('All')

  const filtered = category === 'All' ? downloads : downloads.filter(d => d.category === category)

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="bg-gradient-to-br from-brand-navy via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Free Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Download Center</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Free checklists, Excel templates, compliance calendars, and notice reply formats for tax professionals and businesses.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-10">
              {downloadCategories.map(cat => (
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item, i) => {
              const Icon = iconMap[item.icon] || FileCheck
              return (
                <AnimatedSection key={item.id} delay={(i % 8) * 0.07}>
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 bg-brand-navy/10 dark:bg-brand-gold/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-navy dark:text-brand-gold" />
                      </div>
                      <Badge color={catColor[item.category] || 'gray'}>{item.category}</Badge>
                    </div>
                    <h3 className="text-brand-navy dark:text-white font-semibold text-sm mb-2 leading-snug flex-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-5 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${typeColors[item.fileType]}`}>
                        {item.fileType}
                      </span>
                      <button
                        className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                          item.comingSoon
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-brand-gold hover:text-yellow-600 cursor-pointer'
                        }`}
                        disabled={item.comingSoon}
                      >
                        <Download className="w-3.5 h-3.5" />
                        {item.comingSoon ? 'Coming Soon' : 'Download Free'}
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <div className="bg-brand-light dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-3">Want Custom Templates?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">We create custom Excel templates, working paper formats, and compliance checklists for CA firms and businesses.</p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors">
                Request Custom Template
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

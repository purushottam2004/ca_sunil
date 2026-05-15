import { Link } from 'react-router-dom'
import { Download, FileCheck, FileSpreadsheet, Calendar, ArrowRight } from 'lucide-react'
import { downloads } from '@/data/downloads'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'

const iconMap = {
  FileCheck:       FileCheck,
  FileSpreadsheet: FileSpreadsheet,
  Calendar:        Calendar,
  FileEdit:        FileCheck,
}

const typeColors = {
  PDF:   'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  Excel: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
  Word:  'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
}

export default function FreeDownloads() {
  const featured = downloads.slice(0, 4)

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Free Resources"
            title="Downloads"
            subtitle="Free checklists, Excel templates, and compliance resources for professionals."
          />
          <Link to="/downloads" className="inline-flex items-center gap-1 text-brand-gold font-semibold hover:gap-2 transition-all whitespace-nowrap">
            All Downloads <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((item, i) => {
            const Icon = iconMap[item.icon] || FileCheck
            return (
              <AnimatedSection key={item.id} delay={i * 0.1}>
                <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
                  <div className="w-10 h-10 bg-brand-navy/10 dark:bg-brand-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-navy dark:text-brand-gold" />
                  </div>
                  <h3 className="text-brand-navy dark:text-white font-semibold text-sm mb-2 leading-snug flex-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-4 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${typeColors[item.fileType]}`}>
                      {item.fileType}
                    </span>
                    <button
                      className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                        item.comingSoon
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-brand-gold hover:text-yellow-600'
                      }`}
                      disabled={item.comingSoon}
                    >
                      <Download className="w-4 h-4" />
                      {item.comingSoon ? 'Coming Soon' : 'Download'}
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

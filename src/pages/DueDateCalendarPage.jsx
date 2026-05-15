import { useState } from 'react'
import { FileText, Calculator, IndianRupee, Building2, Users } from 'lucide-react'
import { dueDates } from '@/data/dueDates'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'

const iconMap = { FileText, Calculator, IndianRupee, Building2, Users }

const categoryColors = {
  blue:   { tab: 'bg-blue-600 text-white',   row: 'border-l-4 border-blue-500',   badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
  green:  { tab: 'bg-green-600 text-white',  row: 'border-l-4 border-green-500',  badge: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
  yellow: { tab: 'bg-yellow-500 text-white', row: 'border-l-4 border-yellow-500', badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
  purple: { tab: 'bg-purple-600 text-white', row: 'border-l-4 border-purple-500', badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' },
  red:    { tab: 'bg-red-600 text-white',    row: 'border-l-4 border-red-500',    badge: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
}

export default function DueDateCalendarPage() {
  const [activeTab, setActiveTab] = useState(0)
  const active = dueDates[activeTab]
  const colors = categoryColors[active.color]

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="bg-gradient-to-br from-brand-navy via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Never Miss a Deadline</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Due Date Calendar</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Complete compliance due date calendar for GST, TDS, Income Tax, ROC, PF & ESIC.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-10">
              {dueDates.map((cat, i) => {
                const Icon = iconMap[cat.icon]
                const c = categoryColors[cat.color]
                return (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      activeTab === i ? c.tab : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {cat.category}
                  </button>
                )
              })}
            </div>
          </AnimatedSection>

          {/* Table */}
          <AnimatedSection delay={0.1} key={activeTab}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-brand-navy flex items-center gap-3">
                {(() => { const Icon = iconMap[active.icon]; return Icon ? <Icon className="w-5 h-5 text-brand-gold" /> : null })()}
                <h2 className="text-white font-bold text-lg">{active.category} Due Dates</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Form / Return</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Due Date</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">Description</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">Applicability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {active.dates.map((d, i) => (
                      <tr key={i} className={`${colors.row} hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors`}>
                        <td className="px-6 py-4">
                          <p className="font-semibold text-brand-navy dark:text-white text-sm">{d.form}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                            {d.dueDate}
                          </span>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell">
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{d.description}</p>
                        </td>
                        <td className="px-6 py-4 hidden lg:table-cell">
                          <p className="text-gray-500 dark:text-gray-500 text-xs">{d.applicability}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              * Due dates are subject to extensions announced by CBIC/CBDT. Always verify from official portals before filing.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

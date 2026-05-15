import { Link } from 'react-router-dom'
import { AlertCircle, ArrowRight, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'

const alerts = [
  { form: 'GSTR-3B', dueDate: '20th of every month', category: 'GST', color: 'blue', urgency: 'Monthly' },
  { form: 'GSTR-1', dueDate: '11th of every month', category: 'GST', color: 'blue', urgency: 'Monthly' },
  { form: 'TDS / TCS Payment', dueDate: '7th of every month', category: 'TDS', color: 'green', urgency: 'Monthly' },
  { form: 'PF Contribution', dueDate: '15th of every month', category: 'PF/ESIC', color: 'red', urgency: 'Monthly' },
  { form: 'ITR Filing (Non-Audit)', dueDate: '31st July', category: 'Income Tax', color: 'yellow', urgency: 'Annual' },
  { form: 'GST Annual Return (GSTR-9)', dueDate: '31st December', category: 'GST', color: 'blue', urgency: 'Annual' },
]

const categoryColors = {
  blue:   'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  green:  'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  red:    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
}

const urgencyColors = {
  Monthly: 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400',
  Annual:  'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
}

export default function DueDateAlerts() {
  return (
    <section className="py-20 bg-brand-light dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Compliance Calendar"
            title="Due Date Alerts"
            subtitle="Never miss a filing deadline. Stay compliant with key due dates."
          />
          <Link to="/due-date-calendar" className="inline-flex items-center gap-1 text-brand-gold font-semibold hover:gap-2 transition-all whitespace-nowrap">
            Full Calendar <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm">
            <div className="flex items-center gap-3 bg-brand-navy text-white px-6 py-4">
              <AlertCircle className="w-5 h-5 text-brand-gold" />
              <span className="font-semibold">Key Compliance Due Dates</span>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {alerts.map((alert, i) => (
                <div key={i} className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <Calendar className="w-4 h-4 text-brand-gold shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-brand-navy dark:text-white text-sm truncate">{alert.form}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">{alert.dueDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[alert.color]}`}>
                      {alert.category}
                    </span>
                    <span className={`hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${urgencyColors[alert.urgency]}`}>
                      {alert.urgency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

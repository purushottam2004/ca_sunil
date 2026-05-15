import { BookOpen, FileSpreadsheet, Monitor, FileText, HelpCircle, Briefcase, GraduationCap } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const resources = [
  {
    icon: BookOpen,
    title: 'Practical GST Notes',
    color: 'blue',
    description: 'Comprehensive notes on GST concepts, registration, returns, ITC, and litigation — written for CA students and practitioners.',
    items: ['GST Registration Process', 'Input Tax Credit Rules', 'GSTR Filing Procedure', 'E-Invoice & E-Way Bill', 'GST Audit & Annual Return'],
    status: 'Available',
  },
  {
    icon: FileSpreadsheet,
    title: 'Excel Formats & Templates',
    color: 'green',
    description: 'Ready-to-use Excel templates for TDS calculations, GST reconciliation, advance tax, and MIS reports.',
    items: ['TDS Calculation Sheet', 'GSTR-2B Reconciliation', 'Advance Tax Calculator', 'Payroll Sheet', 'MIS Dashboard Template'],
    status: 'Available',
  },
  {
    icon: Monitor,
    title: 'Tally Prime Tutorials',
    color: 'orange',
    description: 'Step-by-step Tally tutorials for GST accounting, payroll processing, and financial reporting.',
    items: ['Tally Basic Setup', 'GST Entries in Tally', 'Bank Reconciliation', 'Payroll in Tally Prime', 'Balance Sheet Export'],
    status: 'Coming Soon',
  },
  {
    icon: FileText,
    title: 'Working Papers',
    color: 'purple',
    description: 'Professional working paper formats used in CA practice for tax audits, GST audits, and compliance reviews.',
    items: ['Tax Audit Working Papers', 'GST Audit Checklist', 'ITR Computation Sheet', 'TDS Reconciliation', 'Bank Reconciliation Format'],
    status: 'Coming Soon',
  },
  {
    icon: HelpCircle,
    title: 'Interview Questions',
    color: 'yellow',
    description: 'Frequently asked interview questions for CA articleship, CA firm jobs, and accounts executive roles.',
    items: ['GST Interview Q&A', 'Income Tax Interview Q&A', 'Accounting Concepts', 'Tally Questions', 'General Finance Q&A'],
    status: 'Available',
  },
  {
    icon: GraduationCap,
    title: 'Articleship Guidance',
    color: 'red',
    description: 'Practical guidance for CA articleship trainees on how to handle client work, learn efficiently, and build expertise.',
    items: ['Articleship Best Practices', 'First Day at CA Firm', 'GST Return Filing Guide', 'How to Handle Tax Audit', 'Building Expertise Roadmap'],
    status: 'Available',
  },
]

const colorMap = {
  blue:   'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800',
  green:  'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-100 dark:border-green-800',
  orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-800',
  purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-800',
  yellow: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-100 dark:border-yellow-800',
  red:    'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-800',
}

export default function StudentCornerPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-brand-navy via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">For CA Students & Trainees</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Corner</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Free resources, notes, templates, and guidance for CA students, articleship trainees, and accounting professionals.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Learning Resources"
              title="Everything You Need to Learn Taxation"
              subtitle="Practical notes, templates, and guides curated for CA students and working professionals."
              center
            />
          </AnimatedSection>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res, i) => {
              const Icon = res.icon
              const colors = colorMap[res.color]
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className={`p-6 border-b ${colors} flex items-center justify-between`}>
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6" />
                        <h3 className="font-bold text-base">{res.title}</h3>
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${res.status === 'Available' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                        {res.status}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{res.description}</p>
                      <ul className="space-y-1.5 flex-1 mb-5">
                        {res.items.map(item => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button
                        to="/contact"
                        variant={res.status === 'Available' ? 'primary' : 'outline'}
                        size="sm"
                        className="w-full justify-center"
                      >
                        {res.status === 'Available' ? 'Access Now' : 'Notify Me'}
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Enroll in Our Practical Courses</h2>
          <p className="text-gray-300 mb-8">Get structured, in-depth training with live practice and a certificate of completion.</p>
          <Button to="/courses" variant="primary" size="lg">View All Courses</Button>
        </div>
      </section>
    </div>
  )
}

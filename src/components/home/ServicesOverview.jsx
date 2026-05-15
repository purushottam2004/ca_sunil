import { Link } from 'react-router-dom'
import { FileText, Calculator, Briefcase, BookOpen, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'

const services = [
  {
    icon: FileText,
    title: 'GST Services',
    description: 'End-to-end GST compliance — registration, return filing, audits, notices, and consultation.',
    link: '/services#gst',
    color: 'blue',
    items: ['GST Registration', 'GSTR-1, 3B, 9 Filing', 'GST Notice Reply', 'LUT Filing'],
  },
  {
    icon: Calculator,
    title: 'Income Tax Services',
    description: 'Complete income tax solutions including ITR filing, TDS returns, tax planning, and notice handling.',
    link: '/services#income-tax',
    color: 'green',
    items: ['ITR Filing (All Forms)', 'TDS Return Filing', 'Tax Planning', 'Capital Gains Tax'],
  },
  {
    icon: Briefcase,
    title: 'Business Compliance',
    description: 'Statutory registrations and compliance for all business types — from startups to established companies.',
    link: '/services#business-compliance',
    color: 'purple',
    items: ['Company Registration', 'PF & ESIC Compliance', 'ROC Annual Filing', 'MSME Registration'],
  },
  {
    icon: BookOpen,
    title: 'Accounting Services',
    description: 'Professional bookkeeping, Tally accounting, financial statements, and MIS reporting.',
    link: '/services#accounting',
    color: 'orange',
    items: ['Bookkeeping', 'Tally ERP Accounting', 'Financial Statements', 'MIS Reports'],
  },
]

const iconBg = {
  blue:   'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  green:  'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
}

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            subtitle="Comprehensive GST, Income Tax, and business compliance solutions tailored for businesses, professionals, and individuals."
            center
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl ${iconBg[service.color]} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {service.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold hover:gap-2 transition-all duration-200"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

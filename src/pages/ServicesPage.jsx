import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FileText, Calculator, Briefcase, BookOpen, CheckCircle, Phone } from 'lucide-react'
import { serviceCategories } from '@/data/services'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const icons = { FileText, Calculator, Briefcase, BookOpen }
const tabColors = {
  gst:                 'bg-blue-600 text-white',
  'income-tax':        'bg-green-600 text-white',
  'business-compliance': 'bg-purple-600 text-white',
  accounting:          'bg-orange-500 text-white',
}
const cardAccents = { gst: 'border-blue-200 dark:border-blue-800', 'income-tax': 'border-green-200 dark:border-green-800', 'business-compliance': 'border-purple-200 dark:border-purple-800', accounting: 'border-orange-200 dark:border-orange-800' }

export default function ServicesPage() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('gst')

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && serviceCategories.find(c => c.id === hash)) {
      setActiveTab(hash)
    }
  }, [location.hash])

  const active = serviceCategories.find(c => c.id === activeTab)

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive GST, Income Tax, and compliance services for businesses, professionals, freelancers, and individuals.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
            {serviceCategories.map(cat => {
              const Icon = icons[cat.icon]
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === cat.id
                      ? tabColors[cat.id]
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {cat.title}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {active && (
        <section className="py-16" id={activeTab}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeading
                eyebrow={active.description}
                title={active.title}
              />
            </AnimatedSection>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {active.services.map((service, i) => (
                <AnimatedSection key={service.id} delay={i * 0.08}>
                  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 ${cardAccents[activeTab]} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col`}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 bg-brand-gold/10 rounded-lg flex items-center justify-center mt-0.5 shrink-0">
                        <CheckCircle className="w-5 h-5 text-brand-gold" />
                      </div>
                      <h3 className="font-bold text-brand-navy dark:text-white text-base leading-snug">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">{service.description}</p>
                    <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <Button to="/contact" variant="ghost" size="sm" className="text-brand-gold hover:text-yellow-600 p-0 font-semibold">
                        Enquire Now →
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-brand-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-300 mb-8">Book a free 30-minute consultation with CA Sunil Udavant and get the right advice for your specific situation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">Book Free Consultation</Button>
            <a href="tel:+918055518999" className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-brand-navy transition-colors text-lg">
              <Phone className="w-5 h-5" /> +91 80555 18999
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

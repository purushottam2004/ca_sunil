import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { faqs } from '@/data/faqs'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'

export default function FaqPreview() {
  const [open, setOpen] = useState(null)
  const preview = faqs.slice(0, 5)

  return (
    <section className="py-20 bg-brand-light dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Quick answers to the most common GST, Income Tax, and compliance questions."
            center
          />
        </AnimatedSection>

        <div className="mt-10 space-y-3">
          {preview.map((faq, i) => (
            <AnimatedSection key={faq.id} delay={i * 0.07}>
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="font-semibold text-brand-navy dark:text-white text-sm leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-brand-gold shrink-0 transition-transform duration-300 ${open === faq.id ? 'rotate-180' : ''}`} />
                </button>
                {open === faq.id && (
                  <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8">
          <Link to="/faq" className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:gap-3 transition-all">
            View All FAQs <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

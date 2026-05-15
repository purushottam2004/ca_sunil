import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Clock } from 'lucide-react'
import { gstUpdates } from '@/data/gstUpdates'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

export default function GstUpdatesPreview() {
  const latest = gstUpdates.slice(0, 3)

  return (
    <section className="py-20 bg-brand-light dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Stay Updated"
            title="Latest GST Updates"
            subtitle="Recent circulars, notifications, and changes in GST law."
          />
          <Link to="/gst-updates" className="inline-flex items-center gap-1 text-brand-gold font-semibold hover:gap-2 transition-all whitespace-nowrap">
            View All Updates <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((update, i) => (
            <AnimatedSection key={update.id} delay={i * 0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 h-full border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <Badge color="blue" className="mb-3">{update.category}</Badge>
                <h3 className="text-brand-navy dark:text-white font-semibold text-base leading-snug mb-3 line-clamp-2">
                  {update.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {update.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
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
      </div>
    </section>
  )
}

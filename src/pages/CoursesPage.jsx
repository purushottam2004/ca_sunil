import { Clock, Users, Award, CheckCircle } from 'lucide-react'
import { courses } from '@/data/courses'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export default function CoursesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-brand-navy via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Practical Education</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Courses</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hands-on, job-ready courses in GST, Income Tax, Tally, and Excel designed for CA students, accountants, and business owners.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              eyebrow="What You'll Learn"
              title="Our Courses"
              subtitle="All courses include live portal practice, real case studies, and a certificate of completion."
              center
            />
          </AnimatedSection>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <AnimatedSection key={course.id} delay={i * 0.1}>
                <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  {/* Header */}
                  <div className="bg-gradient-to-br from-brand-navy to-blue-900 p-6 text-white">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-lg leading-snug flex-1">{course.title}</h3>
                      {course.badge && (
                        <span className="ml-2 shrink-0 bg-brand-gold text-brand-navy text-xs font-bold px-2.5 py-1 rounded-full">
                          {course.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{course.duration}</span>
                      <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />{course.level}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">{course.description}</p>

                    <div className="mb-5 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy dark:text-brand-gold mb-3">What You'll Learn</p>
                      <ul className="space-y-2">
                        {course.highlights.map(h => (
                          <li key={h} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-xs text-gray-400">Course Fee</p>
                          <p className="text-2xl font-bold text-brand-navy dark:text-white">{course.price}</p>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Award className="w-4 h-4" />
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Certificate Included</span>
                        </div>
                      </div>
                      <Button to="/contact" variant="primary" className="w-full justify-center">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-light dark:bg-gray-950 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-4">Want a Custom Training Program?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">We offer customized training for CA firms, accounting teams, and corporate finance departments. Contact us to discuss your requirements.</p>
          <Button to="/contact" variant="secondary" size="lg">Contact for Group Training</Button>
        </div>
      </section>
    </div>
  )
}

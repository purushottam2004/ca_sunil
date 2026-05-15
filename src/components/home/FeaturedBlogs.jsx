import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import { blogs } from '@/data/blogs'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

const categoryColor = { GST: 'blue', 'Income Tax': 'green', TDS: 'gold', Compliance: 'purple' }

export default function FeaturedBlogs() {
  const featured = blogs.slice(0, 3)

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Knowledge Hub"
            title="Featured Articles"
            subtitle="Practical tax knowledge written in plain language for businesses and professionals."
          />
          <Link to="/blog" className="inline-flex items-center gap-1 text-brand-gold font-semibold hover:gap-2 transition-all whitespace-nowrap">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((blog, i) => (
            <AnimatedSection key={blog.id} delay={i * 0.1}>
              <Link to="/blog" className="block group">
                <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Color Header */}
                  <div className="h-2 bg-brand-navy" />
                  <div className="p-6 flex flex-col flex-1">
                    <Badge color={categoryColor[blog.category] || 'blue'} className="mb-3 self-start">
                      {blog.category}
                    </Badge>
                    <h3 className="text-brand-navy dark:text-white font-bold text-base leading-snug mb-3 line-clamp-2 group-hover:text-brand-gold transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {blog.author}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {blog.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

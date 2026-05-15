import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Phone, Users, Award, TrendingUp } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-navy via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
              Trusted GST & Tax Consultants in Pune
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
              Practical GST & Income Tax{' '}
              <span className="text-brand-gold">Knowledge</span> for Businesses & Professionals
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              CA Sunil Academy offers expert GST consulting, Income Tax filing, business compliance services, and professional tax courses in Pune. From GST notices to ITR filing — we handle it all.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-brand-navy transition-all duration-200"
              >
                <BookOpen className="w-5 h-5" /> Explore Courses
              </Link>
            </div>

            {/* Inline stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-5 h-5 text-brand-gold" />
                <span><strong className="text-white">500+</strong> Clients Served</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award className="w-5 h-5 text-brand-gold" />
                <span><strong className="text-white">10+</strong> Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <TrendingUp className="w-5 h-5 text-brand-gold" />
                <span><strong className="text-white">100%</strong> Compliance Rate</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Services Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: '📋', title: 'GST Services', desc: 'Registration, Returns, Notices' },
              { icon: '🧾', title: 'Income Tax', desc: 'ITR, TDS, Tax Planning' },
              { icon: '🏢', title: 'Business Compliance', desc: 'ROC, PF, ESIC, MSME' },
              { icon: '🎓', title: 'Tax Courses', desc: 'Practical GST & IT Training' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}

            <div className="col-span-2 bg-brand-gold/20 border border-brand-gold/40 rounded-xl p-4 flex items-center gap-4">
              <Phone className="w-6 h-6 text-brand-gold shrink-0" />
              <div>
                <p className="text-xs text-gray-400">Call for Free Consultation</p>
                <a href="tel:+918055518999" className="text-brand-gold font-bold text-lg hover:text-yellow-400 transition-colors">
                  +91 80555 18999
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

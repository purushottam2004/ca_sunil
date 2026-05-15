import { CheckCircle, Award, Users, BookOpen, TrendingUp, Shield } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const expertise = [
  { icon: '📋', title: 'GST Compliance', desc: 'Registration, return filing, audits, notices, ITC reconciliation, and litigation.' },
  { icon: '🧾', title: 'Income Tax', desc: 'ITR filing for all categories, TDS compliance, tax planning, and assessments.' },
  { icon: '👥', title: 'PF & ESIC', desc: 'End-to-end provident fund and ESI compliance for employers.' },
  { icon: '🏢', title: 'ROC / MCA Compliance', desc: 'Annual filings for companies and LLPs including MGT-7, AOC-4, and DIR-3 KYC.' },
  { icon: '💼', title: 'Business Registration', desc: 'Company, LLP, MSME, partnership registration and post-incorporation compliance.' },
  { icon: '📊', title: 'Accounting & Tally', desc: 'Bookkeeping, financial statements, MIS reporting, and Tally ERP support.' },
]

const whyUs = [
  { icon: Award,       title: '10+ Years Experience',      desc: 'Proven expertise in GST, Income Tax, and business compliance.' },
  { icon: Shield,      title: 'Trusted & Transparent',     desc: 'Honest advice, no hidden charges, and clear communication always.' },
  { icon: TrendingUp,  title: 'Practical Approach',        desc: 'Real-world solutions for real business problems — not just theory.' },
  { icon: Users,       title: '500+ Happy Clients',        desc: 'Businesses, freelancers, startups, and professionals across Maharashtra.' },
  { icon: BookOpen,    title: 'Educator First',            desc: 'We educate clients on compliance — empowering them, not dependent on us.' },
  { icon: CheckCircle, title: 'End-to-End Support',        desc: 'From registration to annual filing, we handle the full compliance lifecycle.' },
]

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet CA Sunil Udavant</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Chartered Accountant, Tax Educator, and Compliance Specialist based in Pune, Maharashtra.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-brand-navy to-blue-900 rounded-3xl p-10 text-white text-center">
                <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-brand-navy">
                  CA
                </div>
                <h2 className="text-2xl font-bold mb-2">CA Sunil Udavant</h2>
                <p className="text-brand-gold text-sm font-medium mb-4">Chartered Accountant | Tax Consultant | Educator</p>
                <p className="text-gray-300 text-sm">Pune, Maharashtra, India</p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  {[['10+', 'Years'], ['500+', 'Clients'], ['200+', 'Students']].map(([val, label]) => (
                    <div key={label}>
                      <p className="text-2xl font-bold text-brand-gold">{val}</p>
                      <p className="text-xs text-gray-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-5">
                Building a Tax-Literate India, One Business at a Time
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  CA Sunil Academy was founded by CA Sunil Udavant with a singular mission: to make GST and Income Tax compliance simple, accessible, and affordable for every business owner, professional, and student in India.
                </p>
                <p>
                  With over 10 years of hands-on experience in GST consulting, income tax practice, and corporate compliance, CA Sunil sir has helped hundreds of businesses stay compliant, reduce tax liability legally, and grow with confidence.
                </p>
                <p>
                  Beyond consultancy, the academy runs practical courses on GST, Income Tax, Tally, and Excel — equipping CA students, articleship trainees, and working professionals with job-ready skills.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/contact" variant="primary">Book Free Consultation</Button>
                <Button to="/courses" variant="outline">Explore Courses</Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-brand-light dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 h-full border border-gray-100 dark:border-gray-700">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-3">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  To simplify GST and Income Tax compliance for businesses, professionals, and individuals in India through expert consulting, practical education, and trustworthy advisory services — making compliance a strength, not a burden.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 h-full border border-gray-100 dark:border-gray-700">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-3">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  To become Pune's most trusted name in taxation and compliance — building a community of tax-literate entrepreneurs, educated professionals, and financially empowered citizens who can navigate India's tax system with confidence.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading eyebrow="Expertise" title="Areas of Specialization" center />
          </AnimatedSection>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-brand-light dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-brand-navy dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-light dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading eyebrow="Why Choose Us" title="The CA Sunil Academy Difference" center />
          </AnimatedSection>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 flex gap-4">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy dark:text-white mb-1 text-sm">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-gray-300 mb-8">Book a free consultation with CA Sunil Udavant and get expert advice on your GST, Income Tax, or compliance matters.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">Book Free Consultation</Button>
            <Button to="/services" variant="white" size="lg">View Our Services</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

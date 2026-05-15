import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'

const services = ['GST Services', 'Income Tax / ITR Filing', 'TDS Compliance', 'Business Registration', 'Accounting Services', 'Courses & Training', 'Other']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _subject: `New Consultation Request from ${form.name} — CA Sunil Academy` }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-brand-navy via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Book a free consultation or reach out with your GST, Income Tax, or compliance questions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection>
                <SectionHeading eyebrow="Reach Us" title="Let's Talk" subtitle="We're available Mon–Sat, 10AM–6PM." />
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: 'Call / WhatsApp', value: '+91 80555 18999', href: 'tel:+918055518999' },
                    { icon: Mail, label: 'Email Us', value: 'contact@casunilacademy.com', href: 'mailto:contact@casunilacademy.com' },
                    { icon: MapPin, label: 'Office Location', value: 'Pune, Maharashtra, India — 411001', href: null },
                    { icon: Clock, label: 'Office Hours', value: 'Mon – Sat: 10:00 AM – 6:00 PM', href: null },
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-start gap-4 p-4 bg-brand-light dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                        <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-brand-gold" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-brand-navy dark:text-white font-semibold text-sm hover:text-brand-gold transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-brand-navy dark:text-white font-semibold text-sm">{item.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </AnimatedSection>

              {/* WhatsApp CTA */}
              <AnimatedSection delay={0.2}>
                <a
                  href="https://wa.me/918055518999?text=Hi%20CA%20Sunil%20Academy%2C%20I%20need%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-4 rounded-xl transition-colors shadow-md"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <p className="text-sm font-bold">Chat on WhatsApp</p>
                    <p className="text-xs text-green-100">Quick replies during office hours</p>
                  </div>
                </a>
              </AnimatedSection>

              {/* Map Placeholder */}
              <AnimatedSection delay={0.3}>
                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Pune, Maharashtra, India</p>
                    <a
                      href="https://maps.google.com/?q=Pune,Maharashtra,India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-gold hover:text-yellow-600 mt-1 inline-block"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.15}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-brand-navy dark:text-white mb-6">Book a Free Consultation</h2>

                {status === 'success' ? (
                  <div className="flex flex-col items-center text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. CA Sunil Udavant will contact you within 24 hours.</p>
                    <button onClick={() => setStatus(null)} className="mt-6 text-brand-gold font-semibold hover:text-yellow-600 text-sm">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Mobile Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Service Required</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
                      >
                        <option value="">Select a service...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Briefly describe your requirement..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold transition resize-none"
                      />
                    </div>
                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        Something went wrong. Please try again or WhatsApp us.
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-brand-gold text-brand-navy font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-60 text-base shadow-md hover:shadow-lg"
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message — Book Free Consultation'}
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      We respond within 24 hours. Your information is completely private.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

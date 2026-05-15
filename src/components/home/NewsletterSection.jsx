import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/REPLACE_WITH_YOUR_NEWSLETTER_FORMSPREE_ID', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, _subject: 'New Newsletter Subscription — CA Sunil Academy' }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-brand-navy to-blue-900 rounded-3xl p-10 text-white text-center">
            <div className="w-14 h-14 bg-brand-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-brand-gold" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Stay Tax-Compliant</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Subscribe to get the latest GST updates, IT news, due date alerts, and free resources delivered to your inbox.
            </p>

            {status === 'success' ? (
              <div className="flex items-center justify-center gap-3 text-green-400 text-lg font-semibold">
                <CheckCircle className="w-6 h-6" />
                You're subscribed! We'll keep you updated.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-60"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
                </button>
              </form>
            )}

            {status === 'error' && (
              <div className="flex items-center justify-center gap-2 text-red-400 text-sm mt-3">
                <AlertCircle className="w-4 h-4" />
                Something went wrong. Please try again.
              </div>
            )}

            <p className="text-gray-500 text-xs mt-4">No spam. Unsubscribe anytime. Tax knowledge only.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

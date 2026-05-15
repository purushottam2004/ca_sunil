import { Play } from 'lucide-react'

function YoutubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'

const placeholderVideos = [
  { title: 'How to File GSTR-3B on GST Portal — Step by Step', duration: '18:24', thumbnail: null },
  { title: 'GST Notice Reply — DRC-01 Explained with Format', duration: '22:15', thumbnail: null },
  { title: 'ITR-1 Filing for Salaried Employees AY 2025-26', duration: '30:42', thumbnail: null },
]

export default function YouTubeSection() {
  return (
    <section className="py-20 bg-brand-light dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="YouTube Channel"
            title="Free Video Tutorials"
            subtitle="Practical GST and Income Tax tutorials — coming soon on our YouTube channel."
            center
          />
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {placeholderVideos.map((video, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
                {/* Thumbnail Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-brand-navy to-blue-900 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-gold text-brand-navy text-xs font-semibold px-2 py-0.5 rounded">Coming Soon</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-brand-navy dark:text-white font-semibold text-sm leading-snug line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">CA Sunil Udavant</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
          >
            <YoutubeIcon className="w-5 h-5" />
            Subscribe on YouTube
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}

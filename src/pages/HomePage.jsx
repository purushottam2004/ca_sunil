import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import GstUpdatesPreview from '@/components/home/GstUpdatesPreview'
import ItUpdatesPreview from '@/components/home/ItUpdatesPreview'
import DueDateAlerts from '@/components/home/DueDateAlerts'
import FeaturedBlogs from '@/components/home/FeaturedBlogs'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import YouTubeSection from '@/components/home/YouTubeSection'
import FreeDownloads from '@/components/home/FreeDownloads'
import FaqPreview from '@/components/home/FaqPreview'
import NewsletterSection from '@/components/home/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <GstUpdatesPreview />
      <ItUpdatesPreview />
      <DueDateAlerts />
      <FeaturedBlogs />
      <TestimonialsSection />
      <YouTubeSection />
      <FreeDownloads />
      <FaqPreview />
      <NewsletterSection />
    </>
  )
}

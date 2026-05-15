import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import TaxTicker from '@/components/layout/TaxTicker'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const HomePage             = lazy(() => import('@/pages/HomePage'))
const AboutPage            = lazy(() => import('@/pages/AboutPage'))
const ServicesPage         = lazy(() => import('@/pages/ServicesPage'))
const GstUpdatesPage       = lazy(() => import('@/pages/GstUpdatesPage'))
const IncomeTaxUpdatesPage = lazy(() => import('@/pages/IncomeTaxUpdatesPage'))
const CoursesPage          = lazy(() => import('@/pages/CoursesPage'))
const StudentCornerPage    = lazy(() => import('@/pages/StudentCornerPage'))
const DownloadsPage        = lazy(() => import('@/pages/DownloadsPage'))
const DueDateCalendarPage  = lazy(() => import('@/pages/DueDateCalendarPage'))
const BlogPage             = lazy(() => import('@/pages/BlogPage'))
const FaqPage              = lazy(() => import('@/pages/FaqPage'))
const ContactPage          = lazy(() => import('@/pages/ContactPage'))

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-brand-gold border-t-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <TaxTicker />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/"                    element={<HomePage />} />
            <Route path="/about"               element={<AboutPage />} />
            <Route path="/services"            element={<ServicesPage />} />
            <Route path="/gst-updates"         element={<GstUpdatesPage />} />
            <Route path="/income-tax-updates"  element={<IncomeTaxUpdatesPage />} />
            <Route path="/courses"             element={<CoursesPage />} />
            <Route path="/student-corner"      element={<StudentCornerPage />} />
            <Route path="/downloads"           element={<DownloadsPage />} />
            <Route path="/due-date-calendar"   element={<DueDateCalendarPage />} />
            <Route path="/blog"                element={<BlogPage />} />
            <Route path="/faq"                 element={<FaqPage />} />
            <Route path="/contact"             element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

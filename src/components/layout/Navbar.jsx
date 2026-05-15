import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, ChevronDown, Phone } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'GST Updates', to: '/gst-updates' },
  { label: 'Income Tax', to: '/income-tax-updates' },
  { label: 'Courses', to: '/courses' },
  { label: 'Student Corner', to: '/student-corner' },
  { label: 'Due Dates', to: '/due-date-calendar' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = [
  { label: 'GST Services', to: '/services#gst' },
  { label: 'Income Tax Services', to: '/services#income-tax' },
  { label: 'Business Compliance', to: '/services#business-compliance' },
  { label: 'Accounting Services', to: '/services#accounting' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [location])

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-gray-900 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'border-b border-gray-100 dark:border-gray-800'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center">
              <span className="text-brand-gold font-bold text-lg">CA</span>
            </div>
            <div className="leading-tight">
              <span className="text-brand-navy dark:text-white font-bold text-lg">Sunil </span>
              <span className="text-brand-gold font-bold text-lg">Academy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-brand-gold' : 'text-gray-700 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-brand-gold' : 'text-gray-700 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                }`
              }
            >
              About
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative" onMouseLeave={() => setIsServicesOpen(false)}>
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => setIsServicesOpen(v => !v)}
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white transition-colors"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50">
                  {serviceLinks.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-brand-gold/10 hover:text-brand-navy dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-gold' : 'text-gray-700 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="tel:+918055518999"
              className="hidden md:flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-navy dark:hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>8055518999</span>
            </a>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-4 py-2 rounded-lg text-sm hover:bg-yellow-500 transition-colors shadow-sm"
            >
              Book Consultation
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(v => !v)}
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 dark:border-gray-800 py-4 space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-gold/10 text-brand-gold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-gold/10 text-brand-gold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`
              }
            >
              About
            </NavLink>
            <Link to="/services" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              Services
            </Link>
            {navLinks.slice(2).map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-brand-gold/10 text-brand-gold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2 px-4">
              <Link
                to="/contact"
                className="block w-full text-center bg-brand-gold text-brand-navy font-semibold px-4 py-3 rounded-lg text-sm hover:bg-yellow-500 transition-colors"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

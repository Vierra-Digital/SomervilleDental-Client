'use client'

import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface HeaderProps {
  onScheduleClick?: () => void
}

export default function Header({ onScheduleClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-800 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a
                href="https://maps.google.com/?q=3+Ashland+Street+Medford+MA+02155"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-white transition-all duration-300 group"
              >
                <MapPin className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative">
                  3 Ashland Street Medford, MA 02155
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:+17818741630"
                className="flex items-center gap-2 text-white hover:text-white transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative">
                  (+1) (781)-(874)-(1630)
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <span className="text-primary-400">|</span>
              <a
                href="mailto:somervilledental@verizon.net"
                className="flex items-center gap-2 text-white hover:text-white transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative">
                  somervilledental@verizon.net
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f0f0f0] shadow-lg'
            : 'bg-[#f0f0f0]'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl tracking-normal"
            >
              <span className="font-bold text-secondary-900">Somerville</span>{' '}
              <span className="font-normal text-secondary-700">Dental</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-secondary-800 hover:text-primary-600 font-medium transition-all duration-300 relative group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  onScheduleClick?.()
                }}
                className="bg-primary-800 hover:bg-primary-900 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-xl group"
              >
                <span>Schedule Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-secondary-800 hover:text-primary-600 transition-all duration-300 hover:scale-110 hover:rotate-90"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-secondary-200 pt-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href)
                      setIsMobileMenuOpen(false)
                    }}
                    className="text-secondary-800 hover:text-primary-600 font-medium transition-all duration-300 py-2 hover:translate-x-2 hover:scale-105"
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    onScheduleClick?.()
                    setIsMobileMenuOpen(false)
                  }}
                  className="bg-primary-800 hover:bg-primary-900 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl mt-2 group"
                >
                  <span>Schedule Appointment</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}


'use client'

import { useState } from 'react'
import Script from 'next/script'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import OfficeHours from '@/components/OfficeHours'
import Footer from '@/components/Footer'
import AppointmentModal from '@/components/AppointmentModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <main className="min-h-screen">
        <Header onScheduleClick={() => setIsModalOpen(true)} />
        <Hero onScheduleClick={() => setIsModalOpen(true)} />
        <AboutUs />
        <Services onScheduleClick={() => setIsModalOpen(true)} />
        <Features />
        <Testimonials />
        <OfficeHours />
        <Footer />
      </main>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* SEO: Structured Data for FAQ if needed */}
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What services does Somerville Dental Associates offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We offer comprehensive dental services including exams & cleanings, cosmetic & restorative dentistry, dental implants, emergency dentistry, dentures, and teeth whitening.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where is Somerville Dental Associates located?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We are located at 3 Ashland Street, Medford, MA 02155, serving patients in Somerville, Medford, Cambridge, and surrounding areas.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are your office hours?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We are open Monday through Friday from 8:00 AM to 5:00 PM. We are closed on weekends.',
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}

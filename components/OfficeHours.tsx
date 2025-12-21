'use client'

import { Clock } from 'lucide-react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const officeHours = [
  { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' },
]

export default function OfficeHours() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const mapRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Visit Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Hours & Location
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Office Hours */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-2xl p-8 border-2 border-secondary-200 shadow-lg hover:border-primary-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center group-hover:bg-primary-700 group-hover:scale-110 transition-all duration-300">
                  <Clock className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300">Hours</h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-secondary-200 last:border-0"
                  >
                    <span className="font-medium text-secondary-900">{schedule.day}</span>
                    <span className={`font-semibold ${
                      schedule.hours === 'Closed' 
                        ? 'text-secondary-500' 
                        : 'text-primary-600'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            ref={mapRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            style={{ y }}
            className="rounded-2xl overflow-hidden shadow-xl border border-secondary-200"
          >
            <div className="relative w-full h-full" style={{ paddingBottom: '100%', minHeight: '400px' }}>
              <iframe
                src="https://www.google.com/maps?q=Somerville+Dental+Associates+3+Ashland+Street+Medford+MA+02155&output=embed"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Somerville Dental Associates Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

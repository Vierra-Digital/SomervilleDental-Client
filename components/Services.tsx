'use client'

import React from 'react'
import { Search, Sparkles, Wrench, Zap, Smile, Sun, ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'

interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Search,
    title: 'Exams & Dental Hygienes',
    description:
      'Regular dental exams and professional cleanings are essential for maintaining optimal oral health and preventing dental problems before they develop.',
  },
  {
    icon: Sparkles,
    title: 'Cosmetics & Restorative',
    description:
      'Transform your smile with our comprehensive cosmetic and restorative dentistry services, including veneers, crowns, and fillings.',
  },
  {
    icon: Wrench,
    title: 'Implants',
    description:
      'Permanent tooth replacement solutions that look and feel natural, restoring both function and aesthetics to your smile.',
  },
  {
    icon: Zap,
    title: 'Emergency Dentistry',
    description:
      'Dental emergencies can happen at any time. We provide prompt, compassionate care when you need it most.',
  },
  {
    icon: Smile,
    title: 'Dentures',
    description:
      'Custom-fitted dentures designed for comfort and functionality, helping you regain confidence in your smile and ability to eat.',
  },
  {
    icon: Sun,
    title: 'Teeth Whitening',
    description:
      'Professional teeth whitening treatments to brighten your smile and boost your confidence with lasting results.',
  },
]

interface ServicesProps {
  onScheduleClick?: () => void
}

export default function Services({ onScheduleClick }: ServicesProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-white to-secondary-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Most Insurances Accepted
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            What Can We Do?
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Contact us for more details and specifications. Don't see what you're looking for? Just
            ask us!
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-secondary-100 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-6 transition-all duration-300 group-hover:bg-primary-700 group-hover:scale-110">
                <service.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">{service.title}</h3>
              <p className="text-secondary-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <button
            onClick={(e) => {
              e.preventDefault()
              onScheduleClick?.()
            }}
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Calendar className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span className="relative z-10">Schedule Appointment</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

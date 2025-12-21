'use client'

import React from 'react'
import { Shield, MessageCircle, Microscope } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'

interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Shield,
    title: 'Preventive Guidance',
    description:
      'We provide comprehensive preventive care and education to help you maintain optimal oral health and prevent dental issues before they arise.',
  },
  {
    icon: MessageCircle,
    title: 'Friendly Service',
    description:
      "Our warm, welcoming team creates a comfortable environment where you'll feel at ease from the moment you walk through our doors.",
  },
  {
    icon: Microscope,
    title: 'Dental Technology',
    description:
      'We utilize the latest dental technology and techniques to ensure precise diagnoses and effective, efficient treatments.',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Quality Dental Services
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Our dentists provide a range of services for people of all ages and needs to keep their teeth and
            gums healthy for life.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-6 transition-all duration-300 group-hover:bg-primary-700 group-hover:scale-110">
                <feature.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3 transition-colors duration-300 group-hover:text-primary-600">{feature.title}</h3>
              <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

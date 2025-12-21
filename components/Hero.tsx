'use client'

import { ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations'

interface HeroProps {
  onScheduleClick?: () => void
}

export default function Hero({ onScheduleClick }: HeroProps) {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])

  return (
    <section className="relative bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="space-y-8"
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <motion.p
                className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
                variants={fadeInUp}
              >
                Quality Dental Health Is
              </motion.p>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-6"
                variants={fadeInUp}
              >
                Comfortable And Traditional General And Cosmetic Dentistry
              </motion.h1>
              <motion.p
                className="text-lg text-secondary-600 leading-relaxed max-w-2xl"
                variants={fadeInUp}
              >
                At Somerville Dental Associates, our dental staff strives to make your experience
                as comfortable as possible to ensure you get the quality dental care you require.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <button
                onClick={(e) => {
                  e.preventDefault()
                  onScheduleClick?.()
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Calendar className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="relative z-10">Schedule Appointment</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
              <Link
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#services')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="bg-transparent hover:bg-transparent text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary-700 hover:text-primary-700 group"
              >
                <span>Our Services</span>
                <span className="inline-block w-0 overflow-hidden transition-all duration-300 group-hover:w-5 group-hover:ml-2">
                  <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Image with Parallax */}
          <motion.div
            style={{ y: y1 }}
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm">
              <div className="aspect-[4/5] w-full relative">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop&crop=face"
                  alt="Happy patient smiling at Somerville Dental Associates dental office in Medford, MA"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

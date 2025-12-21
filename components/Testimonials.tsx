'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp } from '@/lib/animations'

interface Testimonial {
  name: string
  quote: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Mack Q.',
    quote:
      'Dr. Shick doesn\'t waste your time. I\'ve always been pleased with the thorough, yet efficient, cleanings he provides. He gave me great advice on how to maintain my teeth while wearing braces and helped me buy a great brush. He NEVER suggested that I get fillings or other dental work when it wasn\'t necessary.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Dave M.',
    quote:
      'I\'m not a big fan of going to the dentist but going to Dr Shick is easy and painless. I recently went for a cleaning and root planing and it couldn\'t have gone better. Friendly receptionist and a professional staff made me feel at ease the whole time. If you live in the Somerville area I would definitely recommend going here!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Brittany C.',
    quote:
      'Dr. Shick does work quickly like other reviewers mention. I never minded this because I\'ve never had a cavity (*knock on wood*) and just go to get a standard cleaning. So for me, the less time at the dentist, the better. Plus, he\'s cute, which eases the pain of being at the dentist.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'John M.',
    quote:
      'Dr Shick is the best! He\'s hands down the most efficient dentist I\'ve ever had and he does a really good job with cleanings. He\'s also no BS; doesn\'t try to talk you into unnecessary crazy (expensive) treatments. He\'s a total straight shooter.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Dianna M.',
    quote:
      'Dr. Paul Shick at Somerville Dental Associates is my dentist! Dr. Shick is very knowledgeable and an up to date dentist. I personally find him to be very concerned for his patient\'s comfort when he is doing a procedure and he and his office staff are very caring about their patients.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Scott M.',
    quote:
      'I\'ve been seeing Dr. Shick for probably around 10 years now and he\'s seen me through half a dozen fillings, two crowns, and a cracked tooth. All of them turned out excellent and I\'ve had no problems with any of his work.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Get the current 3 testimonials to display
  const getCurrentTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  const currentTestimonials = getCurrentTestimonials()

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-secondary-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            See What Others Have To Say!
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Want to see more testimonials? Check out our{' '}
            <a
              href="https://www.yelp.com/biz/somerville-dental-associates-medford?osq=Somerville+Dental+Associates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              Yelp page
            </a>{' '}
            where you can view more about what others had to say about us.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
            <motion.div
              key={currentIndex}
              initial={{ x: 'calc(100% / 3)' }}
              animate={{ x: 0 }}
              transition={{ 
                duration: 0.7,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="grid md:grid-cols-3 gap-8"
            >
              {currentTestimonials.map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-secondary-100 flex flex-col h-full"
                >
                  <Quote className="w-10 h-10 text-primary-200 mb-4 flex-shrink-0" />
                  <p className="text-secondary-700 mb-6 leading-relaxed italic flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name}, patient at Somerville Dental Associates`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-secondary-900">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

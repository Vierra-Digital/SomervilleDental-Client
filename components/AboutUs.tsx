'use client'

import Image from 'next/image'
import { Heart, Users, Award } from 'lucide-react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const teamRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: teamRef,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const teamMembers = [
    {
      name: 'Dr. Paul K. Shick',
      role: 'Founder & Dentist',
      image: '/assets/Paul.png',
    },
    {
      name: 'Deanna M.',
      role: 'Office Manager',
      image: '/assets/Deanna.png',
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Patient Comfort',
      description: 'We prioritize your comfort throughout every visit.',
    },
    {
      icon: Users,
      title: 'Building Relationships',
      description: 'We build trust and lasting friendships with our patients.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to long-term dental health and beautiful smiles.',
    },
  ]

  return (
    <section id="about" className="pt-20 pb-10 lg:pt-32 lg:pb-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our Mission
          </h2>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <div className="prose prose-lg mx-auto text-secondary-600 space-y-6">
            <p className="text-lg leading-relaxed">
              Going to the dentist can be an amazing experience when you choose a dental office that takes the patients' comfort into consideration. We are a traditional general and cosmetic dental office, who can provide you with all the dental care you require to keep your smile healthy and beautiful.
            </p>
            <p className="text-lg leading-relaxed">
              Our goal at Somerville Dental Associates is to assist each patient in achieving and maintaining long-term dental health and a beautiful smile. We are happy to serve our neighbors in and around our surrounding areas with exceptional dental care.
            </p>
            <p className="text-lg leading-relaxed">
              We value the trust that you place in us to manage your dental care, and we work hard to continue to earn that trust every time you visit. At Somerville Dental Associates you will be treated as family.
            </p>
            <p className="text-lg leading-relaxed">
              Part of our commitment to serving our patients includes providing information that helps them to make more informed decisions about their oral health needs. Our experienced and friendly staff takes great pride in making sure you are well informed with the recommend treatment and how your insurance will factor into your treatment. We look forward to not only helping keep your smile healthy and beautiful but also to building great friendships with our patients.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-32"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="text-center p-8 rounded-2xl bg-white border-2 border-secondary-200 hover:border-primary-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-6 transition-all duration-300 group-hover:bg-primary-700 group-hover:scale-110">
                <value.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3 transition-colors duration-300 group-hover:text-primary-600">{value.title}</h3>
              <p className="text-secondary-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <motion.div
          ref={teamRef}
          className="text-center mb-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-12">Meet Our Team</h2>
          <motion.div
            style={{ y }}
            className="flex flex-col md:flex-row justify-center gap-16 max-w-3xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="flex flex-col items-center group"
              >
                <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl mb-4 ring-2 ring-secondary-200 group-hover:ring-primary-400 transition-all duration-300 group-hover:shadow-2xl">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Somerville Dental Associates`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-1">{member.name}</h4>
                <p className="text-primary-600 font-medium text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

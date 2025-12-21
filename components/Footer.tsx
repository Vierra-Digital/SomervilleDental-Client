'use client'

import Image from 'next/image'
import { Facebook, MapPin, Phone, Mail, Map, Star } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/somervilledental/' },
    { name: 'Google Business', icon: Map, href: 'https://www.google.com/maps/place/Paul+K.+Shick+D.M.D.,+P.C+Somerville+Dental+Associates/@42.4186879,-71.1105412,17z/data=!3m1!4b1!4m6!3m5!1s0x89e3771f7ea2147d:0xbf8daff0af4bec16!8m2!3d42.418684!4d-71.1079663!16s%2Fg%2F1tftxzgp!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D' },
    { name: 'Yelp', icon: Star, href: 'https://www.yelp.com/biz/somerville-dental-associates-medford?osq=Somerville+Dental+Associates' },
  ]

  return (
    <>
      <footer id="contact" className="bg-secondary-900 text-white" ref={ref}>
        <div className="container mx-auto px-4 py-10">
          <motion.div
            className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Brand Column */}
            <motion.div className="text-center md:text-left" variants={fadeInUp}>
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <Image
                  src="/tooth-icon.png"
                  alt="Somerville Dental Associates logo - dental practice in Medford, MA"
                  width={36}
                  height={36}
                  className="object-contain"
                />
                <span className="text-2xl text-white">
                  <span className="font-bold">Somerville</span>{' '}
                  <span className="font-normal">Dental</span>
                </span>
              </div>
              <p className="text-secondary-400 text-sm leading-relaxed">
                Quality dental health is comfortable and traditional general and cosmetic dentistry.
              </p>
            </motion.div>
              
            {/* Contact Info */}
            <motion.div className="text-center md:text-left" variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2.5">
                <a
                  href="https://maps.google.com/?q=3+Ashland+Street+Medford+MA+02155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-secondary-300 hover:text-white transition-all duration-300 group justify-center md:justify-start text-sm hover:translate-x-1"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative">
                    3 Ashland Street Medford, MA 02155
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a
                  href="tel:+17818741630"
                  className="flex items-center gap-3 text-secondary-300 hover:text-white transition-all duration-300 group justify-center md:justify-start text-sm hover:translate-x-1"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative">
                    (+1) (781)-(874)-(1630)
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <a
                  href="mailto:somervilledental@verizon.net"
                  className="flex items-center gap-3 text-secondary-300 hover:text-white transition-all duration-300 group justify-center md:justify-start text-sm hover:translate-x-1"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative">
                    somervilledental@verizon.net
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div className="text-center md:text-left" variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3 justify-center md:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </footer>

      {/* Subfooter */}
      <div className="bg-secondary-900 text-secondary-400 py-6 border-t border-secondary-800">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2">
            <p className="text-sm">
              © Somerville Dental Associates, All rights reserved
            </p>
            <p className="text-sm">
              Powered by{' '}
              <a
                href="https://vierradev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B46C1] hover:text-[#7C3AED] font-medium transition-colors"
              >
                Vierra Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

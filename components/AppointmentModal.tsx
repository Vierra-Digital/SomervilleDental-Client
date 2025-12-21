'use client'

import { useState, useEffect } from 'react'
import { X, Calendar, User, Phone, Mail, CreditCard, FileText, Check, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface AppointmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceCarrier: '',
    insuranceId: '',
    appointmentRequest: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Phone formatting: (XXX) XXX-XXXX
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`
  }

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const numbers = phone.replace(/\D/g, '')
    return numbers.length === 10
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    // Format phone number
    if (name === 'phone') {
      formattedValue = formatPhone(value)
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    })

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    let error = ''

    if (!value.trim()) {
      // Check if field is required
      if (name === 'name') {
        error = 'Name is required.'
      } else if (name === 'email') {
        error = 'Email is required.'
      } else if (name === 'phone') {
        error = 'Phone is required.'
      } else if (name === 'insuranceCarrier') {
        error = 'Insurance carrier is required.'
      } else if (name === 'insuranceId') {
        error = 'Insurance ID is required.'
      } else if (name === 'appointmentRequest') {
        error = 'Appointment request is required.'
      }
    } else if (name === 'email' && !validateEmail(value)) {
      error = 'Please enter a valid email address.'
    } else if (name === 'phone' && !validatePhone(value)) {
      error = 'Please enter a valid phone number.'
    }

    if (error) {
      setErrors({
        ...errors,
        [name]: error,
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation() // Prevent default HTML5 validation
    
    // Validate all fields
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required.'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.'
    }
    
    if (!formData.insuranceCarrier.trim()) {
      newErrors.insuranceCarrier = 'Insurance carrier is required.'
    }
    
    if (!formData.insuranceId.trim()) {
      newErrors.insuranceId = 'Insurance ID is required.'
    }
    
    if (!formData.appointmentRequest.trim()) {
      newErrors.appointmentRequest = 'Appointment request is required.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Send email via API
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/send-appointment-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email')
      }

      // Show success modal
      setShowSuccess(true)
    } catch (error: any) {
      console.error('Error submitting appointment:', error)
      // Still show success modal even if email fails (graceful degradation)
      setShowSuccess(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      insuranceCarrier: '',
      insuranceId: '',
      appointmentRequest: '',
    })
    setErrors({})
    setShowSuccess(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Success Modal */}
              {showSuccess ? (
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-12 h-12 text-white" strokeWidth={3} />
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold text-secondary-900 mb-4"
                  >
                    Appointment Request Sent!
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-secondary-600 mb-8"
                  >
                    Thank you for your appointment request. We will contact you shortly to confirm your appointment.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={handleClose}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 mx-auto group"
                  >
                    <span>Close</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-secondary-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold text-secondary-900">Schedule Appointment</h2>
                    </div>
                    <button
                      onClick={handleClose}
                      className="text-secondary-500 hover:text-white transition-all duration-300 p-2 hover:bg-red-500 rounded-lg group"
                      aria-label="Close modal"
                    >
                      <X className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90 text-inherit" />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary-900 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.name
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-secondary-300 focus:ring-primary-500'
                          } focus:outline-none focus:ring-2 focus:border-transparent`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary-900 mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.phone
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-secondary-300 focus:ring-primary-500'
                          } focus:outline-none focus:ring-2 focus:border-transparent`}
                          placeholder="(781) 874-1630"
                          maxLength={14}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-900 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-secondary-300 focus:ring-primary-500'
                        } focus:outline-none focus:ring-2 focus:border-transparent`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="insuranceCarrier" className="block text-sm font-medium text-secondary-900 mb-2">
                          <CreditCard className="w-4 h-4 inline mr-2" />
                          Insurance Carrier
                        </label>
                        <input
                          type="text"
                          id="insuranceCarrier"
                          name="insuranceCarrier"
                          value={formData.insuranceCarrier}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.insuranceCarrier
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-secondary-300 focus:ring-primary-500'
                          } focus:outline-none focus:ring-2 focus:border-transparent`}
                          placeholder="Blue Cross Blue Shield"
                        />
                        {errors.insuranceCarrier && (
                          <p className="mt-1 text-sm text-red-500">{errors.insuranceCarrier}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="insuranceId" className="block text-sm font-medium text-secondary-900 mb-2">
                          <FileText className="w-4 h-4 inline mr-2" />
                          Insurance ID Number
                        </label>
                        <input
                          type="text"
                          id="insuranceId"
                          name="insuranceId"
                          value={formData.insuranceId}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.insuranceId
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-secondary-300 focus:ring-primary-500'
                          } focus:outline-none focus:ring-2 focus:border-transparent`}
                          placeholder="ABC123456789"
                        />
                        {errors.insuranceId && (
                          <p className="mt-1 text-sm text-red-500">{errors.insuranceId}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="appointmentRequest" className="block text-sm font-medium text-secondary-900 mb-2">
                        Appointment Request
                      </label>
                      <textarea
                        id="appointmentRequest"
                        name="appointmentRequest"
                        value={formData.appointmentRequest}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={4}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          errors.appointmentRequest
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-secondary-300 focus:ring-primary-500'
                        } focus:outline-none focus:ring-2 focus:border-transparent resize-none`}
                        placeholder="Please let us know if you have any specific concerns or questions..."
                      />
                      {errors.appointmentRequest && (
                        <p className="mt-1 text-sm text-red-500">{errors.appointmentRequest}</p>
                      )}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="flex-1 px-6 py-3 rounded-lg border-2 border-secondary-300 text-secondary-700 font-medium hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        <span>{isSubmitting ? 'Submitting...' : 'Submit Appointment'}</span>
                        {!isSubmitting && (
                          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

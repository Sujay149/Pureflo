'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  phone: string
  email: string
  location: string
  tankCapacity: string
  message: string
}

export function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    location: '',
    tankCapacity: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const tankCapacities = ['500L', '1000L', '1500L', '2000L', '3000L', 'Other']

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/submit-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit enquiry')
      }

      const data = await response.json()
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        tankCapacity: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'An error occurred. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="enquiry" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark-blue mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about our water tanks? Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            variants={itemVariants}
            className="bg-light-bg rounded-2xl border border-border p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-green-900">Enquiry Submitted!</h4>
                    <p className="text-sm text-green-700">
                      Thank you for your interest. We'll contact you soon.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-red-900">Submission Error</h4>
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                </motion.div>
              )}

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-blue mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-blue mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-blue mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </motion.div>

                {/* Location */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="location" className="block text-sm font-medium text-dark-blue mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="City, State"
                  />
                </motion.div>

                {/* Tank Capacity */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="tankCapacity" className="block text-sm font-medium text-dark-blue mb-2">
                    Tank Capacity Needed *
                  </label>
                  <select
                    id="tankCapacity"
                    name="tankCapacity"
                    value={formData.tankCapacity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select a capacity</option>
                    {tankCapacities.map((capacity) => (
                      <option key={capacity} value={capacity}>
                        {capacity}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-dark-blue mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about your water storage needs..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-white rounded-lg font-poppins font-bold text-base hover:bg-dark-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </motion.div>

              {/* Terms */}
              <motion.p
                variants={itemVariants}
                className="text-xs text-gray-600 text-center"
              >
                By submitting this form, you agree to our Terms of Service and Privacy Policy.
              </motion.p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

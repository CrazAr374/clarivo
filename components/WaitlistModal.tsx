'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, User, Briefcase, Send } from 'lucide-react'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    useCase: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const subject = 'Clarivo Waitlist - New Registration'
      const body = `
New Waitlist Registration:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Role: ${formData.role}
Use Case: ${formData.useCase}

Please add this user to the Clarivo waitlist.
      `.trim()

      const mailtoLink = `mailto:atharva.rahate374@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Mark as submitted
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          useCase: ''
        })
        onClose()
      }, 3000)

    } catch (error) {
      console.error('Error submitting waitlist form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const roles = [
    'Data Analyst',
    'Business Analyst',
    'Data Scientist',
    'Marketing Manager',
    'Product Manager',
    'Operations Manager',
    'Consultant',
    'Researcher',
    'Student',
    'Other'
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-morphism rounded-2xl p-8 w-full max-w-md backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-neutral-light mb-2">
                  Join the <span className="text-gradient">Waitlist</span>
                </h2>
                <p className="text-neutral-light/70 text-sm">
                  Be among the first to experience Clarivo&apos;s AI-powered data analysis
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 glass-morphism rounded-full flex items-center justify-center text-neutral-light/70 hover:text-neutral-light transition-colors duration-300"
              >
                <X size={18} />
              </button>
            </div>

            {isSubmitted ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-light mb-2">
                  Thank You!
                </h3>
                <p className="text-neutral-light/70 text-sm">
                  Your email client should open shortly. We&apos;ll be in touch soon with updates about Clarivo!
                </p>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-light/80 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-light/50" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full glass-morphism rounded-lg pl-11 pr-4 py-3 text-neutral-light placeholder-neutral-light/50 focus:ring-2 focus:ring-accent-secondary focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-light/80 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-light/50" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full glass-morphism rounded-lg pl-11 pr-4 py-3 text-neutral-light placeholder-neutral-light/50 focus:ring-2 focus:ring-accent-secondary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-light/80 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <Briefcase size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-light/50" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full glass-morphism rounded-lg pl-11 pr-4 py-3 text-neutral-light placeholder-neutral-light/50 focus:ring-2 focus:ring-accent-secondary focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-neutral-light/80 mb-2">
                    Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full glass-morphism rounded-lg px-4 py-3 text-neutral-light focus:ring-2 focus:ring-accent-secondary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your role</option>
                    {roles.map((role) => (
                      <option key={role} value={role} className="bg-neutral-dark text-neutral-light">
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Use Case */}
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-neutral-light/80 mb-2">
                    What would you use Clarivo for?
                  </label>
                  <textarea
                    id="useCase"
                    name="useCase"
                    rows={3}
                    value={formData.useCase}
                    onChange={handleInputChange}
                    className="w-full glass-morphism rounded-lg px-4 py-3 text-neutral-light placeholder-neutral-light/50 focus:ring-2 focus:ring-accent-secondary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your data analysis needs..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Joining Waitlist...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Join Waitlist</span>
                    </>
                  )}
                </motion.button>

                {/* Trust Indicators */}
                <div className="text-center pt-4">
                  <div className="flex items-center justify-center space-x-4 text-xs text-neutral-light/60">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>No spam</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>Early access</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span>Free beta</span>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WaitlistModal
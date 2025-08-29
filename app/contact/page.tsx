'use client'

import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  Github, 
  Linkedin,
  Send,
  MessageCircle,
  Users,
  Building,
  HelpCircle,
  ChevronDown
} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  })

  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'atharva.rahate374@gmail.com',
      link: 'mailto:atharva.rahate374@gmail.com',
      description: 'General inquiries and support',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'CrazAr374',
      link: 'https://github.com/CrazAr374',
      description: 'View code and contribute to projects',
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Atharva Rahate',
      link: 'https://www.linkedin.com/in/atharvarahate',
      description: 'Professional network and updates',
      gradient: 'from-blue-600 to-indigo-600',
    },
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Question', icon: MessageCircle },
    { value: 'support', label: 'Technical Support', icon: HelpCircle },
    { value: 'partnership', label: 'Partnership', icon: Users },
    { value: 'enterprise', label: 'Enterprise Sales', icon: Building },
  ]

  const faqs = [
    {
      question: 'Is Clarivo completely free?',
      answer: 'Clarivo offers a free tier with basic functionality including dataset uploads up to 10MB, basic visualizations, and limited AI queries. Our Pro and Enterprise plans offer expanded capabilities for larger datasets and advanced features.'
    },
    {
      question: 'What platforms does Clarivo support?',
      answer: 'Clarivo is available as a web application that works on all modern browsers across Windows, macOS, and Linux systems. We also offer desktop applications for enhanced performance with large datasets.'
    },
    {
      question: 'How secure is my data?',
      answer: 'Your data security is our top priority. All data processing happens locally on your machine or in your private cloud environment. We never store or access your actual data - only metadata for improving the user experience.'
    },
    {
      question: 'Can I integrate Clarivo with my existing tools?',
      answer: 'Yes! Clarivo supports integrations with popular tools like Excel, Google Sheets, SQL databases, Slack, and many others. Our API also allows for custom integrations with your existing workflow.'
    },
    {
      question: 'What file formats does Clarivo support?',
      answer: 'Clarivo supports CSV, Excel (XLS/XLSX), JSON, SQL database connections, Google Sheets, and many other common data formats. We\'re constantly adding support for new formats based on user feedback.'
    },
    {
      question: 'Do you offer training or onboarding?',
      answer: 'Yes! We provide comprehensive onboarding for all new users, including video tutorials, documentation, and personalized training sessions for Enterprise customers. Our support team is always ready to help.'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form or show success message
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Get In Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-light/80 max-w-4xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Reach out with questions, feedback, 
              or partnership inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Methods */}
      <section className="py-24 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-morphism rounded-2xl p-8 backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-neutral-light mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-light mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full glass-morphism rounded-lg px-4 py-3 text-neutral-light placeholder-neutral-light/50 focus:ring-2 focus:ring-accent-secondary focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-light mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full glass-morphism rounded-lg px-4 py-3 text-neutral-light placeholder-neutral-light/50 focus:ring-2 focus:ring-accent-secondary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-neutral-light mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full glass-morphism rounded-lg px-4 py-3 text-neutral-light bg-transparent focus:ring-2 focus:ring-accent-secondary focus:border-transparent transition-all duration-300"
                    >
                      <option value="" disabled className="bg-neutral-dark">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-neutral-dark">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-light mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full glass-morphism rounded-lg px-4 py-3 text-neutral-light placeholder-neutral-light/50 focus:ring-2 focus:ring-accent-secondary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-neutral-light mb-6">
                  Other Ways to Connect
                </h2>
                <p className="text-neutral-light/70 mb-8">
                  Choose the communication method that works best for you.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    className="block"
                  >
                    <div className="glass-morphism rounded-2xl p-6 transition-all duration-300 hover:bg-white/15">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center`}>
                          <method.icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-neutral-light mb-1">
                            {method.label}
                          </h3>
                          <p className="text-accent-secondary font-medium mb-1">
                            {method.value}
                          </p>
                          <p className="text-neutral-light/70 text-sm">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Response Time Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass-morphism rounded-2xl p-6 backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold text-neutral-light mb-3">
                  Response Times
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-light/70">General Inquiries:</span>
                    <span className="text-accent-secondary">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-light/70">Technical Support:</span>
                    <span className="text-accent-secondary">4-8 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-light/70">Enterprise Sales:</span>
                    <span className="text-accent-secondary">2 hours</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-neutral-light/70 max-w-3xl mx-auto">
              Find answers to common questions about Clarivo and our platform.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div className="glass-morphism rounded-2xl overflow-hidden backdrop-blur-xl">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-neutral-light pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      size={24} 
                      className={`text-neutral-light/70 transform transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: openFAQ === index ? 'auto' : 0,
                      opacity: openFAQ === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-neutral-light/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
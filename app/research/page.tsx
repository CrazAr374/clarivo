'use client'

import { useState } from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { FileText, Users, Calendar, BookOpen, MessageCircle, ExternalLink } from 'lucide-react'

const ResearchPage = () => {
  const [hasViewed, setHasViewed] = useState(false)

  const sendWhatsAppMessage = () => {
    const phoneNumber = '+918149812710'
    const message = 'Hey hi i would like to see the research paper and would like to contribute'
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    setHasViewed(true)
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
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="text-accent-secondary mr-4" size={48} />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-gradient">Research</span>{' '}
                <span className="text-neutral-light">Paper</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-neutral-light/80 max-w-4xl mx-auto leading-relaxed">
              Discover the technical foundations and innovative approaches behind Clarivo&apos;s 
              AI-powered data analysis platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* PDF Preview Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-morphism p-8 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-neutral-light">Paper Preview</h2>
                  <div className="flex items-center space-x-2 text-accent-secondary">
                    <FileText size={20} />
                    <span className="text-sm font-medium">First Page Only</span>
                  </div>
                </div>
                
                {/* PDF Preview Container */}
                <div className="relative bg-white rounded-lg overflow-hidden shadow-lg border-4 border-white/10">
                  <div className="relative h-[600px] md:h-[700px]">
                    <iframe
                      src="/Clarivo{Research}.pdf#page=1&toolbar=0&navpanes=0&scrollbar=0&zoom=fit&view=FitH"
                      width="100%"
                      height="100%"
                      className="border-0"
                      title="Clarivo Research Paper Preview - Page 1 Only"
                      style={{ pointerEvents: 'none' }}
                    />
                    
                    {/* Overlay to prevent interaction */}
                    <div className="absolute inset-0 bg-transparent" style={{ pointerEvents: 'auto' }} />
                  </div>
                  
                  {/* Preview Watermark */}
                  <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    📄 Research Paper Preview
                  </div>
                  
                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                    <div className="text-center text-white">
                      <p className="text-lg font-semibold mb-2">Interested in our research?</p>
                      <p className="text-sm opacity-90">Contact us via WhatsApp to learn more and contribute to the project.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Paper Information Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Paper Details */}
              <div className="glass-morphism p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-neutral-light mb-6 flex items-center">
                  <FileText className="mr-3 text-accent-secondary" size={24} />
                  Paper Details
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-neutral-light font-medium mb-1">Title</p>
                    <p className="text-neutral-light/80 text-sm leading-relaxed">
                      Clarivo: AI-Powered Data Analysis Platform - Democratizing Advanced Analytics
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="text-accent-secondary" size={18} />
                    <div>
                      <p className="text-neutral-light font-medium">Authors</p>
                      <p className="text-neutral-light/80 text-sm">Atharva Rahate, Sarthak Nandre</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-accent-secondary" size={18} />
                    <div>
                      <p className="text-neutral-light font-medium">Publication</p>
                      <p className="text-neutral-light/80 text-sm">2025</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Abstract */}
              <div className="glass-morphism p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-neutral-light mb-4">Abstract</h3>
                <p className="text-neutral-light/80 text-sm leading-relaxed">
                  This research paper presents Clarivo, an innovative AI-powered data analysis platform 
                  designed to democratize data insights. We explore the technical architecture, machine 
                  learning algorithms, and user experience design principles that make complex data analysis 
                  accessible to users without technical expertise.
                </p>
              </div>

              {/* Contact Section */}
              <div className="glass-morphism p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-neutral-light mb-4 flex items-center">
                  <MessageCircle className="mr-3 text-accent-secondary" size={24} />
                  Interested in Contributing?
                </h3>
                <p className="text-neutral-light/80 text-sm mb-6 leading-relaxed">
                  Want to learn more about our research or contribute to the project? 
                  Get in touch with our research team directly.
                </p>
                
                <button
                  onClick={sendWhatsAppMessage}
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>Contact via WhatsApp</span>
                </button>
                
                {hasViewed && (
                  <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <p className="text-xs text-green-400 text-center leading-relaxed">
                      ✓ Message sent! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
                
                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <p className="text-xs text-neutral-light/70 text-center leading-relaxed">
                    📱 This will open WhatsApp with a pre-written message to our research team.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ResearchPage
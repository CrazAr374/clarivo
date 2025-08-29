'use client'

import { motion } from 'framer-motion'
import { Brain, Shield, BarChart3, Zap, Users, Award } from 'lucide-react'
import { useWaitlist } from '../hooks/useWaitlist'
import WaitlistModal from './WaitlistModal'

const FeatureHighlights = () => {
  const { isWaitlistOpen, openWaitlist, closeWaitlist } = useWaitlist()
  
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Natural language queries and intelligent insights that understand your data context and provide meaningful recommendations.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data never leaves your machine. Complete privacy and security with local processing capabilities.',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      icon: BarChart3,
      title: 'Smart Visualization',
      description: 'Automatic chart selection based on your data type and analysis goals. Beautiful, interactive visualizations.',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process large datasets instantly with optimized algorithms and intelligent caching mechanisms.',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights, collaborate on analysis, and build data-driven decisions together with your team.',
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      icon: Award,
      title: 'Enterprise Ready',
      description: 'Scalable architecture, advanced security features, and enterprise-grade compliance standards.',
      gradient: 'from-purple-500 to-pink-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  return (
    <section className="py-24 section-padding">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Professionals Choose{' '}
            <span className="text-gradient">Clarivo</span>
          </h2>
          <p className="text-xl text-neutral-light/70 max-w-3xl mx-auto">
            Discover the powerful features that make data analysis accessible, 
            secure, and incredibly efficient for teams of all sizes.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="glass-morphism rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/15">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-neutral-light mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-light/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-light/70 mb-6">
            Ready to transform your data workflow?
          </p>
          <motion.button
            onClick={openWaitlist}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-10 py-5"
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
        
        {/* Waitlist Modal */}
        <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
      </div>
    </section>
  )
}

export default FeatureHighlights
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Animated counter hook
const useCounter = (end: number, duration: number = 2000, isVisible: boolean = false) => {
  const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isVisible])

  return count
}

const StatsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const stats = [
    {
      value: 100,
      suffix: 'MB+',
      label: 'Dataset Support',
      description: 'Handle massive datasets with ease',
      color: 'text-blue-400',
    },
    {
      value: 15,
      suffix: '+',
      label: 'Chart Types',
      description: 'Comprehensive visualization options',
      color: 'text-green-400',
    },
    {
      value: 95,
      suffix: '%',
      label: 'Accuracy',
      description: 'AI-powered precision in analysis',
      color: 'text-purple-400',
    },
    {
      value: 0,
      suffix: '',
      label: 'Data to Cloud',
      description: 'Complete privacy and security',
      color: 'text-pink-400',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
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
          onViewportEnter={() => setIsVisible(true)}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Clarivo</span> by the Numbers
          </h2>
          <p className="text-xl text-neutral-light/70 max-w-3xl mx-auto">
            Discover the impressive capabilities that make Clarivo the preferred choice 
            for data professionals worldwide.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const count = useCounter(stat.value, 2000 + index * 200, isVisible)
            
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="glass-morphism rounded-2xl p-8 text-center h-full transition-all duration-300 hover:bg-white/15">
                  {/* Animated Number */}
                  <div className="mb-4">
                    <div className={`text-5xl md:text-6xl font-bold ${stat.color} mb-2`}>
                      {count}{stat.suffix}
                    </div>
                    <div className="text-xl font-semibold text-neutral-light">
                      {stat.label}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-light/70 text-sm leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Animated Bar */}
                  <div className="mt-6">
                    <div className="w-full h-1 bg-neutral-light/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.2,
                          ease: 'easeOut'
                        }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${
                          index === 0 ? 'from-blue-400 to-blue-600' :
                          index === 1 ? 'from-green-400 to-green-600' :
                          index === 2 ? 'from-purple-400 to-purple-600' :
                          'from-pink-400 to-pink-600'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">50,000+</div>
            <div className="text-neutral-light/70">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">1M+</div>
            <div className="text-neutral-light/70">Datasets Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-neutral-light/70">Uptime Reliability</div>
          </div>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  )
}

export default StatsShowcase
'use client'

import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)
      
      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      
      return () => {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  return (
    <section id="video-demo" className="py-24 section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            See <span className="text-gradient">Clarivo</span> in Action
          </h2>
          <p className="text-xl text-neutral-light/70 max-w-3xl mx-auto">
            Watch how Clarivo transforms complex data analysis into simple, 
            intuitive workflows that anyone can master.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative glass-morphism rounded-3xl p-4 backdrop-blur-xl">
            {/* Video Element */}
            <div className="relative bg-black rounded-2xl aspect-video overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/demo-thumbnail.jpg"
                preload="metadata"
                playsInline
              >
                <source src="/Demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play Button Overlay */}
              {!isPlaying && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 hover:bg-black/20 cursor-pointer"
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl">
                    <Play size={32} className="text-neutral-dark ml-1" fill="currentColor" />
                  </div>
                </motion.button>
              )}

              {/* Video Controls Overlay (when playing) */}
              {isPlaying && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  onClick={handlePlayPause}
                  className="absolute top-4 right-4 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 hover:bg-black/70"
                >
                  <Pause size={20} className="text-white" />
                </motion.button>
              )}

              {/* Video Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="glass-morphism rounded-lg px-3 py-2">
                  <div className="text-sm font-medium text-white">Clarivo Demo</div>
                  <div className="text-xs text-white/70">See how AI transforms your data</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-white/80">2:30</span>
                </div>
              </div>
            </div>

            {/* Video Controls Info */}
            <div className="flex items-center justify-between mt-4 px-2">
              <div className="flex items-center space-x-4">
                <div className="text-sm text-neutral-light/70">Product Demonstration</div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs text-neutral-light/70">HD Quality</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-neutral-light/50">Click to play</span>
              </div>
            </div>
          </div>

          {/* Feature Highlights Around Video */}
          <div className="absolute -top-8 -left-8 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-morphism rounded-xl p-4 backdrop-blur-xl"
            >
              <div className="text-sm font-semibold text-neutral-light mb-1">Upload Any Format</div>
              <div className="text-xs text-neutral-light/70">CSV, Excel, JSON, SQL</div>
            </motion.div>
          </div>

          <div className="absolute -top-8 -right-8 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-morphism rounded-xl p-4 backdrop-blur-xl"
            >
              <div className="text-sm font-semibold text-neutral-light mb-1">Instant Insights</div>
              <div className="text-xs text-neutral-light/70">AI-powered analysis</div>
            </motion.div>
          </div>

          <div className="absolute -bottom-8 -left-8 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-morphism rounded-xl p-4 backdrop-blur-xl"
            >
              <div className="text-sm font-semibold text-neutral-light mb-1">Privacy First</div>
              <div className="text-xs text-neutral-light/70">Data stays local</div>
            </motion.div>
          </div>

          <div className="absolute -bottom-8 -right-8 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-morphism rounded-xl p-4 backdrop-blur-xl"
            >
              <div className="text-sm font-semibold text-neutral-light mb-1">Export Ready</div>
              <div className="text-xs text-neutral-light/70">Multiple formats</div>
            </motion.div>
          </div>
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
            Ready to experience the power of AI-driven data analysis?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Try Live Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoShowcase
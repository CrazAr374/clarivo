'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import { useWaitlist } from '../hooks/useWaitlist'
import WaitlistModal from './WaitlistModal'

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { isWaitlistOpen, openWaitlist, closeWaitlist } = useWaitlist()

  useEffect(() => {
    const initThreeJS = async () => {
      const THREE = await import('three') as typeof import('three')
      
      if (!canvasRef.current) return

      // Scene setup
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current, 
        alpha: true, 
        antialias: true 
      })
      
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      // Create particle system for data visualization
      const particleCount = 2000
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)

      // Color palette based on Clarivo brand
      const colorPalette = [
        new THREE.Color(0x0a2463), // primary
        new THREE.Color(0x3e92cc), // secondary
        new THREE.Color(0xd8315b), // accent
        new THREE.Color(0x2dcce0), // accent-secondary
      ]

      for (let i = 0; i < particleCount; i++) {
        // Position particles in a sphere
        const radius = Math.random() * 5 + 2
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = radius * Math.cos(phi)

        // Assign random colors from palette
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
      })

      const particles = new THREE.Points(geometry, material)
      scene.add(particles)

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
      scene.add(ambientLight)

      // Position camera
      camera.position.z = 10

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate)

        // Rotate particles
        particles.rotation.x += 0.005
        particles.rotation.y += 0.01

        // Animate individual particles
        const positions = particles.geometry.attributes.position.array as Float32Array
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.005
        }
        particles.geometry.attributes.position.needsUpdate = true

        renderer.render(scene, camera)
      }

      animate()

      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        renderer.dispose()
      }
    }

    initThreeJS()
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ background: 'transparent' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark/80 via-primary/20 to-secondary/20" />

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="container-max">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
              <motion.div
                variants={textVariants}
                className="inline-flex items-center justify-center px-3 py-1.5 mb-4 rounded-full text-xs font-semibold tracking-wide glass-morphism text-neutral-light/80"
              >
                AI analysis for teams — fast, private, actionable
              </motion.div>
              <motion.h1
                variants={textVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6"
              >
                <span className="text-neutral-light">Unlock Insights from Your Data with </span>
                <span className="text-gradient">Clarivo</span>
              </motion.h1>

              <motion.p
                variants={textVariants}
                className="text-lg md:text-xl text-neutral-light/80 mb-10 leading-relaxed max-w-3xl mx-auto"
              >
                Ask in plain English. Clarivo cleans, analyzes, and visualizes your spreadsheets in seconds—so you can move from data to decision without SQL or scripts.
              </motion.p>

              <motion.div
                variants={textVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  onClick={openWaitlist}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 49, 91, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center space-x-2 text-lg px-10 py-5 shadow-lg shadow-primary/20"
                >
                  <span>Start Free Analysis</span>
                  <ArrowRight size={20} />
                </motion.button>

                <motion.a
                  href="#video-demo"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center justify-center space-x-2 text-lg px-10 py-5 border border-white/15"
                >
                  <Play size={20} />
                  <span>2-Min Demo</span>
                </motion.a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={textVariants}
                className="mt-8 flex flex-wrap items-center gap-3 justify-center text-sm text-neutral-light/80"
              >
                <div className="glass-morphism px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-400 text-[10px] leading-none text-white rounded-full">✓</span>
                  <span>No credit card required</span>
                </div>
                <div className="glass-morphism px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-400 text-[10px] leading-none text-white rounded-full">✓</span>
                  <span>Data stays private</span>
                </div>
                <div className="glass-morphism px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-4 h-4 bg-green-400 text-[10px] leading-none text-white rounded-full">✓</span>
                  <span>Setup in 30 seconds</span>
                </div>
              </motion.div>

              <motion.div
                variants={textVariants}
                className="mt-12 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 justify-center [&>div:nth-child(n+2)]:md:border-l [&>div:nth-child(n+2)]:md:border-white/10 [&>div:nth-child(n+2)]:md:pl-8"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">100MB+</div>
                  <div className="text-sm text-neutral-light/60">File Size Support</div>
                  <div className="text-xs text-accent-secondary mt-1">Excel, CSV, JSON</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">15+</div>
                  <div className="text-sm text-neutral-light/60">Visualization Types</div>
                  <div className="text-xs text-accent-secondary mt-1">Auto-generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">95%</div>
                  <div className="text-sm text-neutral-light/60">AI Accuracy</div>
                  <div className="text-xs text-accent-secondary mt-1">Pattern Detection</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">0%</div>
                  <div className="text-sm text-neutral-light/60">Data Shared</div>
                  <div className="text-xs text-accent-secondary mt-1">100% Private</div>
                </div>
              </motion.div>
            </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-light/60"
      >
        <div className="flex flex-col items-center space-y-3">
          <span className="text-sm font-medium tracking-wide">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-1"
          >
            <div className="w-0.5 h-6 bg-gradient-to-b from-accent-secondary to-transparent rounded-full" />
            <div className="w-2 h-2 bg-accent-secondary rounded-full" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </section>
  )
}

export default HeroSection
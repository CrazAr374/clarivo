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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.h1
                variants={textVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                <span className="text-neutral-light">Unlock the Power</span>{' '}
                <br />
                <span className="text-neutral-light">of Your Data with</span>{' '}
                <span className="text-gradient">Clarivo</span>
              </motion.h1>

              <motion.p
                variants={textVariants}
                className="text-xl md:text-2xl text-neutral-light/80 mb-8 leading-relaxed"
              >
                <span className="text-accent-secondary font-semibold">Clarivo&apos;s AI-powered platform</span> transforms complex datasets into actionable insights. 
                <br className="hidden md:block" />
                <span className="text-neutral-light/90">No coding expertise required</span> — just upload, ask, and discover.
              </motion.p>

              <motion.div
                variants={textVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={openWaitlist}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 49, 91, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Start Free Analysis</span>
                  <ArrowRight size={20} />
                </motion.button>

                <motion.a
                  href="#video-demo"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
                >
                  <Play size={20} />
                  <span>2-Min Demo</span>
                </motion.a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={textVariants}
                className="mt-8 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-neutral-light/60"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Data stays private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Setup in 30 seconds</span>
                </div>
              </motion.div>

              <motion.div
                variants={textVariants}
                className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center lg:justify-start"
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">100MB+</div>
                  <div className="text-sm text-neutral-light/60">File Size Support</div>
                  <div className="text-xs text-accent-secondary mt-1">Excel, CSV, JSON</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">15+</div>
                  <div className="text-sm text-neutral-light/60">Visualization Types</div>
                  <div className="text-xs text-accent-secondary mt-1">Auto-generated</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">95%</div>
                  <div className="text-sm text-neutral-light/60">AI Accuracy</div>
                  <div className="text-xs text-accent-secondary mt-1">Pattern Detection</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">0%</div>
                  <div className="text-sm text-neutral-light/60">Data Shared</div>
                  <div className="text-xs text-accent-secondary mt-1">100% Private</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="glass-morphism rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden dashboard-glow">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">C</span>
                    </div>
                    <span className="text-neutral-light font-semibold">Clarivo Dashboard</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="space-y-4">
                  {/* Query Input */}
                  <div className="glass-morphism rounded-lg p-4">
                    <div className="text-xs text-neutral-light/60 mb-2">Ask Clarivo AI</div>
                    <div className="text-sm text-neutral-light">&quot;Show me sales trends by region over the last quarter&quot;</div>
                  </div>

                  {/* Chart Visualization */}
                  <div className="glass-morphism rounded-lg p-4 h-40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/20 to-accent-secondary/20 rounded-lg">
                      {/* Animated Chart Bars */}
                      <div className="flex items-end justify-between h-full p-4">
                        {[60, 80, 45, 90, 70, 95, 55].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 1, delay: 1 + i * 0.1 }}
                            className={`w-6 rounded-t bg-gradient-to-t ${
                              i % 3 === 0 ? 'from-accent to-accent/60' :
                              i % 3 === 1 ? 'from-secondary to-secondary/60' :
                              'from-accent-secondary to-accent-secondary/60'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-4 text-xs text-neutral-light/70">
                      Q4 Sales Performance
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="glass-morphism rounded-lg p-3 flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-neutral-light">North region shows 23% growth</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      className="glass-morphism rounded-lg p-3 flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse"></div>
                      <span className="text-sm text-neutral-light">Best performing product: Widget Pro</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 2.2 }}
                      className="glass-morphism rounded-lg p-3 flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-sm text-neutral-light">Forecast: +15% next quarter</span>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-accent rounded-full opacity-20 blur-sm"
                />
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-primary rounded-full opacity-15 blur-sm"
                />
              </div>
            </motion.div>
          </div>
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
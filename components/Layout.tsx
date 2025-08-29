'use client'

import { useEffect } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const initSmoothScroll = async () => {
      const Lenis = (await import('lenis')).default
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initSmoothScroll()
  }, [])

  return (
    <div className="min-h-screen bg-neutral-dark">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
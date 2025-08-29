'use client'

import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import VideoShowcase from '../components/VideoShowcase'
import FeatureHighlights from '../components/FeatureHighlights'
import StatsShowcase from '../components/StatsShowcase'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <VideoShowcase />
      <FeatureHighlights />
      <StatsShowcase />
    </Layout>
  )
}
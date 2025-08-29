'use client'

import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { 
  Database, 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  Users,
  FileSpreadsheet,
  MessageCircle,
  Palette,
  Check,
  ArrowRight
} from 'lucide-react'

const FeaturesPage = () => {
  const features = [
    {
      icon: Database,
      title: 'Data Management',
      description: 'Upload, manage, and organize your datasets with ease. Support for multiple file formats and large dataset handling.',
      features: [
        'Multi-format support (CSV, Excel, JSON, SQL)',
        'Large dataset handling (100MB+)',
        'Automatic type detection',
        'Data validation and cleaning',
        'Version control for datasets'
      ],
      gradient: 'from-blue-500 to-purple-600',
      demoType: 'video',
      videoFile: 'data-managment.mp4',
      videoCaption: 'Dataset upload and management'
    },
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Ask questions in plain English and get intelligent insights. Our AI understands context and provides meaningful recommendations.',
      features: [
        'Natural language interface',
        'Automatic pattern detection',
        'Contextual responses',
        'Predictive analytics',
        'Anomaly detection'
      ],
      gradient: 'from-green-500 to-teal-600',
      demoType: 'interactive',
      videoFile: 'insights.mp4',
      videoCaption: 'AI-powered data insights'
    },
    {
      icon: BarChart3,
      title: 'Advanced Visualization',
      description: 'Create beautiful, interactive visualizations with automatic chart selection based on your data type and analysis goals.',
      features: [
        'Chart type auto-selection',
        'Interactive charts and dashboards',
        'Custom styling options',
        'Export in multiple formats',
        'Real-time data updates'
      ],
      gradient: 'from-pink-500 to-rose-600',
      demoType: 'gallery',
      videoFile: 'visualise.mp4',
      videoCaption: 'Interactive data visualization'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your data never leaves your machine. Complete privacy and security with local processing capabilities.',
      features: [
        'Local data processing',
        'End-to-end encryption',
        'GDPR compliant',
        'No cloud dependency',
        'Audit trails'
      ],
      gradient: 'from-purple-500 to-indigo-600',
      demoType: 'security',
      videoFile: 'privacy.mp4',
      videoCaption: 'Local data processing demo'
    },
  ]

  const integrations = [
    { name: 'Excel', icon: FileSpreadsheet, color: 'text-green-400' },
    { name: 'Google Sheets', icon: FileSpreadsheet, color: 'text-blue-400' },
    { name: 'SQL Databases', icon: Database, color: 'text-purple-400' },
    { name: 'Slack', icon: MessageCircle, color: 'text-pink-400' },
  ]

  const DetailCard = ({ feature, index }: { feature: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24"
    >
      {/* Content */}
      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
        <div className="mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
            <feature.icon size={28} className="text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-light mb-4">
            {feature.title}
          </h3>
          <p className="text-xl text-neutral-light/70 leading-relaxed mb-8">
            {feature.description}
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-4">
          {feature.features.map((item: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                <Check size={14} className="text-white" />
              </div>
              <span className="text-neutral-light">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary mt-8 flex items-center space-x-2"
        >
          <span>Try This Feature</span>
          <ArrowRight size={20} />
        </motion.button>
      </div>

      {/* Demo/Visual */}
      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
        <div className="glass-morphism rounded-2xl p-6 backdrop-blur-xl">
          {/* Feature Video */}
          <div className="aspect-video bg-black rounded-xl overflow-hidden relative">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={`/${feature.videoFile}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay Info */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="glass-morphism rounded-lg px-3 py-2">
                <div className="text-sm font-medium text-white">{feature.title} Demo</div>
                <div className="text-xs text-white/70">{feature.videoCaption}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-white/80">Live Demo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

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
              <span className="text-gradient">Powerful Features</span>{' '}
              <br />
              <span className="text-neutral-light">Simple Interface</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-light/80 max-w-4xl mx-auto leading-relaxed">
              Discover how Clarivo transforms your data workflow with advanced AI, 
              intuitive design, and enterprise-grade security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="section-padding">
        <div className="container-max">
          {features.map((feature, index) => (
            <DetailCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </section>

      {/* Integrations Section */}
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
              Seamless <span className="text-gradient">Integrations</span>
            </h2>
            <p className="text-xl text-neutral-light/70 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for a streamlined workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-morphism rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/15"
              >
                <integration.icon size={48} className={`${integration.color} mx-auto mb-4`} />
                <div className="text-neutral-light font-medium">{integration.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-morphism rounded-3xl p-12 text-center backdrop-blur-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience <span className="text-gradient">Clarivo</span>?
            </h2>
            <p className="text-xl text-neutral-light/70 mb-8 max-w-2xl mx-auto">
              Start your free trial today and discover how easy data analysis can be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-10 py-5"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-10 py-5"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default FeaturesPage
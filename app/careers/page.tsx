'use client'

import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { 
  Code, 
  Palette, 
  Database, 
  Users, 
  Coffee,
  Globe,
  Heart,
  Lightbulb,
  Mail,
  ArrowRight
} from 'lucide-react'

const CareersPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push boundaries and challenge conventions to create breakthrough solutions that matter.',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'We believe powerful tools should be available to everyone, regardless of technical background.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Heart,
      title: 'Privacy',
      description: 'We prioritize user privacy and data security in everything we build and design.',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We\'re committed to making a positive impact on how the world works with data.',
      gradient: 'from-green-500 to-teal-600',
    },
  ]

  const openRoles = [
    {
      title: 'Frontend Developers',
      type: 'React/TypeScript',
      description: 'Build beautiful, responsive user interfaces that make complex data analysis feel intuitive.',
      requirements: ['3+ years React experience', 'TypeScript proficiency', 'Modern CSS/Tailwind'],
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Python Engineers',
      type: 'Backend/ML',
      description: 'Develop robust backend systems and machine learning pipelines for data processing.',
      requirements: ['Python expertise', 'ML/AI experience', 'Database design skills'],
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Data Scientists',
      type: 'ML/Analytics',
      description: 'Create intelligent algorithms that turn raw data into meaningful insights automatically.',
      requirements: ['Statistics/ML background', 'Python/R proficiency', 'Data visualization skills'],
      gradient: 'from-purple-500 to-violet-600',
    },
    {
      title: 'UI/UX Designers',
      type: 'Product Design',
      description: 'Design intuitive interfaces that bridge the gap between complex data and user understanding.',
      requirements: ['Design system experience', 'Figma proficiency', 'Data visualization design'],
      gradient: 'from-pink-500 to-rose-600',
    },
  ]

  const benefits = [
    {
      icon: Coffee,
      title: 'Flexible Working',
      description: 'Work from anywhere with flexible hours that fit your life.',
    },
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Built for distributed teams with async communication.',
    },
    {
      icon: Lightbulb,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and skill development.',
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Regular virtual and in-person team building activities.',
    },
  ]

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
              <span className="text-gradient">Join Our Mission</span>
              <br />
              <span className="text-neutral-light">Shape the Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-light/80 max-w-4xl mx-auto leading-relaxed">
              Help us democratize data science and build tools that empower everyone 
              to make data-driven decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-neutral-light/70 max-w-3xl mx-auto">
              The principles that guide our work and shape the culture we're building together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="glass-morphism rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/15">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon size={28} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-light mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-light/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Current <span className="text-gradient">Opportunities</span>
            </h2>
            <p className="text-xl text-neutral-light/70 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion 
              for making data analysis accessible to everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="glass-morphism rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/15">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-neutral-light">
                        {role.title}
                      </h3>
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${role.gradient} text-white text-sm font-medium`}>
                        {role.type}
                      </div>
                    </div>
                    <p className="text-neutral-light/70 leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-light/80 mb-3 uppercase tracking-wide">
                      Key Requirements
                    </h4>
                    <ul className="space-y-2">
                      {role.requirements.map((req, i) => (
                        <li key={i} className="text-neutral-light/70 text-sm flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent-secondary rounded-full" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full glass-morphism rounded-lg p-3 text-neutral-light font-medium transition-all duration-300 hover:bg-white/20 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Application Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 glass-morphism rounded-2xl p-8 backdrop-blur-xl"
          >
            <div className="text-center">
              <Mail size={48} className="text-accent-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-neutral-light mb-4">
                Ready to Apply?
              </h3>
              <p className="text-neutral-light/70 mb-6 max-w-2xl mx-auto">
                Send your resume and portfolio to{' '}
                <a 
                  href="mailto:atharva.rahate374@gmail.com" 
                  className="text-accent-secondary hover:underline"
                >
                  atharva.rahate374@gmail.com
                </a>
                {' '}with a brief explanation of why you're excited to join our mission.
              </p>
              <div className="text-sm text-neutral-light/60">
                We review all applications and will get back to you within a week.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
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
              Our <span className="text-gradient">Culture</span>
            </h2>
            <p className="text-xl text-neutral-light/70 max-w-3xl mx-auto">
              At Clarivo, we foster a collaborative environment where creativity 
              and innovation thrive together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="glass-morphism rounded-2xl p-6 transition-all duration-300 hover:bg-white/15">
                  <benefit.icon size={32} className="text-accent-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-light mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-light/70 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              Don't See Your Role?
            </h2>
            <p className="text-xl text-neutral-light/70 mb-8 max-w-2xl mx-auto">
              We're always interested in connecting with talented individuals. 
              Reach out and let's start a conversation.
            </p>
            <motion.a
              href="mailto:atharva.rahate374@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-10 py-5 inline-flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Get in Touch</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default CareersPage
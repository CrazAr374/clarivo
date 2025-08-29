'use client'

import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { Target, Users, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

const AboutPage = () => {
  const team = [
    {
      name: 'Atharva Pradip Rahate',
      role: 'Lead Developer',
      bio: 'Specialized in AI integration and data processing algorithms. Passionate about making complex technology accessible.',
      image: '/team/atharva.jpg',
      gradient: 'from-blue-500 to-purple-600',
      linkedin: 'https://www.linkedin.com/in/atharvarahate',
      github: 'https://github.com/CrazAr374',
      email: 'atharva.rahate374@gmail.com'
    },
  ]

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We push boundaries and challenge conventions to create breakthrough solutions in data science.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'We believe powerful tools should be available to everyone, regardless of technical expertise.',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'We prioritize user privacy and data security above all else in everything we build.',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Zap,
      title: 'Simplicity',
      description: 'We make complex data analysis simple and intuitive without sacrificing power or flexibility.',
      gradient: 'from-yellow-500 to-orange-600',
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
              <span className="text-gradient">Democratizing</span>{' '}
              <span className="text-neutral-light">Data Science</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-light/80 max-w-4xl mx-auto leading-relaxed">
              Our mission to make advanced analytics accessible to everyone, 
              breaking down barriers and empowering informed decision-making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-neutral-light/80 leading-relaxed">
                <p>
                  Clarivo was born from the frustration of seeing brilliant minds limited by 
                  technical barriers to data analysis. We witnessed countless professionals 
                  struggling with complex tools, spending hours on tasks that should take minutes.
                </p>
                <p>
                  Our founders, coming from diverse backgrounds in AI, design, and data science, 
                  shared a common vision: data analysis shouldn't require a PhD in computer science. 
                  Every business professional deserves access to powerful analytics tools.
                </p>
                <p>
                  Today, Clarivo empowers thousands of users worldwide to transform their raw data 
                  into actionable insights, proving that sophisticated analysis can be both 
                  powerful and accessible.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Company Image */}
              <div className="glass-morphism rounded-2xl p-4 backdrop-blur-xl">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="/company-image.jpg"
                    alt="Clarivo team working on AI data analysis"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a gradient background if image doesn't exist
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center text-white">
                      <div className="text-4xl mb-4">🚀</div>
                      <div className="text-lg font-semibold">Building the Future</div>
                      <div className="text-sm opacity-80">of Data Analytics</div>
                    </div>
                  </div>
                </div>
                
                {/* Image Caption */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-neutral-light/70">
                    Our team is passionate about democratizing data science and making 
                    powerful analytics accessible to everyone.
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-accent rounded-full opacity-20 blur-sm"
              />
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-primary rounded-full opacity-15 blur-sm"
              />
            </motion.div>
          </div>
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
              The principles that guide everything we do and shape the future we're building.
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

      {/* Team Section */}
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
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-neutral-light/70 max-w-3xl mx-auto">
              The passionate individuals behind Clarivo, working together to revolutionize data analysis.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass-morphism rounded-2xl p-8 text-center h-full transition-all duration-300 hover:bg-white/15">
                  {/* Avatar */}
                  <div className="mb-6">
                    <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-3xl font-bold`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-light mb-2">
                    {member.name}
                  </h3>
                  <div className="text-accent-secondary font-medium mb-4 text-lg">
                    {member.role}
                  </div>
                  <p className="text-neutral-light/70 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-neutral-light/70 hover:text-accent-secondary transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-neutral-light/70 hover:text-accent-secondary transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-neutral-light/70 hover:text-accent-secondary transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-1.425.635-2.946 1.073-4.55 1.267 1.634-.98 2.886-2.53 3.473-4.38-1.53.905-3.224 1.56-5.026 1.917-1.444-1.538-3.5-2.5-5.775-2.5-4.37 0-7.913 3.543-7.913 7.913 0 .62.07 1.224.204 1.803-6.575-.33-12.408-3.478-16.305-8.267-.681 1.168-1.07 2.528-1.07 3.98 0 2.746 1.397 5.166 3.523 6.58-1.297-.04-2.517-.397-3.583-.99v.1c0 3.837 2.728 7.033 6.35 7.764-.664.18-1.364.276-2.086.276-.51 0-1.007-.048-1.49-.14 1.007 3.143 3.928 5.43 7.388 5.49-2.71 2.124-6.127 3.39-9.84 3.39-.64 0-1.27-.037-1.89-.11 3.504 2.247 7.667 3.56 12.138 3.56 14.558 0 22.515-12.06 22.515-22.515 0-.343-.008-.685-.024-1.024 1.548-1.115 2.888-2.51 3.948-4.1z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
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
              Ready to <span className="text-gradient">Transform</span> Your Data?
            </h2>
            <p className="text-xl text-neutral-light/70 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust Clarivo for their data analysis needs.
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
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
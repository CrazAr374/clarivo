'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'API', href: '#' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/CrazAr374', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/atharvarahate', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:atharva.rahate374@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-neutral-dark border-t border-white/10">
      <div className="section-padding py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <Link href="/" className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image 
                      src="/logo.jpg" 
                      alt="Clarivo Logo" 
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-2xl font-bold text-gradient">Clarivo</span>
                </Link>
                <p className="text-neutral-light/70 text-sm leading-relaxed mb-6">
                  Democratizing data science through AI-powered analytics that everyone can use. 
                  Transform your raw data into clear, actionable insights.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-neutral-light/70 hover:text-accent-secondary transition-colors duration-300"
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="font-semibold text-neutral-light mb-6 text-lg">Quick Links</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-neutral-light/80 mb-3 text-sm uppercase tracking-wide">Product</h5>
                    <ul className="space-y-2">
                      {footerLinks.Product.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-neutral-light/60 hover:text-accent-secondary transition-colors duration-300 text-sm"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-light/80 mb-3 text-sm uppercase tracking-wide">Company</h5>
                    <ul className="space-y-2">
                      {footerLinks.Company.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-neutral-light/60 hover:text-accent-secondary transition-colors duration-300 text-sm"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-semibold text-neutral-light mb-6 text-lg">Get In Touch</h4>
                <div className="space-y-4">
                  <div className="glass-morphism rounded-lg p-4">
                    <h5 className="font-medium text-neutral-light/80 mb-2 text-sm">Email</h5>
                    <a 
                      href="mailto:atharva.rahate374@gmail.com"
                      className="text-accent-secondary hover:text-accent transition-colors duration-300 text-sm"
                    >
                      atharva.rahate374@gmail.com
                    </a>
                  </div>
                  <div className="glass-morphism rounded-lg p-4">
                    <h5 className="font-medium text-neutral-light/80 mb-2 text-sm">Response Time</h5>
                    <p className="text-neutral-light/60 text-sm">Usually within 24 hours</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-neutral-light/70 text-sm">
              © {new Date().getFullYear()} Clarivo. All rights reserved.
            </p>
            <p className="text-neutral-light/70 text-sm">
              Made with ❤️ by <a href="https://github.com/atharva-rahate" className="text-accent-secondary hover:text-accent transition-colors duration-300">Atharva Rahate</a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
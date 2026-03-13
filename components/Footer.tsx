'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-poppins font-bold text-lg mb-4">Pureflo</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Engineered for purity. Built for life. Premium water storage solutions trusted by thousands.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-poppins font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#viewer" className="text-gray-300 hover:text-white transition-colors">
                  360° View
                </Link>
              </li>
              <li>
                <Link href="#enquiry" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company Details */}
          <motion.div variants={itemVariants}>
            <h4 className="font-poppins font-bold text-base mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <a
                  href="mailto:sales@pureflo.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  sales@pureflo.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-gray-300">123 Water Street<br />New York, NY 10001</span>
              </li>
            </ul>
          </motion.div>

          {/* WhatsApp Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-poppins font-bold text-base mb-4">Get in Touch</h4>
            <a
              href="https://wa.me/1234567890?text=Hello%20Pureflo!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-dark-blue px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-blue-400 border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} Pureflo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

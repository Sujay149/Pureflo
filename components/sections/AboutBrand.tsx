'use client'

import { motion } from 'framer-motion'
import { Award, Layers, Zap } from 'lucide-react'

export function AboutBrand() {
  const features = [
    {
      icon: Award,
      title: 'ISO Certified',
      description: 'Industry-leading certifications ensure highest quality standards and safety',
    },
    {
      icon: Layers,
      title: 'Multi-Layer Protection',
      description: '3-layer construction provides superior durability and water safety',
    },
    {
      icon: Zap,
      title: 'Durable Materials',
      description: 'Food-grade plastic built to last decades with minimal maintenance',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFF7ED] to-[#EAF6FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span variants={itemVariants} className="text-primary font-poppins font-bold text-sm uppercase tracking-widest">
            Why Choose Pureflo
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-poppins font-bold text-3xl md:text-4xl text-dark-blue mb-4 mt-2"
          >
            Premium Quality, Proven Reliability
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Pureflo Storage Water Tanks are engineered for purity and built for life. With ISO certification, 3-layer protection, and food-grade materials, we deliver water storage solutions trusted by homeowners, builders, and businesses worldwide.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(15, 76, 156, 0.1)' }}
                className="bg-light-bg rounded-2xl p-8 border border-border transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-dark-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

       
      </div>
    </section>
  )
}

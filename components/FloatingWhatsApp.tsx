'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function FloatingWhatsApp() {
  const whatsappUrl = 'https://wa.me/1234567890?text=I%20want%20to%20buy%20Pureflo%20Water%20Tank'

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center z-40 transition-colors"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  )
}

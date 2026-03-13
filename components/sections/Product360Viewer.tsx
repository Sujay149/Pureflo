'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RotateCw } from 'lucide-react'

export function Product360Viewer() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [touchStartX, setTouchStartX] = useState(0)

  // Total number of images in the 360 sequence
  const totalImages = 24
  const images = Array.from({ length: totalImages }, (_, i) =>
    `tank-${String(i + 1).padStart(2, '0')}.jpg`
  )

  // Calculate angle based on current image
  const angle = (currentImageIndex / totalImages) * 360

  // Mouse drag handler
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const diff = e.clientX - startX
    const imageDiff = Math.round(diff / 5) // Sensitivity: 5px = 1 image
    const newIndex = (currentImageIndex + imageDiff) % totalImages

    if (newIndex !== currentImageIndex) {
      setCurrentImageIndex(newIndex < 0 ? totalImages + newIndex : newIndex)
      setStartX(e.clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch drag handler
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const diff = e.touches[0].clientX - touchStartX
    const imageDiff = Math.round(diff / 5)
    const newIndex = (currentImageIndex + imageDiff) % totalImages

    if (newIndex !== currentImageIndex) {
      setCurrentImageIndex(newIndex < 0 ? totalImages + newIndex : newIndex)
      setTouchStartX(e.touches[0].clientX)
    }
  }

  // Reset rotation
  const resetRotation = () => {
    setCurrentImageIndex(0)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as any)
      window.addEventListener('mouseup', handleMouseUp)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove as any)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, startX, currentImageIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="viewer" className="py-16 md:py-24 bg-gradient-to-b from-[#E3D4C7] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <span className="text-primary font-poppins font-bold text-sm uppercase tracking-widest">Interactive Viewer</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-dark-blue mb-4 mt-2">
              Explore 360° View
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Drag left and right to rotate the tank. Experience the quality and attention to detail of Pureflo products.
            </p>
          </motion.div>

          {/* Main Viewer */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary to-dark-blue rounded-2xl shadow-2xl overflow-hidden">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              className={`relative w-full aspect-square bg-gradient-to-br from-primary to-dark-blue flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(15,76,156,0.1)_0%,_transparent_100%)]"></div>
              </div>

              {/* Image Container with Rotation */}
              <motion.div
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={currentImageIndex}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Tank Image */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <img
                    src={`/images/tank-360/${images[currentImageIndex]}`}
                    alt={`Water tank rotated ${angle.toFixed(0)} degrees - view ${currentImageIndex + 1}`}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.div>

              {/* Drag Indicators */}
              {!isDragging && (
                <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-4">
                  <motion.div
                    animate={{ x: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white drop-shadow-lg flex items-center gap-2 bg-black bg-opacity-30 px-3 py-2 rounded-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-medium">Drag</span>
                  </motion.div>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white drop-shadow-lg flex items-center gap-2 bg-black bg-opacity-30 px-3 py-2 rounded-lg"
                  >
                    <span className="text-sm font-medium">Drag</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="bg-white border-t border-border p-6 flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-600">
                    Rotation: {angle.toFixed(0)}°
                  </span>
                  {/* Progress Bar */}
                  <div className="flex-1 h-2 bg-light-bg rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: `${(currentImageIndex / (totalImages - 1)) * 100}%` }}
                      transition={{ duration: 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-water-blue"
                    ></motion.div>
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetRotation}
                className="ml-4 px-4 py-2 bg-accent-yellow text-dark-blue rounded-lg font-medium text-sm hover:bg-yellow-400 transition-colors flex items-center gap-2"
              >
                <RotateCw className="w-4 h-4" />
                Reset
              </motion.button>
            </div>
          </motion.div>

          {/* Info Box */}
          <motion.div
            variants={itemVariants}
            className="mt-8 bg-accent-yellow bg-opacity-10 border border-accent-yellow rounded-lg p-6"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">ℹ️</div>
              <div>
                <h4 className="font-poppins font-bold text-dark-blue mb-2">How to Use the 360° Viewer</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Desktop:</strong> Click and drag left or right to rotate the tank</li>
                  <li>• <strong>Mobile:</strong> Swipe left or right to rotate the tank view</li>
                  <li>• <strong>Reset:</strong> Click the Reset button to return to the original position</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

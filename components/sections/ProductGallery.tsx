'use client'

import { useState } from 'react'

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null)

  const galleryImages = [
    { id: 1, url: '/images/pureflo-product.jpg', alt: 'Residential Tank Installation' },
    { id: 2, url: '/tank.png', alt: 'Industrial Storage Facility' },
    { id: 3, url: '/images/pureflo-product.jpg', alt: 'Elevated Water Tank Setup' },
    { id: 4, url: '/tank.png', alt: 'Commercial Plant Storage' },
    { id: 5, url: '/images/pureflo-product.jpg', alt: 'Large-Scale Tank Array' },
    { id: 6, url: '/tank.png', alt: 'Overhead Water Tank' },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#E3D4C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-sm font-bold uppercase tracking-wider">Gallery</span>
          </div>
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            See Pureflo in Action
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mb-4" />
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Real installations across homes, buildings, and commercial facilities
          </p>
        </div>

        {/* Gallery Grid — 3 columns, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:ring-4 hover:ring-blue-400 hover:shadow-2xl"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-start justify-end p-5">
                  {/* Magnifying glass icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                  {/* Title & subtitle */}
                  <p className="text-white font-bold text-sm leading-snug">{image.alt}</p>
                  <p className="text-white/70 text-xs mt-1 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Click to view full size
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl w-full animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-16 right-0 text-white hover:text-blue-400 transition-colors p-2 bg-white/10 rounded-full backdrop-blur-sm"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full h-auto"
                />
                <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800">
                  <p className="text-white text-lg font-bold text-center">{selectedImage.alt}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

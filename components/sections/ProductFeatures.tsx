'use client'

import { Star, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { productsData } from '@/data/mock'

export function ProductFeatures() {
  const handleBuyNow = (capacity: string) => {
    window.open(
      `https://wa.me/919876543210?text=Hi!%20I%20want%20to%20buy%20a%20Pureflo%20${encodeURIComponent(capacity)}%20Water%20Tank`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const scrollToContact = () => {
    const element = document.getElementById('enquiry')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-[#EAF6FF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
            Our Products
          </span>
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 mt-2">
            Choose Your Perfect Tank
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Premium water storage solutions for every need — from compact home use to large commercial applications
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              className={`relative bg-white rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden ${
                product.popular
                  ? 'border-4 border-yellow-400 shadow-xl scale-105'
                  : 'border-2 border-gray-200 hover:border-blue-400'
              }`}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute -top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-gray-900 px-3 py-2 text-center font-black text-xs flex items-center justify-center space-x-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current animate-pulse" />
                    <span>MOST POPULAR</span>
                    <Star className="w-4 h-4 fill-current animate-pulse" />
                  </div>
                </div>
              )}

              <div className={`p-5 ${product.popular ? 'pt-12' : 'pt-5'}`}>
                {/* Capacity */}
                <div className="text-center mb-5 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      product.popular ? 'from-yellow-100 to-yellow-50' : 'from-blue-100 to-cyan-50'
                    } rounded-2xl -z-10 transform scale-110`}
                  />
                  <div className="py-4">
                    <div
                      className={`text-5xl font-black mb-1 ${
                        product.popular
                          ? 'bg-gradient-to-r from-yellow-600 to-yellow-700'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-600'
                      } bg-clip-text text-transparent`}
                    >
                      {product.capacity.split(' ')[0]}
                    </div>
                    <div className="text-gray-700 font-bold text-base">Liters</div>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-5 p-3 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                  <div className="text-3xl font-black text-gray-900 mb-0.5">{product.price}</div>
                  <div className="text-xs text-gray-600 font-semibold">Starting price</div>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 mb-5">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 p-1">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-700 font-bold" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-2">
                  <Button
                    onClick={() => handleBuyNow(product.capacity)}
                    className={`w-full text-sm font-bold py-4 rounded-xl shadow-lg transition-all duration-300 ${
                      product.popular
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 shadow-yellow-500/30'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-blue-500/30'
                    }`}
                  >
                    Buy on WhatsApp
                  </Button>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-xl text-sm"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

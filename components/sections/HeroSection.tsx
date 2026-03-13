'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Droplets, Shield } from 'lucide-react'
import { heroData } from '@/data/mock'

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919876543210?text=Hi!%20I%20want%20to%20know%20more%20about%20Pureflo%20Water%20Tanks',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900"
    >
      {/* Topographic pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="topography" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10c5 0 5 5 10 5s5-5 10-5 5 5 10 5 5-5 10-5" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M10 30c5 0 5 5 10 5s5-5 10-5 5 5 10 5 5-5 10-5" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M10 50c5 0 5 5 10 5s5-5 10-5 5 5 10 5 5-5 10-5" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#topography)" />
        </svg>
      </div>

      <div className="relative z-10 flex-1 flex items-stretch">
        {/* Cream Inner Container */}
        <div className="flex-1 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 px-8 lg:px-16 pt-28 pb-8 lg:pb-12 relative overflow-hidden flex items-center">
          {/* Subtle wave pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M0 50 Q 25 40, 50 50 T 100 50" fill="none" stroke="#0F4C9C" strokeWidth="1" />
                  <path d="M0 60 Q 25 50, 50 60 T 100 60" fill="none" stroke="#0F4C9C" strokeWidth="1" />
                  <path d="M0 70 Q 25 60, 50 70 T 100 70" fill="none" stroke="#0F4C9C" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#waves)" />
            </svg>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-bold">ISO Certified Quality</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.1]">
                  Premium Water Storage Tanks for Every Need
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                  {heroData.tagline}
                </p>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl">
                  {heroData.subtitle}
                </p>
              </div>

              {/* Trust Indicators + Mobile Tank Image */}
              <div className="flex items-center gap-4">
                {/* Trust Indicators */}
                <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap flex-1">
                  <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">3-Layer Protection</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">Food Grade Material</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-gray-700">100% Leak Proof</span>
                  </div>
                </div>
                {/* Mobile-only tank image */}
                <div className="lg:hidden flex-shrink-0 w-[190px] sm:w-[220px]">
                  <img
                    src="/tank.png"
                    alt="Pureflo Water Storage Tank"
                    className="w-full h-auto drop-shadow-xl"
                  />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  onClick={() => scrollToSection('products')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all group rounded-full"
                >
                  View Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all rounded-full"
                >
                  Enquire Now
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-blue-600">10K+</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-semibold">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-blue-600">15+</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-semibold">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-blue-600">99%</div>
                  <div className="text-xs lg:text-sm text-gray-600 font-semibold">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Product Showcase (desktop only) */}
            <div className="hidden lg:flex relative h-[600px] items-center justify-center">
              {/* Large circular backdrop */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-cyan-100 via-blue-100 to-cyan-200 rounded-full opacity-40" />
              </div>

              {/* Decorative spheres */}
              <div className="hidden sm:block absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full shadow-2xl" />
              <div className="hidden sm:block absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full shadow-2xl" />
              <div className="hidden sm:block absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full shadow-2xl" />


              {/* Product Image */}
              <div className="relative z-10 animate-float">
                <img
                  src="/tank.png"
                  alt="Pureflo Water Storage Tank"
                  className="w-full max-w-[250px] sm:max-w-xs lg:max-w-md h-auto drop-shadow-2xl"
                />
              </div>

              {/* Floating info card - top right */}
              <div className="hidden lg:block absolute top-5 -right-5 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 animate-float [animation-delay:1s]">
                <div className="text-xs text-gray-500 font-semibold mb-1">CAPACITY</div>
                <div className="text-3xl font-black text-blue-600">500L - 5000L</div>
              </div>

              {/* Floating info card - bottom left */}
              {/* <div className="hidden lg:block absolute bottom-32 -left-5 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 animate-float [animation-delay:2s]">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">WARRANTY</div>
                    <div className="text-xl font-black text-gray-900">5 Years</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

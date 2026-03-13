import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutBrand } from '@/components/sections/AboutBrand'
import { ProductFeatures } from '@/components/sections/ProductFeatures'
import { ProductGallery } from '@/components/sections/ProductGallery'
import { Product360Viewer } from '@/components/sections/Product360Viewer'
import { EnquiryForm } from '@/components/sections/EnquiryForm'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <AboutBrand />
      <ProductFeatures />
      <ProductGallery />
      <Product360Viewer />
      <EnquiryForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}

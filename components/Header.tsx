'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Products', href: '#products' },
    { label: 'About us', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between md:justify-center px-8 md:px-16 py-6">
        {/* Spacer for mobile (keeps hamburger right-aligned) */}
        <div className="md:hidden" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#333] text-sm font-medium hover:text-[#0A2F6B] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => scrollToSection('enquiry')}
            className="px-7 py-2.5 bg-[#1a1a1a] text-white text-sm font-medium rounded-lg hover:bg-[#0A2F6B] transition-colors"
          >
            Pre-order
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-[#333] hover:bg-black/5 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mx-4 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-[#333] hover:text-[#0A2F6B] hover:bg-black/5 rounded-lg transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { scrollToSection('enquiry'); setIsMenuOpen(false) }}
            className="w-full mt-2 px-4 py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-lg hover:bg-[#0A2F6B] transition-colors"
          >
            Pre-order
          </button>
        </div>
      )}
    </header>
  )
}

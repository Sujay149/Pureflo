/**
 * Pureflo Configuration File
 * Update this file with your business information
 * All values are used throughout the website
 */

export const config = {
  // Business Information
  business: {
    name: 'Pureflo',
    tagline: 'Engineered for Purity – Built for Life',
    description: 'Premium water storage tanks for homes and businesses',
    website: 'https://pureflo.example.com',
  },

  // Contact Information
  contact: {
    phone: '+1 (555) 123-4567',
    email: 'sales@pureflo.com',
    address: '123 Water Street, New York, NY 10001',
    whatsapp: '+1234567890', // WhatsApp business number (without formatting)
  },

  // Social Media
  social: {
    whatsapp: 'https://wa.me/1234567890?text=I%20want%20to%20buy%20Pureflo%20Water%20Tank',
    instagram: 'https://instagram.com/pureflo',
    facebook: 'https://facebook.com/pureflo',
    youtube: 'https://youtube.com/pureflo',
  },

  // Product Information
  product: {
    name: 'Pureflo Storage Water Tank',
    capacities: ['500L', '1000L', '1500L', '2000L', '3000L'],
    features: [
      '3-Layer Protection Technology',
      'Food-Grade Plastic Construction',
      'Leak-Proof Design',
      'UV & Weather Resistant',
      '20+ Years Durability',
      'Eco-Friendly Materials',
    ],
    benefits: [
      {
        icon: 'Award',
        title: 'ISO Certified',
        description: 'Industry-leading certifications ensure highest quality standards',
      },
      {
        icon: 'Layers',
        title: 'Multi-Layer Protection',
        description: '3-layer construction provides superior durability',
      },
      {
        icon: 'Zap',
        title: 'Durable Materials',
        description: 'Food-grade plastic built to last decades',
      },
    ],
  },

  // Company Statistics
  stats: [
    { number: '25+', label: 'Years Experience' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '100%', label: 'Certified Quality' },
    { number: '24/7', label: 'Support Available' },
  ],

  // Brand Colors
  colors: {
    primary: '#0F4C9C',      // Primary Blue
    dark: '#0A2F6B',         // Dark Blue
    secondary: '#3A86FF',    // Water Blue
    accent: '#FFD60A',       // Accent Yellow
    light: '#F5F9FF',        // Light Background
    white: '#FFFFFF',
  },

  // SEO
  seo: {
    title: 'Pureflo Storage Water Tanks | Premium Water Storage Solutions',
    description:
      'Pureflo Storage Water Tanks - ISO certified, food-grade plastic water tanks with 3-layer protection. Durable, leak-proof, and UV-protected water storage solutions for homes and businesses.',
    keywords: [
      'water tanks',
      'storage tanks',
      'water storage',
      'food grade plastic',
      'ISO certified',
      'leak-proof tanks',
      'UV protection',
    ],
  },

  // Links
  links: {
    privacy: '/privacy-policy',
    terms: '/terms-of-service',
    about: '/about',
    contact: '/contact',
  },

  // Features
  features: {
    enableWhatsApp: true,
    enableForm: true,
    enable360Viewer: true,
    enableGallery: true,
    enableBlog: false, // Coming soon
  },

  // Form Configuration
  form: {
    submitEndpoint: '/api/submit-enquiry',
    successMessage: 'Thank you! We will contact you within 24 hours.',
    errorMessage: 'Something went wrong. Please try again.',
  },

  // Analytics (Google Analytics ID)
  analytics: {
    googleId: 'GA_MEASUREMENT_ID', // Replace with your Google Analytics ID
    enabled: false, // Set to true to enable
  },

  // Email Configuration
  email: {
    fromName: 'Pureflo Water Tanks',
    fromEmail: 'noreply@pureflo.com',
    toEmail: 'sales@pureflo.com',
    resendApiEnabled: false, // Set to true when RESEND_API_KEY is configured
  },
}

/**
 * Usage Examples:
 *
 * In any React component:
 * import { config } from '@/lib/config'
 *
 * // Access business name
 * const businessName = config.business.name
 *
 * // Access phone number
 * const phone = config.contact.phone
 *
 * // Access WhatsApp URL
 * const whatsappUrl = config.social.whatsapp
 *
 * // Access colors
 * const primaryColor = config.colors.primary
 *
 * // Check if feature is enabled
 * if (config.features.enable360Viewer) {
 *   // Show 360 viewer
 * }
 */

export type Config = typeof config

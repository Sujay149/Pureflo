# Getting Started with Pureflo Landing Page

Complete guide to set up, customize, and deploy your Pureflo water tank landing page.

## Table of Contents

1. [Installation](#installation)
2. [Running Locally](#running-locally)
3. [Customization](#customization)
4. [Deployment](#deployment)
5. [Troubleshooting](#troubleshooting)

---

## Installation

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- Text editor (VS Code recommended)
- GitHub account (for deployment)

### Step 1: Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

This installs:
- Next.js 16
- Tailwind CSS
- Framer Motion
- React components
- And all other dependencies

### Step 2: Verify Installation

Check that dependencies installed correctly:

```bash
npm list next
npm list tailwindcss
npm list framer-motion
```

You should see version numbers without errors.

---

## Running Locally

### Start Development Server

```bash
npm run dev
```

You'll see output like:
```
  ▲ Next.js 16.1.6
  - Local:        http://localhost:3000
  - Environments: .env.local
```

### Open in Browser

Visit [http://localhost:3000](http://localhost:3000)

You should see the Pureflo landing page with:
- Header with navigation
- Hero section with product image
- Product features grid
- 360° viewer (drag to rotate)
- Enquiry form
- Footer

### Make Changes

Edit any component file and the page auto-updates (Hot Module Replacement):

1. Open `/components/sections/HeroSection.tsx`
2. Change "Engineered for Purity" to your text
3. Save file
4. Browser updates automatically

### Stop Server

Press `Ctrl + C` in terminal to stop the development server.

---

## Customization

### Update Business Information

#### 1. WhatsApp Number

Three locations to update:

**File 1:** `/components/Header.tsx`
```typescript
// Line ~24
href="https://wa.me/1234567890?text=I%20want%20to%20buy%20Pureflo%20Water%20Tank"
```
Replace `1234567890` with your number (include country code, e.g., +919876543210)

**File 2:** `/components/FloatingWhatsApp.tsx`
```typescript
// Line ~9
const whatsappUrl = 'https://wa.me/1234567890?text=...'
```

**File 3:** `/components/Footer.tsx`
```typescript
// Line ~64
href="https://wa.me/1234567890?text=Hello%20Pureflo!"
```

#### 2. Phone Number

**File:** `/components/Footer.tsx` (Line ~68)

```typescript
<span className="text-gray-300">+1 (555) 123-4567</span>
```

#### 3. Email Address

**File:** `/components/Footer.tsx` (Line ~74)

```typescript
<a href="mailto:sales@pureflo.com">sales@pureflo.com</a>
```

#### 4. Physical Address

**File:** `/components/Footer.tsx` (Lines ~80-81)

```typescript
<span className="text-gray-300">123 Water Street<br />New York, NY 10001</span>
```

### Change Colors

**File:** `/app/globals.css`

Update the `:root` section (lines 7-15):

```css
:root {
  --primary-blue: #0F4C9C;      /* Main brand color - buttons, headings */
  --dark-blue: #0A2F6B;         /* Dark accents - headers, footer */
  --water-blue: #3A86FF;        /* Secondary accent - highlights */
  --accent-yellow: #FFD60A;     /* CTA buttons - important elements */
  --white: #FFFFFF;
  --light-bg: #F5F9FF;          /* Light background sections */
}
```

**Colors to customize:**
- Primary Blue: Appears in buttons, links, headings
- Dark Blue: Footer background, dark text
- Water Blue: Secondary accents, features highlights
- Accent Yellow: "Buy Now" button, important CTAs

### Update Hero Section Copy

**File:** `/components/sections/HeroSection.tsx`

Update lines 40-44:

```typescript
<h1 className="...">
  Engineered for{' '}
  <span className="text-primary">Purity</span>
</h1>
<h2 className="...">Built for Life</h2>
```

Change to your tagline, e.g.:
```typescript
<h1 className="...">
  Superior{' '}
  <span className="text-primary">Quality Water</span>
</h1>
<h2 className="...">Trusted by Thousands</h2>
```

### Update Product Features

**File:** `/components/sections/ProductFeatures.tsx`

Find the features array (around line 60):

```typescript
const features = [
  {
    icon: Shield,
    title: '3-Layer Protection',
    description: 'Triple-layer construction protects...',
  },
  // ... more features
]
```

Add/edit features by changing title and description.

### Update About Section

**File:** `/components/sections/AboutBrand.tsx`

Update the description text and statistics:

```typescript
// Line ~73
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
  Pureflo Storage Water Tanks are designed for durability...
</p>

// Line ~124-127 - Update stats
{[
  { number: '25+', label: 'Years Experience' },
  { number: '50K+', label: 'Happy Customers' },
  // ... update these numbers
]}
```

### Replace Product Images

The 360° viewer uses 24 images: `tank-01.jpg` through `tank-24.jpg`

These are located at: `/public/images/tank-360/`

**To replace:**
1. Get 24 product images from different angles (0°-360°)
2. Rename them: tank-01.jpg, tank-02.jpg, ... tank-24.jpg
3. Replace files in `/public/images/tank-360/`
4. Images automatically update on page

**Image requirements:**
- Format: JPG (for optimization)
- Size: 1000x1000px or larger
- Should show full tank from consistent distance
- All same dimensions/style

### Update Tank Capacity Options

**File:** `/components/sections/EnquiryForm.tsx`

Find tank capacities (line ~31):

```typescript
const tankCapacities = ['500L', '1000L', '1500L', '2000L', '3000L', 'Other']
```

Add/remove options as needed, e.g.:
```typescript
const tankCapacities = ['250L', '500L', '1000L', '1500L', '2000L', 'Other']
```

### Using the Config File

**File:** `/lib/config.ts`

A centralized configuration file is available:

```typescript
import { config } from '@/lib/config'

// Use it like:
const phone = config.contact.phone
const whatsapp = config.social.whatsapp
const colors = config.colors
```

This keeps configuration separate from components.

---

## Deployment

### Deploy to Vercel (Recommended)

**Vercel is optimized for Next.js and takes 1 minute to deploy.**

#### Step 1: Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: Pureflo landing page"
```

Visit [github.com](https://github.com), create new repo, then:

```bash
git remote add origin https://github.com/yourusername/pureflo-landing.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"

**That's it!** Your site is now live at `pureflo-landing.vercel.app`

#### Step 3: Custom Domain (Optional)

1. In Vercel, go to Settings → Domains
2. Add your domain (e.g., pureflo.com)
3. Update DNS at your domain registrar
4. Verify in Vercel dashboard

#### Step 4: Environment Variables (For Email)

To enable email notifications:

1. Get API key from [resend.com](https://resend.com)
2. In Vercel project settings → Environment Variables
3. Add: `RESEND_API_KEY=your_key_here`
4. Redeploy

### Deploy to Netlify

1. Push code to GitHub (same as above)
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select repository
5. Build settings auto-configure
6. Click "Deploy"

### Deploy to Your Own Server

See `DEPLOYMENT.md` for detailed instructions on PM2, Docker, or traditional hosting.

---

## Testing Checklist

Before going live, test everything:

- [ ] Navigation links work
- [ ] Hero section displays correctly
- [ ] 360° viewer rotates on desktop (drag)
- [ ] 360° viewer rotates on mobile (swipe)
- [ ] Form validation works (try invalid email)
- [ ] Form submission succeeds
- [ ] WhatsApp button opens chat
- [ ] Page is responsive on mobile
- [ ] Colors look correct
- [ ] All text is readable
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] No console errors (F12)

---

## Troubleshooting

### "Port 3000 already in use"

```bash
# Kill the process using port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Images not showing in 360° viewer

1. Check files exist: `/public/images/tank-360/tank-01.jpg` through `tank-24.jpg`
2. Verify filenames are exact (lowercase, with hyphens)
3. Check browser console (F12) for 404 errors
4. Verify image paths in components

### Form not submitting

1. Check `/api/submit-enquiry/route.ts` exists
2. Check browser console for error messages
3. Verify all form fields are filled
4. Test in different browser

### Styling issues

1. Check `/app/globals.css` for color definitions
2. Verify Tailwind classes are spelled correctly
3. Clear browser cache (Ctrl+Shift+Delete)
4. Restart dev server (`npm run dev`)

### Animations not working

1. Check Framer Motion is installed: `npm list framer-motion`
2. Verify browser supports animations (modern browsers only)
3. Check if reduced motion is enabled in OS settings
4. Clear cache and restart dev server

### Deployment fails

1. Check node version: `node --version` (should be 18+)
2. Verify all dependencies installed: `npm install`
3. Check for TypeScript errors: `npm run build`
4. Check environment variables are set (RESEND_API_KEY)

---

## Getting Help

### Check Documentation

- `README.md` - Project overview
- `QUICKSTART.md` - 5-minute setup
- `DEPLOYMENT.md` - Detailed deployment
- `PROJECT_SUMMARY.md` - What's included
- Component comments - Code documentation

### Common Questions

**Q: Can I use a different email service?**
A: Yes! Update `/app/api/submit-enquiry/route.ts` to use SendGrid, AWS SES, etc.

**Q: Can I add more sections?**
A: Yes! Create new components in `/components/sections/` and import in `page.tsx`

**Q: How do I update the product images?**
A: Replace files in `/public/images/tank-360/` keeping filenames tank-01 through tank-24

**Q: Can I change the layout?**
A: Yes! Edit the component structure in `page.tsx` and section components

**Q: How do I add analytics?**
A: Analytics already included via Vercel. Add Google Analytics in `layout.tsx`

---

## Next Steps

1. ✅ Install dependencies
2. ✅ Run locally: `npm run dev`
3. ✅ Customize information (WhatsApp, contact details)
4. ✅ Test all features
5. ✅ Deploy to Vercel
6. ✅ Set up custom domain
7. ✅ Monitor form submissions
8. ✅ Share with team/stakeholders

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Documentation](https://vercel.com/docs)

---

## Support

For issues or questions:
1. Check documentation files
2. Review component comments
3. Check component code for inline guidance
4. Test in different browser/device

---

**You're all set!** Start with `npm run dev` and begin customizing. 🚀

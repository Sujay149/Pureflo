# Pureflo Landing Page - Quick Start Guide

Get your Pureflo landing page running in 5 minutes!

## 1. Install Dependencies (30 seconds)

```bash
npm install
```

## 2. Start Development Server (10 seconds)

```bash
npm run dev
```

Visit http://localhost:3000 in your browser.

## 3. Customize Your Information (2 minutes)

### Update WhatsApp Number

**File:** `/components/Header.tsx` (Line 24)

Find:
```typescript
href="https://wa.me/1234567890?text=..."
```

Replace `1234567890` with your WhatsApp number (include country code).

**Also update in:**
- `/components/FloatingWhatsApp.tsx` (Line 9)
- `/components/Footer.tsx` (Line 64)

### Update Contact Information

**File:** `/components/Footer.tsx`

Update these lines:
- Line 68: Phone number
- Line 74: Email address
- Line 80-81: Physical address

Example:
```typescript
<span className="text-gray-300">+1 (555) 123-4567</span>
<a href="mailto:sales@pureflo.com">sales@pureflo.com</a>
<span className="text-gray-300">123 Water Street<br />New York, NY 10001</span>
```

### Update Colors (Optional)

**File:** `/app/globals.css` (Lines 7-15)

Change the color values:
```css
--primary-blue: #0F4C9C;    /* Main brand color */
--dark-blue: #0A2F6B;       /* Dark accents */
--water-blue: #3A86FF;      /* Secondary accent */
--accent-yellow: #FFD60A;   /* CTA color */
```

## 4. Test Locally (1 minute)

- [ ] Click "Buy Now" button - should open WhatsApp
- [ ] Scroll through 360° viewer - drag to rotate
- [ ] Fill out enquiry form - should show success message
- [ ] Test on mobile - use device inspector (F12 → toggle device)

## 5. Deploy to Live (Quick Option)

### Deploy to Vercel (Easiest - 1 Click)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/pureflo-landing.git
git branch -M main
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project" → Select your GitHub repo

4. Click "Deploy" (settings auto-detected)

5. Your site is now LIVE! 🎉

---

## Common Customizations

### Change Hero Tagline

**File:** `/components/sections/HeroSection.tsx`

Find lines 40-44:
```typescript
<h1 className="...">
  Engineered for{' '}
  <span className="text-primary">Purity</span>
</h1>
<h2 className="...">Built for Life</h2>
```

Replace with your tagline.

### Add Product Images

1. Replace images in `/public/images/tank-360/`
2. Keep same filenames (tank-01.jpg through tank-24.jpg)
3. Images auto-update in the viewer

### Change Feature List

**File:** `/components/sections/HeroSection.tsx` (Lines 60-73)

```typescript
{[
  '3-Layer Protection Technology',
  'Food-Grade Plastic Construction',
  'Leak-Proof Design',
  'UV & Weather Resistant',
].map((feature, index) => (
  // Feature card JSX
))}
```

### Update About Section

**File:** `/components/sections/AboutBrand.tsx`

Update the text and statistics to match your company.

---

## Email Setup (Optional)

To enable form email notifications:

1. Sign up at [Resend.com](https://resend.com)

2. Get your API key

3. In `/app/api/submit-enquiry/route.ts`:
   - Find lines 56-101 (commented out)
   - Uncomment the code
   - Update email addresses

4. Add environment variable:
   - Create `.env.local` file:
   ```
   RESEND_API_KEY=your_key_here
   ```

5. Restart server: `npm run dev`

---

## Deployment URLs

After deploying, your site is available at:

- **Vercel**: `https://your-project.vercel.app`
- **Custom Domain**: `https://yourdomain.com`

To set custom domain in Vercel:
1. Project Settings → Domains
2. Add your domain
3. Update DNS records at your domain registrar

---

## Troubleshooting

### Site not loading?
- Check internet connection
- Clear browser cache
- Try different browser

### Images not showing?
- Verify images are in `/public/images/tank-360/`
- Check image filenames match component imports
- Images should be JPG format

### Form not submitting?
- Check network tab in browser dev tools
- Verify API endpoint exists at `/api/submit-enquiry`
- Check console for error messages

### Animations not smooth?
- Check browser FPS (should be 60+)
- Disable browser extensions
- Clear cache

---

## File Reference

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main landing page |
| `app/layout.tsx` | Global layout & metadata |
| `components/Header.tsx` | Navigation header |
| `components/Footer.tsx` | Footer section |
| `components/sections/` | Page sections |
| `app/globals.css` | Global styles & colors |
| `public/images/` | Product images |

---

## Performance Tips

- Images are optimized (24 JPGs for 360° viewer)
- CSS is minified in production
- JavaScript is code-split automatically
- Lighthouse score: 90+

---

## Support

- **Docs**: See README.md
- **Deployment**: See DEPLOYMENT.md
- **Customization**: See component comments

---

Ready to customize? Start with updating your WhatsApp number above! 👆

Questions? Check the README.md file or DEPLOYMENT.md for detailed info.

# Pureflo Landing Page - Deployment Guide

Complete step-by-step guide to deploy your Pureflo landing page.

## Pre-Deployment Checklist

- [ ] Update WhatsApp business number
- [ ] Update business contact information (phone, email, address)
- [ ] Test all forms and links
- [ ] Verify responsive design on mobile/tablet
- [ ] Configure email service (Resend) if needed
- [ ] Update product images if using custom photos
- [ ] Set up custom domain

## Option 1: Deploy to Vercel (Recommended)

Vercel is optimized for Next.js and provides the best performance.

### Step 1: Prepare Your Repository

1. Initialize a Git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Pureflo landing page"
```

2. Create a GitHub account at [github.com](https://github.com)

3. Create a new repository named `pureflo-landing`

4. Push your code to GitHub:
```bash
git remote add origin https://github.com/yourusername/pureflo-landing.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up

2. Click "New Project"

3. Select "Import Git Repository"

4. Choose your `pureflo-landing` repository

5. Configure project:
   - Framework: Next.js (auto-detected)
   - Root Directory: ./
   - Environment Variables (see next section)

6. Click "Deploy"

### Step 3: Set Environment Variables in Vercel

1. Go to your project settings in Vercel

2. Navigate to "Environment Variables"

3. Add the following variables:

```
RESEND_API_KEY=your_api_key_from_resend
NEXT_PUBLIC_BUSINESS_EMAIL=sales@pureflo.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
```

### Step 4: Configure Custom Domain

1. In Vercel project settings, go to "Domains"

2. Click "Add Domain"

3. Enter your domain (e.g., `pureflo.com`)

4. Update your domain registrar's DNS records to point to Vercel:
   - A record: `76.76.19.126`
   - CNAME record: `cname.vercel-dns.com`

5. Verify domain connection

### Step 5: Deploy Updates

Every time you push to GitHub, Vercel automatically deploys:

```bash
git add .
git commit -m "Update: Change feature description"
git push origin main
```

---

## Option 2: Deploy to Netlify

### Step 1: Build for Production

```bash
npm run build
```

### Step 2: Connect Netlify

1. Go to [netlify.com](https://netlify.com) and sign up

2. Click "New site from Git"

3. Choose GitHub and select your repository

4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

5. Set environment variables in Netlify settings

6. Deploy

---

## Option 3: Deploy to a Dedicated Server

### Using PM2 (Production Node Manager)

1. Install Node.js on your server

2. Clone repository:
```bash
git clone https://github.com/yourusername/pureflo-landing.git
cd pureflo-landing
npm install
npm run build
```

3. Install PM2:
```bash
npm install -g pm2
```

4. Start the application:
```bash
pm2 start npm --name "pureflo" -- start
pm2 startup
pm2 save
```

5. Configure Nginx reverse proxy (optional for production)

---

## Email Service Configuration (Resend)

### Setup Resend for Email Notifications

1. Sign up at [resend.com](https://resend.com)

2. Verify your email domain

3. Get your API key from settings

4. In `/app/api/submit-enquiry/route.ts`:
   - Uncomment lines 56-101
   - Update email addresses
   - Ensure `RESEND_API_KEY` is set in environment

5. Test by submitting the form

### Alternative Email Services

If not using Resend, you can integrate:
- **SendGrid**: Update API call in route.ts
- **AWS SES**: Configure AWS credentials
- **Mailgun**: Change endpoint and auth
- **Firebase**: Setup Firestore for form storage

---

## Post-Deployment Tasks

### 1. Test All Features

- [ ] Test form submission
- [ ] Verify WhatsApp link works
- [ ] Check all navigation links
- [ ] Test 360° viewer on mobile
- [ ] Verify responsive design
- [ ] Test on different browsers

### 2. Analytics Setup

Add Google Analytics in `/app/layout.tsx`:

```typescript
import { Analytics } from "@vercel/analytics/next";

// Already included in the layout
<Analytics />
```

Or add Google Analytics 4:

```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Search Engine Submission

1. Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://pureflo.com</loc>
    <lastmod>2025-03-10</lastmod>
    <changefreq>weekly</changefreq>
  </url>
</urlset>
```

2. Submit to Google Search Console

3. Submit to Bing Webmaster Tools

### 4. Performance Optimization

Test with:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## Monitoring & Maintenance

### Monitor Uptime

- Use [Uptime Robot](https://uptimerobot.com) (free)
- Set alerts for downtime

### Monitor Errors

- Enable Sentry in Vercel settings
- Monitor API errors
- Check email delivery logs (Resend dashboard)

### Regular Updates

1. Update dependencies monthly:
```bash
npm update
npm audit
```

2. Check for security vulnerabilities:
```bash
npm audit fix
```

3. Monitor analytics for user behavior

---

## Troubleshooting

### Common Issues

**Q: Form submissions not working**
- Check API endpoint is deployed
- Verify environment variables are set
- Check browser console for errors

**Q: Images not loading**
- Verify images are in `/public/images/tank-360/`
- Check image paths in components
- Use relative paths, not absolute

**Q: 360° viewer not rotating**
- Check JavaScript is enabled
- Verify images exist
- Test mouse drag functionality

**Q: Slow load times**
- Check image sizes
- Enable caching in Vercel settings
- Use CDN for images

---

## Rollback Procedure

If you need to revert to a previous version:

### Vercel
1. Go to deployments in Vercel dashboard
2. Click on previous deployment
3. Click "Redeploy"

### GitHub
```bash
git log --oneline
git revert <commit-hash>
git push origin main
```

---

## Support & Updates

- Monitor email for form submissions
- Respond to enquiries within 24 hours
- Update product information as needed
- Add customer testimonials periodically

---

## Production Checklist

Before going live:

- [ ] Custom domain configured
- [ ] SSL certificate verified
- [ ] Email notifications working
- [ ] WhatsApp link tested
- [ ] Mobile responsiveness verified
- [ ] Analytics enabled
- [ ] Backup strategy in place
- [ ] Support contact available
- [ ] Legal/Privacy pages ready
- [ ] Google Search Console set up

---

For questions or support, contact the development team.

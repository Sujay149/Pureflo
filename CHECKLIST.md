# Pureflo Landing Page - Setup & Launch Checklist

Use this checklist to ensure everything is ready before launching your site.

---

## Pre-Launch Checklist

### ✅ Installation & Setup (5 minutes)

- [ ] Cloned/downloaded project
- [ ] Ran `npm install`
- [ ] Started dev server with `npm run dev`
- [ ] Opened http://localhost:3000 in browser
- [ ] Site loads without errors

### ✅ Customization (20 minutes)

#### Contact Information
- [ ] Updated WhatsApp number in `Header.tsx` (line 24)
- [ ] Updated WhatsApp number in `FloatingWhatsApp.tsx` (line 9)
- [ ] Updated WhatsApp number in `Footer.tsx` (line 64)
- [ ] Updated phone number in `Footer.tsx` (line 68)
- [ ] Updated email address in `Footer.tsx` (line 74)
- [ ] Updated physical address in `Footer.tsx` (lines 80-81)

#### Branding (Optional)
- [ ] Reviewed brand colors in `globals.css`
- [ ] Updated colors if needed (lines 7-15)
- [ ] Verified colors look correct on page

#### Content (Optional)
- [ ] Updated hero tagline in `HeroSection.tsx`
- [ ] Updated about text in `AboutBrand.tsx`
- [ ] Updated product features in `ProductFeatures.tsx`
- [ ] Updated statistics in `AboutBrand.tsx`
- [ ] Updated form labels in `EnquiryForm.tsx`

#### Product Images (Optional)
- [ ] Prepared 24 product images (tank-01.jpg through tank-24.jpg)
- [ ] Verified image dimensions and format (JPG)
- [ ] Replaced images in `/public/images/tank-360/`

### ✅ Functionality Testing (15 minutes)

#### Navigation & Links
- [ ] Header navigation links scroll to sections
- [ ] Footer "Back to Top" links work
- [ ] Smooth scrolling is enabled

#### Hero Section
- [ ] Hero section displays correctly
- [ ] "View Products" button scrolls to 360° viewer
- [ ] "Enquire Now" button scrolls to form
- [ ] Product image visible on desktop

#### About & Features Sections
- [ ] About section displays correctly
- [ ] Feature cards display and animate on hover
- [ ] Statistics are visible and correct

#### Product Gallery
- [ ] Gallery images display (4 angles)
- [ ] Images are responsive and scale properly
- [ ] Hover effects work on desktop

#### 360° Viewer
- [ ] 360° viewer section displays
- [ ] Can drag horizontally on desktop
- [ ] Image changes when dragging
- [ ] Angle indicator updates (0°-360°)
- [ ] Progress bar moves correctly
- [ ] Reset button works and returns to tank-01.jpg
- [ ] Works on mobile with swipe gestures
- [ ] Drag indicators visible

#### Enquiry Form
- [ ] Form displays with all fields
- [ ] Name field required (test empty submission)
- [ ] Email validation works (test invalid email)
- [ ] Phone validation works (test invalid phone)
- [ ] Location field required
- [ ] Tank capacity dropdown has options
- [ ] Message field optional
- [ ] Submit button displays
- [ ] Submit button shows loading state
- [ ] Form shows success message after submission
- [ ] Form clears after successful submission

#### WhatsApp Integration
- [ ] WhatsApp floating button displays (bottom-right)
- [ ] WhatsApp button link opens chat
- [ ] WhatsApp link in Header works
- [ ] WhatsApp link in Footer works

#### Footer
- [ ] Footer displays all contact information
- [ ] Phone number is clickable (tel: link)
- [ ] Email is clickable (mailto: link)
- [ ] WhatsApp button in footer works
- [ ] All footer links functional

### ✅ Responsive Design Testing (15 minutes)

#### Mobile (< 768px)
- [ ] Open DevTools (F12)
- [ ] Set to iPhone 12/13/14 size
- [ ] Hero section stacks vertically
- [ ] Navigation hamburger menu appears
- [ ] All sections readable
- [ ] 360° viewer works with swipe
- [ ] Form is readable and usable
- [ ] Buttons are tap-friendly (large enough)
- [ ] No horizontal scrolling
- [ ] Text is readable without zooming

#### Tablet (768px - 1024px)
- [ ] Set to iPad size
- [ ] 2-column layouts work
- [ ] Touch interactions responsive
- [ ] Proper spacing maintained

#### Desktop (> 1024px)
- [ ] 3-column layouts display
- [ ] Full-width images visible
- [ ] Hover effects work
- [ ] Mouse drag for 360° viewer works

### ✅ Performance Testing (10 minutes)

#### Animations
- [ ] Fade-in animations on scroll
- [ ] Hover effects are smooth
- [ ] 360° viewer transitions smooth
- [ ] No jank or stuttering
- [ ] Floating elements animate smoothly

#### Page Load
- [ ] Page loads quickly
- [ ] Images load properly
- [ ] No broken image links
- [ ] Console has no errors (F12)

#### Browser Compatibility
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge

### ✅ Email Configuration (Optional - 5 minutes)

If using Resend for email notifications:

- [ ] Created Resend.com account
- [ ] Obtained API key
- [ ] Set `RESEND_API_KEY` in environment
- [ ] Uncommented email code in `app/api/submit-enquiry/route.ts` (lines 56-101)
- [ ] Updated email address in code
- [ ] Tested form submission sends email
- [ ] Verified email received

### ✅ SEO Verification (5 minutes)

- [ ] Page title displays in browser tab
- [ ] Meta description is set
- [ ] OpenGraph tags configured (for social sharing)
- [ ] All images have alt text
- [ ] Headings are semantic (h1, h2, h3)
- [ ] No console warnings or errors
- [ ] Mobile viewport meta tag present

### ✅ Accessibility Check (5 minutes)

- [ ] Can navigate with keyboard (Tab, Enter)
- [ ] Form is keyboard accessible
- [ ] Buttons are visually focused
- [ ] Color contrast is sufficient
- [ ] Images have descriptive alt text
- [ ] No auto-playing audio/video

---

## Pre-Deployment Checklist

### ✅ Code Review (10 minutes)

- [ ] No console errors (F12)
- [ ] No console warnings
- [ ] All files saved
- [ ] No uncommitted changes (if using Git)

### ✅ Production Build Test (5 minutes)

```bash
npm run build
```

- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No warnings during build
- [ ] Build time is reasonable

### ✅ GitHub Repository (5 minutes)

- [ ] Created GitHub account
- [ ] Created new repository
- [ ] Initialized git: `git init`
- [ ] Added files: `git add .`
- [ ] Committed: `git commit -m "Initial commit"`
- [ ] Added remote: `git remote add origin ...`
- [ ] Pushed to GitHub: `git push -u origin main`

---

## Deployment Checklist

### ✅ Deploy to Vercel (5 minutes)

- [ ] Logged into Vercel.com
- [ ] Created new project
- [ ] Selected GitHub repository
- [ ] Verified build settings (auto-detected)
- [ ] Clicked "Deploy"
- [ ] Waited for deployment to complete
- [ ] Verified site is live at vercel domain

### ✅ Environment Variables (5 minutes - if using email)

- [ ] Went to project settings in Vercel
- [ ] Added environment variables:
  - [ ] `RESEND_API_KEY=...`
  - [ ] `NEXT_PUBLIC_BUSINESS_EMAIL=...`
- [ ] Redeployed project
- [ ] Verified environment variables are set

### ✅ Custom Domain (Optional - 10 minutes)

- [ ] Purchased domain (GoDaddy, Namecheap, etc.)
- [ ] In Vercel project settings → Domains
- [ ] Added custom domain
- [ ] Copied DNS records
- [ ] Updated DNS at domain registrar
- [ ] Waited for DNS propagation (up to 48 hours)
- [ ] Verified domain works with https

### ✅ SSL Certificate

- [ ] Vercel auto-provisions SSL
- [ ] HTTPS works (lock icon in browser)
- [ ] Redirects http to https

---

## Post-Launch Checklist

### ✅ Verification (5 minutes)

- [ ] Live site is accessible
- [ ] All sections display correctly
- [ ] 360° viewer works
- [ ] Form submission works
- [ ] WhatsApp button functional
- [ ] No errors in browser console
- [ ] Responsive on mobile/tablet

### ✅ Analytics Setup (Optional - 10 minutes)

- [ ] Google Analytics account created
- [ ] Tracking ID obtained
- [ ] Added to layout.tsx or separate script
- [ ] Verified tracking is working
- [ ] Set up basic conversion goals

### ✅ Search Engine Submission (Optional - 5 minutes)

- [ ] Created Google Search Console account
- [ ] Verified domain ownership
- [ ] Submitted sitemap
- [ ] Checked for indexing issues

- [ ] Created Bing Webmaster account
- [ ] Verified domain ownership
- [ ] Submitted sitemap

### ✅ Social Media Integration (Optional)

- [ ] Created business profiles (LinkedIn, Facebook, Instagram)
- [ ] Shared landing page link
- [ ] Added to website bio links
- [ ] Tested social share buttons

### ✅ Monitoring (Ongoing)

- [ ] Set up uptime monitoring (Uptime Robot)
- [ ] Enabled error tracking (Sentry)
- [ ] Monitoring form submissions
- [ ] Checking analytics regularly
- [ ] Responding to enquiries within 24 hours

---

## Maintenance Schedule

### Daily
- [ ] Check form submissions
- [ ] Respond to enquiries
- [ ] Monitor uptime

### Weekly
- [ ] Review analytics
- [ ] Check for errors/issues
- [ ] Test all functions

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Check security: `npm audit`
- [ ] Review analytics trends
- [ ] Update content if needed

### Quarterly
- [ ] Major security updates
- [ ] Content refresh
- [ ] Performance optimization
- [ ] User feedback review

---

## Common Issues & Quick Fixes

### Images Not Loading
- [ ] Check image files exist in `/public/images/tank-360/`
- [ ] Verify filenames: tank-01.jpg through tank-24.jpg
- [ ] Clear browser cache: Ctrl+Shift+Delete
- [ ] Restart dev server

### Form Not Submitting
- [ ] Check API endpoint exists
- [ ] Verify all fields filled
- [ ] Check console for errors (F12)
- [ ] Test in incognito mode

### Styling Issues
- [ ] Clear cache and reload
- [ ] Restart dev server
- [ ] Check Tailwind classes spelling
- [ ] Verify globals.css is loading

### Deployment Failed
- [ ] Check Node version: `node --version`
- [ ] Run `npm run build` locally first
- [ ] Verify environment variables set
- [ ] Check GitHub branch is main

---

## Final Sign-Off

- [ ] All items completed
- [ ] Site tested thoroughly
- [ ] Deployed to production
- [ ] Live and functional
- [ ] Ready to share with users

---

## Support Resources

| Issue | Resource |
|-------|----------|
| Setup help | GETTING_STARTED.md |
| Quick start | QUICKSTART.md |
| Deployment | DEPLOYMENT.md |
| Features | PROJECT_SUMMARY.md |
| Full docs | README.md |
| Config | lib/config.ts |

---

## Launch Date

**Target Date:** ________________

**Actual Date:** ________________

**Notes:**
_________________________________________________
_________________________________________________

---

**Congratulations on launching your Pureflo landing page!** 🎉

For ongoing support, refer to the documentation files or review component code comments.

---

*Last Updated: March 2025*

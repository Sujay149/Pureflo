# Visual Design Reference

## Brand Colors in Use

### Primary Palette
- **Deep Blue Gradient** (#0F4C9C to #0A2F6B)
  - Used for: Hero background, card backgrounds, section backdrops
  - Creates: Premium, professional appearance
  
- **Accent Yellow** (#FFD60A)
  - Used for: CTA buttons, text highlights, emphasis elements
  - Creates: High visibility and engagement focus
  
- **White** (#FFFFFF)
  - Used for: Text on dark backgrounds, card backgrounds
  - Creates: Clean contrast and readability

### Secondary Palette
- **Water Blue** (#3A86FF)
  - Used for: Hover states, secondary accents
  
- **Light Background** (#F5F9FF)
  - Used for: Section backgrounds, subtle contrast

## Design Application by Section

### Hero Section
```
Background: Deep Blue Gradient (#0F4C9C → #0A2F6B)
Overlay: Water droplet pattern (20% opacity)
Text: White main, Yellow highlights
Product: Actual Pureflo tank image
Buttons: Yellow CTA, White bordered secondary
Decorative: Floating yellow circles
```

### Product Gallery
```
Section Background: White to Light Blue gradient
Cards: Deep Blue gradient (#0F4C9C → #0A2F6B)
Images: Actual Pureflo product
Text: Dark Blue titles, Gray descriptions
Hover: Black overlay (60% opacity)
Button: Primary Blue with hover to Dark Blue
```

### 360° Viewer
```
Section Background: White
Viewer Box: Deep Blue gradient (#0F4C9C → #0A2F6B)
Drag Indicators: White text with black shadow
Images: Product rotation sequence (24 images)
Interaction: Smooth drag-to-rotate
```

### About & Features Sections
```
About: White background with icon badges
Features: Light Blue to White gradient background
Icons: Primary Blue backgrounds with white icons
Text: Dark Blue titles, Gray descriptions
Highlights: Yellow accent dots
```

## Typography System

### Heading Font: Poppins
- Sizes: 60px (H1), 48px (H2), 36px (H3), 28px (H4)
- Weight: 700-800 (Bold)
- Color: Dark Blue (#0A2F6B) or White (on dark backgrounds)

### Body Font: Inter
- Size: 18px (Large), 16px (Regular), 14px (Small)
- Weight: 400-600
- Color: Gray-600 (light text), Dark Blue (standard text)

## Spacing Scale (Tailwind)

- Padding: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- Gaps: 8px, 12px, 16px, 20px, 24px, 32px
- Margins: Follow padding scale

## Component Patterns

### Buttons
**Primary CTA**
- Background: Accent Yellow (#FFD60A)
- Text: Dark Blue
- Hover: White background
- Size: 48px height, 32px horizontal padding

**Secondary CTA**
- Border: 2px White
- Text: White
- Hover: Filled with White, text Dark Blue
- Size: 48px height, 32px horizontal padding

### Cards
- Background: White or Deep Blue gradient
- Border Radius: 12px
- Shadow: Soft shadow on white, none on blue
- Padding: 16-24px
- Hover: Lift effect (-8px), enhanced shadow

### Section Headers
- Label: Primary Blue, 12px uppercase, 2px letter spacing
- Title: Dark Blue, 36-48px, Poppins bold
- Description: Gray, 18px, max-width 640px

## Animation Timings

- Fade In: 0.5-0.8s ease-out
- Scale: 0.3s ease
- Hover Effects: 0.3s ease
- Scroll Animations: Staggered 0.1-0.2s between items

## Responsive Breakpoints

- Mobile: < 640px (Full width, stacked layout)
- Tablet: 640px - 1024px (2 columns, adjusted spacing)
- Desktop: > 1024px (3-4 columns, full layout)

## Logo & Branding

- **Logo Color**: White (on dark), Primary Blue (on light)
- **Size**: 
  - Hero: 64px height
  - Header: 48px height
  - Footer: 32px height
- **Spacing**: 12-16px padding around logo

## Image Specifications

### Product Image
- Format: JPG (optimized)
- Dimensions: Full square aspect ratio
- Background: Blue gradient (hero & gallery)
- Usage: `/public/images/pureflo-product.jpg`

### 360° Images
- Format: JPG (optimized)
- Sequence: 24 images (tank-01.jpg through tank-24.jpg)
- Dimensions: Square aspect ratio
- Usage: `/public/images/tank-360/tank-[number].jpg`

## Visual Hierarchy

1. **Hero Section** - Largest, most prominent, deep blue
2. **Features** - Secondary focus, icon-based
3. **Gallery** - Product showcase with consistent styling
4. **Interactive Viewer** - Engagement element
5. **Enquiry Form** - Conversion point
6. **Footer** - Reference information

---

This design system ensures consistency across all sections while highlighting the Pureflo product and encouraging customer engagement through strategic use of color, typography, and spacing.

# 🎨 Hero Section Customization Guide

## Overview

Your Hero section now features a **modern split-layout design** with:
- ✅ Professional profile image with glow effects
- ✅ Responsive grid layout (2 columns on desktop, stacked on mobile)
- ✅ Smooth Framer Motion animations
- ✅ Social media links
- ✅ Custom decorative elements
- ✅ Fully customizable content

---

## 🖼️ How to Change Your Profile Image

### Quick Change (Most Common)

**Location:** `components/sections/Hero.tsx` (Lines 10-20)

```tsx
// 🎨 CUSTOMIZATION: Change these values
const PROFILE_IMAGE_URL = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
const YOUR_NAME = "Your Full Name"
const YOUR_ROLE = "Full-Stack Developer"
const YOUR_BIO = "Crafting exceptional digital experiences..."
```

### Option 1: Use Your Own Hosted Image URL

Replace the `PROFILE_IMAGE_URL` with your image URL:

```tsx
const PROFILE_IMAGE_URL = "https://yourwebsite.com/images/profile.jpg"
```

### Option 2: Use a Local Image (Recommended)

1. **Add your image to the project:**
   - Place your image in the `public` folder
   - For example: `public/profile.jpg`

2. **Update the URL:**
   ```tsx
   const PROFILE_IMAGE_URL = "/profile.jpg"
   ```

3. **Best practices for your image:**
   - Use a square image (1:1 aspect ratio)
   - Recommended size: 800x800 pixels or larger
   - Format: JPG, PNG, or WebP
   - Professional headshot or portrait style works best

### Option 3: Use Unsplash or Other Services

```tsx
// Unsplash
const PROFILE_IMAGE_URL = "https://images.unsplash.com/photo-YOUR-ID?fit=crop&w=800&q=80"

// Imgur
const PROFILE_IMAGE_URL = "https://i.imgur.com/YOUR-IMAGE.jpg"

// Cloudinary
const PROFILE_IMAGE_URL = "https://res.cloudinary.com/YOUR-CLOUD/image/upload/v1234567890/profile.jpg"
```

---

## ✏️ Personalizing Your Content

### Change Your Name

```tsx
const YOUR_NAME = "John Smith"  // Replace with your name
```

This appears as the large gradient heading.

### Change Your Role/Title

```tsx
const YOUR_ROLE = "Frontend Developer"
// Or
const YOUR_ROLE = "React Specialist"
// Or
const YOUR_ROLE = "UI/UX Engineer"
```

This appears below your name in a slightly smaller font.

### Update Your Bio

```tsx
const YOUR_BIO = "Your custom bio here. Keep it concise and engaging, around 2-3 sentences."
```

**Tips for a great bio:**
- Keep it under 200 characters
- Focus on what you do and your passion
- Mention key technologies or specializations
- Make it personal but professional

---

## 🔗 Social Media Links

### Location in Code

```tsx
const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "your.email@example.com"
}
```

### Customization Options

**Update with your profiles:**
```tsx
const SOCIAL_LINKS = {
  github: "https://github.com/johnsmith",
  linkedin: "https://linkedin.com/in/johnsmith",
  email: "john.smith@example.com"
}
```

**Hide a social link:**
```tsx
const SOCIAL_LINKS = {
  github: "https://github.com/johnsmith",
  linkedin: "",  // Hidden - empty string
  email: "john.smith@example.com"
}
```

**Add more social links** (requires code modification):

After line 89, add more icon buttons following this pattern:
```tsx
{SOCIAL_LINKS.twitter && (
  <a
    href={SOCIAL_LINKS.twitter}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full glass-effect hover:bg-slate-800/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-blue-500/50"
    aria-label="Twitter Profile"
  >
    <Twitter className="w-5 h-5" />
  </a>
)}
```

Don't forget to import the icon:
```tsx
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react'
```

---

## 🎨 Styling Customizations

### Change Image Size

**Desktop sizes** (Line 47):
```tsx
// Current: 450x450px
className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]"

// Larger (550x550px):
className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[550px] lg:h-[550px]"

// Smaller (350x350px):
className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[350px] lg:h-[350px]"
```

### Change Image Border Radius

**More rounded** (Line 47):
```tsx
// Current: rounded-2xl
className="... rounded-2xl ..."

// Fully rounded (circle):
className="... rounded-full ..."

// Less rounded:
className="... rounded-xl ..."
```

### Adjust Glow Effect Color

**Change glow gradient** (Line 43):
```tsx
// Current: Blue → Purple → Pink
className="... bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 ..."

// Green → Teal → Blue:
className="... bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 ..."

// Orange → Red:
className="... bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 ..."
```

### Change Decorative Corners

**Modify corner accents** (Lines 63-64):

```tsx
// Remove corners completely (delete these lines):
<div className="absolute -top-4 -left-4 ..."></div>
<div className="absolute -bottom-4 -right-4 ..."></div>

// Change colors:
border-blue-500/50    → border-green-500/50
border-purple-500/50  → border-orange-500/50
```

### Adjust Status Badge

**Change badge text** (Line 73):
```tsx
<Badge variant="success" className="shadow-lg">
  Available for Projects  // Change this text
</Badge>

// Examples:
"Open to Opportunities"
"Currently Freelancing"
"Actively Looking"
```

**Change badge color** (Line 72):
```tsx
variant="success"  // Green (default)
variant="primary"  // Blue
variant="warning"  // Yellow
variant="info"     // Purple
```

---

## 🎬 Animation Customizations

### Adjust Animation Speed

**Image slide-in** (Line 38):
```tsx
transition={{ duration: 0.8, ease: "easeOut" }}
// Slower: duration: 1.2
// Faster: duration: 0.5
```

**Text fade-in** (Line 81):
```tsx
transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
// Less delay: delay: 0.1
// More delay: delay: 0.4
```

### Change Animation Direction

**Image from bottom instead of left:**
```tsx
// Change Line 38:
initial={{ opacity: 0, x: -50 }}  // From left
animate={{ opacity: 1, x: 0 }}

// To:
initial={{ opacity: 0, y: 50 }}   // From bottom
animate={{ opacity: 1, y: 0 }}
```

**Text from left instead of right:**
```tsx
// Change Line 81:
initial={{ opacity: 0, x: 50 }}   // From right
animate={{ opacity: 1, x: 0 }}

// To:
initial={{ opacity: 0, x: -50 }}  // From left
animate={{ opacity: 1, x: 0 }}
```

### Disable Animations (Static)

Remove animation properties:
```tsx
// Before:
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>

// After:
<div>
```

---

## 📱 Responsive Behavior

### Desktop View (lg and above)
- Two-column grid layout
- Image on left, text on right
- Text left-aligned
- 450x450px image

### Tablet View (md)
- Two-column grid maintained
- Slightly smaller image (384x384px)
- Text still left-aligned

### Mobile View (sm and below)
- Stacked vertically
- Image on top (288x288px on mobile, 384x384px on small tablets)
- Text below, center-aligned
- Social links centered

### Modify Breakpoints

**Change when columns stack** (Line 33):
```tsx
// Current: stacks below 1024px (lg)
className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"

// Stack earlier (below 768px - md):
className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"

// Stack later (below 1280px - xl):
className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center"
```

---

## 🎯 Button Customization

### Change Button Text

**Primary button** (Line 150):
```tsx
<Button variant="primary" size="lg">
  View My Work  // Change this
</Button>

// Examples:
"See Portfolio"
"View Projects"
"My Work"
```

**Secondary button** (Line 156):
```tsx
<Button variant="secondary" size="lg">
  Hire Me  // Change this
</Button>

// Examples:
"Let's Talk"
"Get in Touch"
"Contact Me"
```

### Change Button Actions

Update the `onClick` handlers:
```tsx
// Link to external URL:
onClick={() => window.open('https://yourportfolio.com', '_blank')}

// Scroll to different section:
onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}

// Navigate to another page:
onClick={() => window.location.href = '/contact'}
```

---

## 🌟 Additional Tips

### Image Optimization

For best performance with Next.js Image component:

1. **Use WebP format** - Smaller file sizes
2. **Proper dimensions** - 800x800px is optimal
3. **Compress images** - Use TinyPNG or similar
4. **Place in /public** - For local images

### Accessibility

The component includes:
- ✅ Proper alt text for images
- ✅ ARIA labels for icons
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support

To customize alt text (Line 50):
```tsx
alt={`${YOUR_NAME} - Professional Profile`}
```

### Performance

The image uses:
- `priority` prop for above-the-fold loading
- `sizes` attribute for responsive images
- Next.js automatic optimization

---

## 🚀 Quick Customization Checklist

Before deploying, update these:

- [ ] Profile image URL (`PROFILE_IMAGE_URL`)
- [ ] Your name (`YOUR_NAME`)
- [ ] Your role (`YOUR_ROLE`)
- [ ] Your bio (`YOUR_BIO`)
- [ ] GitHub link (`SOCIAL_LINKS.github`)
- [ ] LinkedIn link (`SOCIAL_LINKS.linkedin`)
- [ ] Email address (`SOCIAL_LINKS.email`)
- [ ] Button text (if desired)
- [ ] Status badge text (if desired)

---

## 📸 Screenshot Preview

### Desktop Layout
```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ┌──────────────┐      Hello, I'm              │
│  │              │      Your Full Name           │
│  │   Profile    │      Full-Stack Developer     │
│  │    Image     │                               │
│  │              │      Bio text here...         │
│  │   [Glow]     │                               │
│  └──────────────┘      [View Work] [Hire Me]   │
│  [Available]           [Social Icons]           │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Mobile Layout
```
┌──────────────────┐
│                  │
│  ┌────────────┐  │
│  │            │  │
│  │  Profile   │  │
│  │   Image    │  │
│  │            │  │
│  └────────────┘  │
│  [Available]     │
│                  │
│  Hello, I'm      │
│  Your Name       │
│  Developer       │
│                  │
│  Bio text...     │
│                  │
│  [View Work]     │
│  [Hire Me]       │
│  [Social Icons]  │
│                  │
└──────────────────┘
```

---

## 🆘 Troubleshooting

### Image Not Loading

**Check:**
1. URL is correct and accessible
2. Image file exists in `/public` folder
3. No CORS issues with external URLs
4. Proper file extension (.jpg, .png, .webp)

### Animations Not Working

**Ensure:**
1. Framer Motion is installed: `npm install framer-motion`
2. Component is client-side: `'use client'` at top
3. No conflicting CSS

### Layout Issues

**Try:**
1. Clear browser cache
2. Check responsive breakpoints
3. Verify Tailwind classes are correct
4. Inspect element in dev tools

---

## 📚 Related Documentation

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Image Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/images)
- [Tailwind CSS Grid](https://tailwindcss.com/docs/grid-template-columns)
- [Lucide Icons](https://lucide.dev/)

---

**Need more help?** Check out `ARCHITECTURE.md` for the overall project structure or `REFACTOR_SUMMARY.md` for component organization details.

Happy customizing! 🎨

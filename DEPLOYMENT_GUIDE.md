# 🚀 Deployment Guide - Get Your Portfolio Live

## Quick Deploy Options

### Option 1: Vercel (Recommended - 2 minutes)

Vercel is made by the creators of Next.js and offers the best performance.

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Premium Portfolio"
   git remote add origin https://github.com/yourusername/your-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live at `your-portfolio.vercel.app`

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `yourname.com`)
   - Follow DNS configuration instructions
   - SSL certificate added automatically

**Benefits:**
- ✅ Automatic deployments on git push
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Automatic optimizations
- ✅ Analytics included
- ✅ Zero configuration needed

---

### Option 2: Netlify (Alternative - 3 minutes)

**Steps:**

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

**Benefits:**
- ✅ Easy deployment
- ✅ Form handling built-in
- ✅ Free tier available
- ✅ Custom domains

---

### Option 3: Self-Hosted (VPS/Dedicated Server)

For advanced users who want full control.

**Requirements:**
- Node.js 18+ installed on server
- PM2 or similar process manager
- Nginx or Apache for reverse proxy

**Steps:**

1. **Build the project**
   ```bash
   npm install
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   # Or use PM2
   pm2 start npm --name "portfolio" -- start
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Setup SSL with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Environment Variables

If you add backend functionality (contact form, analytics, etc.), create a `.env.local` file:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# If using email service
EMAIL_SERVICE_API_KEY=your_api_key_here
SENDGRID_API_KEY=your_sendgrid_key

# If using database
DATABASE_URL=postgresql://...

# If using CMS
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

**Important:** 
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Other variables are server-side only
- Never commit `.env.local` to git (it's in `.gitignore`)

---

## Pre-Deployment Checklist

### Content Updates
- [ ] Update projects in `lib/data.ts` with your real projects
- [ ] Update blog posts with your actual articles
- [ ] Update hero text in `components/Hero.tsx`
- [ ] Add your social media links
- [ ] Add your real contact information

### SEO & Metadata
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add Open Graph image (`public/og-image.jpg`)
- [ ] Update favicon (`public/favicon.ico`)
- [ ] Add `robots.txt` if needed
- [ ] Add `sitemap.xml` for better SEO

### Performance
- [ ] Add real project images (optimize them first)
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Check bundle size: `npm run build`

### Functionality
- [ ] Test all links
- [ ] Test form validation
- [ ] Test responsive design
- [ ] Check browser compatibility
- [ ] Test animations performance

### Analytics (Optional)
- [ ] Add Google Analytics
- [ ] Add Vercel Analytics
- [ ] Setup form submission tracking

---

## Adding Real Functionality

### 1. Contact Form Email Integration

**Using Resend (Recommended):**

Install:
```bash
npm install resend
```

Create API route `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    await resend.emails.send({
      from: 'portfolio@yourdomain.com',
      to: 'your@email.com',
      subject: `New Project Inquiry from ${data.name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Description:</strong> ${data.description}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
```

Update `components/ProjectDiscovery.tsx`:
```typescript
const onSubmit = async (data: FormData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  
  if (response.ok) {
    setIsSubmitted(true)
  }
}
```

### 2. Google Analytics

Install:
```bash
npm install @next/third-parties
```

Update `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### 3. Blog with CMS (Sanity.io)

For a real blog with content management:

```bash
npm install @sanity/client @portabletext/react
```

This allows non-technical content updates through Sanity Studio.

---

## Performance Optimization Tips

### 1. Image Optimization
Use Next.js Image component:
```typescript
import Image from 'next/image'

<Image 
  src="/projects/project1.jpg" 
  alt="Project"
  width={800}
  height={600}
  priority
/>
```

### 2. Bundle Analysis
```bash
npm install @next/bundle-analyzer
```

Add to `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // your config
})
```

Run: `ANALYZE=true npm run build`

### 3. Font Optimization
Already using Next.js font optimization with Inter font.

---

## Domain Setup

### Connecting Custom Domain

**DNS Configuration:**

For `yourdomain.com`:
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP)
```

For `www.yourdomain.com`:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Wait for propagation** (can take up to 48 hours, usually much faster)

---

## Monitoring & Maintenance

### What to Monitor
- Uptime (use UptimeRobot or similar)
- Performance (Lighthouse scores)
- Error tracking (Sentry)
- Analytics (visitor behavior)

### Regular Updates
```bash
# Update dependencies quarterly
npm outdated
npm update

# Check for security issues
npm audit
npm audit fix
```

---

## Troubleshooting Common Issues

### Build Fails
- Check Node.js version: `node -v` (needs 18+)
- Clear cache: `rm -rf .next`
- Reinstall: `rm -rf node_modules && npm install`

### Vercel Deployment Issues
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify `package.json` has correct scripts

### Form Not Submitting
- Check browser console for errors
- Verify API routes are working
- Check CORS settings if using external API

### Slow Performance
- Optimize images (use WebP format)
- Reduce bundle size
- Enable caching headers
- Use CDN for assets

---

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## 🎉 Final Steps

1. ✅ Deploy your site
2. ✅ Test everything on production
3. ✅ Share on LinkedIn/Twitter
4. ✅ Add to your resume
5. ✅ Start getting clients!

**Your premium portfolio is ready to help you land better clients and opportunities!** 🚀

---

Need help? Check the README.md or SETUP_GUIDE.md for more details.

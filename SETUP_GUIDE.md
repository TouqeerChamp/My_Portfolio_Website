# Quick Setup Guide

## 🚀 Getting Your Portfolio Live in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Framer Motion (animations)
- React Hook Form (form handling)
- Tailwind CSS (styling)
- Lucide React (icons)
- TypeScript

### Step 2: Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

### Step 3: Customize Your Content

#### Add Your Projects
Edit `lib/data.ts` - Update the `projects` array with your actual projects:

```typescript
{
  id: 1,
  title: "Your Amazing Project",
  industry: "SaaS", // E-commerce, Fintech, Healthcare, etc.
  description: "Brief project description",
  challenge: "What problem did you solve?",
  solution: "How did you solve it?",
  liveUrl: "https://your-demo.com",
  sourceUrl: "https://github.com/yourusername/project",
  performanceMetric: {
    label: "Lighthouse Score", // or "Load Time" or "Faster Load"
    value: "99" // or "0.8s" or "50%"
  },
  tags: ["Next.js", "PostgreSQL", "Redis"]
}
```

#### Add Your Blog Posts
Edit `lib/data.ts` - Update the `blogPosts` array:

```typescript
{
  id: 1,
  title: "Your Technical Article",
  excerpt: "Brief summary of the article",
  readTime: 8, // minutes
  difficulty: "Intermediate", // Beginner, Intermediate, or Expert
  category: "Performance", // Any category you want
  publishedAt: "2025-01-15",
  slug: "article-url-slug"
}
```

#### Update Your Information
Edit `components/Hero.tsx` to customize:
- Your headline
- Your description
- Call-to-action buttons

### Step 4: Add Your Images (Optional)
Place project images in `public/projects/` folder:
- ecommerce.jpg
- fintech.jpg
- saas.jpg
- etc.

Update the `image` property in your projects data.

### Step 5: Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy!

Your portfolio will be live at `your-portfolio.vercel.app`

## 🎨 Customization Tips

### Change Color Scheme
Edit `tailwind.config.ts` to change the primary color palette.

### Modify Animations
All animations use Framer Motion. Check components for `motion` elements to customize.

### Form Submission
Currently, the form logs to console. To connect to a backend:
1. Create an API route in `app/api/contact/route.ts`
2. Update the `onSubmit` function in `components/ProjectDiscovery.tsx`

Example API route:
```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Send email, save to database, etc.
  // Example: await sendEmail(data)
  
  return NextResponse.json({ success: true })
}
```

Then update the form:
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

## 🔥 Pro Tips

1. **Add Analytics**: Install Google Analytics or Vercel Analytics
2. **SEO Optimization**: Update metadata in `app/layout.tsx`
3. **Add Real Images**: Replace gradient placeholders with actual project screenshots
4. **Connect Blog**: Integrate with a CMS like Sanity or Contentful
5. **Add Testimonials**: Create a new section showcasing client reviews
6. **Social Links**: Add your social media links to the footer

## 🐛 Troubleshooting

**Build errors?**
- Make sure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be 18+)

**Styles not loading?**
- Ensure Tailwind is configured properly
- Check `globals.css` is imported in `layout.tsx`

**Forms not working?**
- Open browser console to see validation errors
- Check React Hook Form documentation for advanced validation

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

Need help? Check the README.md for more detailed information!

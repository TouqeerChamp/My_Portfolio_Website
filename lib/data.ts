export interface Project {
  id: number
  title: string
  industry: string
  description: string
  challenge: string
  solution: string
  liveUrl: string
  sourceUrl: string
  performanceMetric: {
    label: string
    value: string
  }
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern E-Commerce",
    industry: "E-commerce",
    description: "Full-featured online shopping platform with cart management and product catalog",
    challenge: "Building a responsive e-commerce experience with dynamic shopping cart and seamless checkout flow",
    solution: "Implemented Next.js with Tailwind CSS for styling, created reusable components, and integrated shopping cart functionality",
    liveUrl: "https://next-js-e-commerce-website-livid.vercel.app",
    sourceUrl: "https://github.com/TouqeerChamp/Next.js-E-commerce-Website",
    performanceMetric: {
      label: "Lighthouse Score",
      value: "95"
    },
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["Next.js", "Tailwind", "Shopping Cart"]
  },
  {
    id: 2,
    title: "Physical AI Book & RAG Chatbot",
    industry: "AI/ML",
    description: "Interactive AI-powered book with RAG (Retrieval Augmented Generation) chatbot for enhanced learning",
    challenge: "Integrating RAG technology to provide contextual responses based on book content",
    solution: "Built intelligent chatbot using RAG architecture with Python/JavaScript, enabling users to interact with book content",
    liveUrl: "https://touqeerchamp.github.io/physical_ai_book_with_rag_chatbot_updated/",
    sourceUrl: "https://github.com/TouqeerChamp/physical_ai_book_with_rag_chatbot_updated",
    performanceMetric: {
      label: "Response Time",
      value: "1.2s"
    },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["AI", "RAG", "Python/JS"]
  },
  {
    id: 3,
    title: "Easy Loan Interface",
    industry: "Fintech",
    description: "User-friendly loan application interface with modern UI/UX design principles",
    challenge: "Creating an intuitive interface for complex financial forms while maintaining user trust",
    solution: "Designed clean, accessible UI with React, focusing on user experience and responsive design patterns",
    liveUrl: "https://easy-loan-templates.vercel.app",
    sourceUrl: "https://github.com/TouqeerChamp/easy-loan-templates",
    performanceMetric: {
      label: "User Rating",
      value: "4.8/5"
    },
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    tags: ["Fintech", "UI/UX", "React"]
  },
  {
    id: 4,
    title: "Product Catalog Hackathon",
    industry: "E-commerce",
    description: "Dynamic product catalog with advanced sorting and API integration for hackathon project",
    challenge: "Implementing efficient product filtering, sorting, and API data management within tight deadline",
    solution: "Built scalable Next.js application with API routes, implemented advanced sorting algorithms and optimized data fetching",
    liveUrl: "https://hackathon-3-q2-final-2025.vercel.app/product",
    sourceUrl: "https://github.com/TouqeerChamp/hackathon-3-q2-final-2025",
    performanceMetric: {
      label: "Load Time",
      value: "0.9s"
    },
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    tags: ["Next.js", "API", "Sorting"]
  },
  {
    id: 5,
    title: "Tech Volt Electronics (E-Commerce)",
    industry: "E-commerce",
    description: "A premium electronics store with a sleek dark UI, category filtering, and a modern shopping experience",
    challenge: "Creating an immersive shopping experience with advanced filtering and seamless navigation",
    solution: "Built modern e-commerce platform with Headless UI components, category filtering, and optimized product browsing",
    liveUrl: "https://tech-volt-electronics-e-commerce.vercel.app",
    sourceUrl: "https://github.com/TouqeerChamp/tech-volt-electronics-e-commerce",
    performanceMetric: {
      label: "User Rating",
      value: "4.9/5"
    },
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80",
    tags: ["Next.js", "Tailwind CSS", "Headless UI", "E-commerce"]
  },
  {
    id: 6,
    title: "Interactive Resume/Portfolio",
    industry: "Personal Branding",
    description: "Interactive resume showcasing web development milestones and project achievements",
    challenge: "Creating engaging, interactive resume that stands out while maintaining professionalism",
    solution: "Developed dynamic portfolio with milestone tracking, interactive elements, and modern design principles",
    liveUrl: "https://hackathon-milestone-1-2-blush.vercel.app",
    sourceUrl: "https://github.com/TouqeerChamp/Hackathon-Milestone-1-2",
    performanceMetric: {
      label: "Engagement",
      value: "High"
    },
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    tags: ["Milestones", "Web Dev"]
  }
]

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  readTime: number
  difficulty: 'Beginner' | 'Intermediate' | 'Expert'
  category: string
  publishedAt: string
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Zero to Hero: Optimizing Next.js Bundle Size",
    excerpt: "Learn practical strategies to reduce your Next.js bundle size by 60% using dynamic imports, tree shaking, and smart code splitting techniques.",
    readTime: 8,
    difficulty: "Intermediate",
    category: "Performance",
    publishedAt: "2025-01-15",
    slug: "optimizing-nextjs-bundle-size"
  },
  {
    id: 2,
    title: "Building Scalable Architecture: Microservices vs Monolith",
    excerpt: "Deep dive into architectural patterns. When to use microservices, when to stick with monoliths, and how to make the transition seamlessly.",
    readTime: 12,
    difficulty: "Expert",
    category: "Architecture",
    publishedAt: "2025-01-08",
    slug: "microservices-vs-monolith"
  },
  {
    id: 3,
    title: "Database Indexing: The Performance Secret Weapon",
    excerpt: "Understanding database indexes can dramatically improve query performance. Learn when and how to use them effectively in production systems.",
    readTime: 10,
    difficulty: "Intermediate",
    category: "Database",
    publishedAt: "2025-01-01",
    slug: "database-indexing-guide"
  },
  {
    id: 4,
    title: "React Server Components: A Complete Guide",
    excerpt: "Explore the revolutionary React Server Components and how they're changing the way we build modern web applications with better performance.",
    readTime: 15,
    difficulty: "Expert",
    category: "React",
    publishedAt: "2024-12-20",
    slug: "react-server-components-guide"
  },
  {
    id: 5,
    title: "Getting Started with TypeScript in 2025",
    excerpt: "A beginner-friendly introduction to TypeScript. Learn the fundamentals and why TypeScript is becoming the industry standard for JavaScript projects.",
    readTime: 6,
    difficulty: "Beginner",
    category: "TypeScript",
    publishedAt: "2024-12-15",
    slug: "typescript-getting-started"
  },
  {
    id: 6,
    title: "Caching Strategies for High-Traffic Applications",
    excerpt: "Master Redis, CDN, and browser caching strategies to handle millions of requests. Real-world examples from production systems.",
    readTime: 11,
    difficulty: "Expert",
    category: "Performance",
    publishedAt: "2024-12-10",
    slug: "caching-strategies-guide"
  }
]

'use client'

import Hero from '@/components/sections/Hero'
import PortfolioGrid from '@/components/sections/PortfolioGrid'
import Skills from '@/components/sections/Skills'
import ProjectDiscovery from '@/components/sections/ProjectDiscovery'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Transforming ideas into high-performance digital experiences
          </p>
        </div>
        <PortfolioGrid />
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <Skills />
      </section>

      <section id="discovery" className="py-20 px-4 sm:px-6 lg:px-8">
        <ProjectDiscovery />
      </section>

      <footer className="py-12 px-4 border-t border-slate-800/50 text-center text-slate-400">
        <p>© 2025 My Portfolio. Created by Mohammad Touqeer.</p>
      </footer>
    </main>
  )
}

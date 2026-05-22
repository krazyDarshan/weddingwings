"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock } from "lucide-react"

interface ComingSoonPageProps {
  params: Promise<{ category: string }>
}

const categoryTitles: Record<string, string> = {
  "pre-wedding": "Pre Wedding",
  "wedding-ceremony": "Wedding Ceremony",
  "reception": "Reception",
  "candid-moments": "Candid Moments",
  "destination-weddings": "Destination Weddings",
}

export default async function PortfolioCategoryPage({ params }: ComingSoonPageProps) {
  const { category } = await params
  const title = categoryTitles[category] || "Portfolio"

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 mb-8 border border-accent">
            <Clock className="w-10 h-10 text-accent" />
          </div>
          
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Coming Soon
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary text-balance">
            {title}
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            We are currently curating our finest {title.toLowerCase()} photography for this collection. Check back soon to explore stunning moments from this category.
          </p>

          <motion.a
            href="/portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 text-sm tracking-[0.1em] uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Back to Portfolio
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}

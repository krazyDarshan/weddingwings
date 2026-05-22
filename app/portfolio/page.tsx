"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { X } from "lucide-react"

const portfolioImages = [
  { src: "/images/hero-wedding.jpg", alt: "Romantic wedding portrait", category: "all" },
  { src: "/images/wedding-1.jpg", alt: "Candid wedding moment", category: "candid" },
  { src: "/images/wedding-2.jpg", alt: "Pre-wedding shoot", category: "pre-wedding" },
  { src: "/images/wedding-3.jpg", alt: "Wedding ceremony", category: "ceremony" },
  { src: "/images/wedding-4.jpg", alt: "Reception celebration", category: "reception" },
  { src: "/images/wedding-5.jpg", alt: "Destination wedding", category: "destination" },
  { src: "/images/testimonial-1.jpg", alt: "Couple portrait", category: "candid" },
  { src: "/images/testimonial-2.jpg", alt: "Wedding couple", category: "ceremony" },
  { src: "/images/testimonial-3.jpg", alt: "Reception moment", category: "reception" },
]

const categories = [
  { id: "all", label: "All" },
  { id: "pre-wedding", label: "Pre Wedding" },
  { id: "ceremony", label: "Ceremony" },
  { id: "reception", label: "Reception" },
  { id: "candid", label: "Candid" },
  { id: "destination", label: "Destination" },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const galleryRef = useRef(null)
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" })

  const filteredImages = activeCategory === "all" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Our Work
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-primary text-balance">
              Wedding Portfolio
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              A curated collection of our most cherished wedding photography moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 text-sm tracking-[0.1em] uppercase transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-primary hover:border-primary"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="pb-20 md:pb-32">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isGalleryInView ? 1 : 0, scale: isGalleryInView ? 1 : 0.9 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden cursor-pointer"
                  onClick={() => setLightboxImage(image.src)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500 flex items-center justify-center">
                      <div className="transform scale-0 group-hover:scale-100 transition-transform duration-500">
                        <div className="w-12 h-12 border border-primary flex items-center justify-center">
                          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-primary hover:text-accent transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[80vh] w-full aspect-square"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Lightbox image"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}

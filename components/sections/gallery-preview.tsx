"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

const galleryImages = [
  { src: "/images/wedding-1.jpg", alt: "Candid wedding moment" },
  { src: "/images/wedding-2.jpg", alt: "Pre-wedding shoot" },
  { src: "/images/wedding-3.jpg", alt: "Wedding ceremony" },
  { src: "/images/wedding-4.jpg", alt: "Reception dance" },
  { src: "/images/wedding-5.jpg", alt: "Destination wedding" },
  { src: "/images/hero-wedding.jpg", alt: "Romantic portrait" },
]

export function GalleryPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Gallery
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-primary text-balance">
            Cinematic Gallery Preview
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-pretty">
            A glimpse into our portfolio of timeless wedding photography
          </p>
        </motion.div>

        {/* Masonry-style Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden ${
                index === 0 || index === 5 ? "row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${
                index === 0 || index === 5 ? "aspect-[3/5]" : "aspect-square"
              }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500 flex items-center justify-center">
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
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.1em] uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View Full Portfolio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

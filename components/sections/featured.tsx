"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const featuredShoots = [
  {
    id: 1,
    title: "Sarah & Michael",
    location: "Udaipur Palace",
    image: "/images/wedding-1.jpg",
  },
  {
    id: 2,
    title: "Priya & Arjun",
    location: "Goa Beach",
    image: "/images/wedding-2.jpg",
  },
  {
    id: 3,
    title: "Emma & James",
    location: "Jaipur Gardens",
    image: "/images/wedding-3.jpg",
  },
]

export function FeaturedSection() {
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
            Our Work
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-primary text-balance">
            Featured Wedding Shoots
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every wedding is unique, and we take pride in capturing the essence of your special day with artistic vision and emotional depth
          </p>
        </motion.div>

        {/* Featured Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {featuredShoots.map((shoot, index) => (
            <motion.div
              key={shoot.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={shoot.image}
                  alt={shoot.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2">
                      {shoot.location}
                    </p>
                    <h3 className="font-serif text-2xl text-primary">
                      {shoot.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

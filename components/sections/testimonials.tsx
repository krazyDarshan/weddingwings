"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul",
    location: "Mumbai Wedding",
    quote: "Wedding Wings captured our special day with such artistry and emotion. Every photo tells a story, and we couldn&apos;t be happier with the results. They truly understood our vision.",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Sarah & David",
    location: "Destination Wedding, Goa",
    quote: "The team went above and beyond to capture every precious moment. The cinematic quality of our photos and videos exceeded all expectations. Absolutely stunning work!",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Aisha & Vikram",
    location: "Royal Palace Wedding",
    quote: "From the first consultation to the final delivery, the experience was exceptional. Our wedding album is a masterpiece that we will treasure forever.",
    image: "/images/testimonial-3.jpg",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-card">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-primary text-balance">
            Client Love
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from the couples whose love stories we have had the honor to capture
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-8 bg-background border border-border"
            >
              <Quote className="h-8 w-8 text-accent/30 mb-6" />
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

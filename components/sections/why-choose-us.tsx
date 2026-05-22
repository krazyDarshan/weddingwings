"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Camera, Heart, Award, Clock } from "lucide-react"

const reasons = [
  {
    icon: Camera,
    title: "Cinematic Quality",
    description: "We use state-of-the-art equipment and techniques to deliver stunning, cinematic imagery that tells your unique love story.",
  },
  {
    icon: Heart,
    title: "Emotional Storytelling",
    description: "Every photograph captures the raw emotions and genuine moments that make your wedding day truly special and unforgettable.",
  },
  {
    icon: Award,
    title: "Award-Winning Team",
    description: "Our experienced photographers have been recognized internationally for their exceptional artistry and creative vision.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We understand the excitement of reliving your moments. Expect beautifully edited photos delivered within promised timelines.",
  },
]

export function WhyChooseUs() {
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
            Why Us
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-primary text-balance">
            Why Choose Wedding Wings
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-pretty">
            We bring passion, expertise, and an artistic eye to every wedding we photograph
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group text-center p-8 bg-background border border-border hover:border-accent transition-colors duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-border group-hover:border-accent transition-colors duration-500">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="font-serif text-xl text-primary mb-4">
                {reason.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

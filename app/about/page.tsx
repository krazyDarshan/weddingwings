"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="font-serif text-5xl md:text-6xl lg:text-7xl text-accent"
    >
      {isInView ? value : 0}{suffix}
    </motion.span>
  )
}

export default function AboutPage() {
  const storyRef = useRef(null)
  const statsRef = useRef(null)
  const timelineRef = useRef(null)
  
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" })
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" })
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" })

  const stats = [
    { value: 500, suffix: "+", label: "Weddings Covered" },
    { value: 1000, suffix: "+", label: "Happy Couples" },
    { value: 12, suffix: "", label: "Years of Experience" },
    { value: 50, suffix: "+", label: "Awards Won" },
  ]

  const timeline = [
    { year: "2012", title: "The Beginning", description: "Started as a solo photographer with a passion for capturing love stories" },
    { year: "2015", title: "First Major Award", description: "Received our first international photography award for wedding storytelling" },
    { year: "2018", title: "Team Expansion", description: "Grew into a team of talented photographers and cinematographers" },
    { year: "2021", title: "Destination Weddings", description: "Expanded to cover destination weddings across 20+ countries" },
    { year: "2024", title: "Industry Leaders", description: "Recognized as one of the top wedding photography studios in India" },
  ]

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
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-primary text-balance">
              Our Story of Capturing Love
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              A journey of passion, creativity, and countless beautiful moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 md:py-32 bg-card">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/images/photographer.jpg"
                alt="Our lead photographer"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-sm tracking-[0.3em] uppercase text-accent">
                Our Journey
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary text-balance">
                Crafting Visual Poetry Since 2012
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Wedding Wings was born from a simple belief: every love story deserves to be told beautifully. What started as a one-person passion project has grown into a team of dedicated artists who share the same vision.
                </p>
                <p>
                  We approach each wedding not just as photographers, but as storytellers. Our goal is to capture the raw emotions, the stolen glances, the tears of joy, and the moments of pure bliss that make your day unique.
                </p>
                <p>
                  With over a decade of experience, we have had the privilege of documenting hundreds of love stories across diverse cultures, traditions, and destinations. Each wedding has taught us something new, enriching our artistry and deepening our appreciation for the sacred bond of marriage.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 md:py-32 bg-background">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-4 text-sm tracking-[0.1em] uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 md:py-32 bg-card">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Milestones
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary">
              Our Journey Through Time
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <span className="text-accent font-serif text-2xl">{item.year}</span>
                    <h3 className="font-serif text-xl text-primary mt-2">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-accent md:-translate-x-1/2 mt-2" />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

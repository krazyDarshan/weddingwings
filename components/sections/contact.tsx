"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: ""
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Reservation submitted:", formState)
  }

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="contactGrid" width="5" height="5" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="0.5" r="0.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactGrid)" />
        </svg>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Section Label */}
          <div className="lg:col-span-2">
            <div 
              className="flex items-center gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">(05)</span>
              <div className="w-8 h-px bg-border" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Reservations</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column - Text */}
              <div className="space-y-8">
                <h2 
                  className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.01em] text-foreground text-pretty"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transitionProperty: "all",
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0.1s"
                }}
                >
                  Reserve your table for an unforgettable evening
                </h2>
                
                <p 
                  className="text-lg text-muted-foreground leading-relaxed max-w-md"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.2s"
                  }}
                >
                  Our intimate dining room seats just thirty-two guests per evening. Reservations are highly recommended and open three months in advance.
                </p>

                {/* Contact Info */}
                <div 
                  className="space-y-6 pt-8"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.3s"
                  }}
                >
                  <div className="space-y-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Restaurant</span>
                    <p className="text-foreground">
                      428 rue Saint-Honoré<br />
                      75001 Paris, France
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Reservations</span>
                    <p className="text-foreground">
                      <a href="mailto:reserve@essence-paris.fr" className="hover:text-accent transition-colors duration-300">
                        reserve@essence-paris.fr
                      </a>
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Phone</span>
                    <p className="text-foreground">
                      <a href="tel:+33142608080" className="hover:text-accent transition-colors duration-300">
                        +33 1 42 60 80 80
                      </a>
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Hours</span>
                    <p className="text-foreground">
                      Tuesday – Saturday<br />
                      Dinner: 19:00 & 21:30<br />
                      <span className="text-muted-foreground text-sm">Closed Sunday & Monday</span>
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div 
                  className="flex items-center gap-6 pt-8"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.4s"
                  }}
                >
                  {["Instagram", "La Liste", "Michelin Guide"].map((social) => (
                    <a 
                      key={social}
                      href="#"
                      className="text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column - Form */}
              <form 
                onSubmit={handleSubmit}
                className="space-y-8"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transitionProperty: "all",
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0.3s"
                }}
              >
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Date */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                      placeholder="+__ ___ ___ ___"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label htmlFor="guests" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    value={formState.guests}
                    onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select number of guests</option>
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guests</option>
                    <option value="6">6 guests</option>
                    <option value="7+">7+ guests (please inquire)</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Special Requests (optional)
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                    placeholder="Dietary restrictions, allergies, special occasions, or other requests..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                  >
                    <span className="text-sm tracking-[0.15em] uppercase">Request Reservation</span>
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

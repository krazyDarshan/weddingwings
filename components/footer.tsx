"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact Us", href: "/contact" },
  ]

  const portfolioLinks = [
    { label: "Pre Wedding", href: "/portfolio/pre-wedding" },
    { label: "Wedding Ceremony", href: "/portfolio/wedding-ceremony" },
    { label: "Reception", href: "/portfolio/reception" },
    { label: "Candid Moments", href: "/portfolio/candid-moments" },
    { label: "Destination Weddings", href: "/portfolio/destination-weddings" },
  ]

  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Youtube", icon: Youtube, url: "https://youtube.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  ]

  return (
    <footer className="relative py-16 md:py-24 border-t border-border bg-card">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo & Tagline */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl md:text-3xl font-medium tracking-wide text-primary">
                Wedding Wings
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Capturing your most precious moments with cinematic elegance and timeless artistry. Every love story deserves to be told beautifully.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center justify-center w-10 h-10 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
              Portfolio
            </h4>
            <nav className="space-y-3">
              {portfolioLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                123 Wedding Avenue<br />
                Mumbai, Maharashtra 400001
              </p>
              <p className="text-sm">
                <a 
                  href="mailto:hello@weddingwings.com" 
                  className="text-primary hover:text-accent transition-colors duration-300"
                >
                  hello@weddingwings.com
                </a>
              </p>
              <p className="text-sm">
                <a 
                  href="tel:+919876543210" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </p>
              {/* WhatsApp shortcut */}
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {currentYear} Wedding Wings Photography. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span>Back to top</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Large Decorative Text */}
        <div className="mt-16 md:mt-24 overflow-hidden">
          <p className="font-serif text-[8vw] md:text-[6vw] lg:text-[5vw] font-light tracking-[-0.02em] text-primary/[0.05] leading-none whitespace-nowrap text-center">
            Every love story is beautiful.
          </p>
        </div>
      </div>
    </footer>
  )
}

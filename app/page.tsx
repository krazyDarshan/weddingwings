import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { FeaturedSection } from "@/components/sections/featured"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { GalleryPreview } from "@/components/sections/gallery-preview"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedSection />
      <TestimonialsSection />
      <GalleryPreview />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}

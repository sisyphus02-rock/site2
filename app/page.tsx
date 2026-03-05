import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { WorkCategories } from "@/components/work-categories"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <WorkCategories />
      <ContactSection />
    </>
  )
}

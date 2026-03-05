import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-mural.jpg"
          alt="Colorful mural artwork by Rangrez Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-6">
            Jammu&apos;s Creative Studio
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
            We Paint
            <span className="text-primary"> Bold</span> Stories
            <span className="text-accent"> On Walls</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Murals, paintings, graffiti, tableau, and urban beautification. We transform ordinary spaces into extraordinary visual experiences.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-lg"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/work/murals"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors rounded-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Scrolling marquee */}
        <div className="mt-20 overflow-hidden border-t border-border pt-8">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {["Murals", "Paintings", "Graffiti", "Tableau", "Beautification", "Wall Art", "Street Art", "Murals", "Paintings", "Graffiti", "Tableau", "Beautification"].map(
              (item, i) => (
                <span
                  key={i}
                  className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

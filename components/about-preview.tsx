import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/about-team.jpg"
              alt="Rangrez Studio team working on a mural"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
              About Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Dedicated to Creativity, Color & Culture
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Rangrez Studio is a Jammu-based creative collective specializing in large-scale murals, fine art paintings, street graffiti, decorative tableau, and urban beautification. We believe every wall is a canvas waiting to tell a story.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With over 150 completed projects across homes, offices, public spaces, and commercial establishments, we bring color and life to every surface we touch.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">150+</p>
                <p className="mt-1 text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">8+</p>
                <p className="mt-1 text-sm text-muted-foreground">Years Active</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="mt-1 text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity uppercase tracking-wider"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

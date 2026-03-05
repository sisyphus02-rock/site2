import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Brush, Palette, Sparkles, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Rangrez Studio",
  description: "Learn about Rangrez Studio - a Jammu-based creative collective specializing in murals, paintings, graffiti, tableau, and urban beautification.",
}

const values = [
  {
    icon: Brush,
    title: "Craftsmanship",
    description: "Every stroke is intentional. We take immense pride in the quality and durability of our work, using premium materials and time-tested techniques.",
  },
  {
    icon: Palette,
    title: "Bold Expression",
    description: "We don't do subtle when it comes to visual impact. Our art is designed to command attention and evoke emotion at every scale.",
  },
  {
    icon: Sparkles,
    title: "Transformation",
    description: "We see potential in every surface. From blank walls to forgotten corners, we transform spaces into conversations.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "We work closely with our clients to understand their vision and translate it into art that exceeds expectations.",
  },
]

const timeline = [
  {
    year: "2016",
    title: "The Beginning",
    description: "Started as a one-person operation, painting murals for local cafes and restaurants in Jammu.",
  },
  {
    year: "2018",
    title: "Growing the Team",
    description: "Expanded to a team of 5 artists. Completed our first large-scale government beautification project.",
  },
  {
    year: "2020",
    title: "Going Regional",
    description: "Took on projects across J&K and northern India. Launched our graffiti and street art division.",
  },
  {
    year: "2022",
    title: "Studio Established",
    description: "Opened our permanent studio space in Jammu. Added tableau and mixed-media art to our services.",
  },
  {
    year: "2024",
    title: "150+ Projects",
    description: "Crossed 150 completed projects. Recognized as one of the leading art studios in the region.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
                Our Story
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
                Born from a Passion for Color and Culture
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Rangrez Studio was founded in 2016 by a group of passionate artists in Jammu who believed that art belongs everywhere &mdash; not just in galleries. The name &ldquo;Rangrez&rdquo; means &ldquo;one who colors&rdquo; in Urdu, and that&apos;s exactly what we do: we bring color to the world.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                What started as a small mural painting venture has grown into a full-service creative studio offering murals, canvas paintings, graffiti art, decorative tableau, and large-scale urban beautification projects across India.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/about-team.jpg"
                alt="The Rangrez Studio team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
              Our Values
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
              Our Journey
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              From Humble Beginnings
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary border-4 border-background z-10" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                    <h3 className="mt-2 text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Ready to Create Something Bold?
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Whether it&apos;s a wall, a canvas, or an entire cityscape &mdash; we&apos;re ready to bring your vision to life with color and creativity.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-lg"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

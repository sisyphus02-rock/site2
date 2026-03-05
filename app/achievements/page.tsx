import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Star, Users, MapPin, Calendar, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "Achievements | Rangrez Studio",
  description:
    "Explore the milestones, awards, and landmark projects that define Rangrez Studio's journey in murals, paintings, graffiti, and urban beautification.",
}

const stats = [
  { label: "Projects Completed", value: "150+", icon: Star },
  { label: "Cities Covered", value: "12", icon: MapPin },
  { label: "Happy Clients", value: "90+", icon: Users },
  { label: "Awards Won", value: "8", icon: Trophy },
]

const milestones = [
  {
    year: "2024",
    title: "Regional Art Excellence Award",
    description:
      "Recognized by the J&K Cultural Academy for outstanding contribution to public art and urban beautification across the region.",
    image: "/images/achievement-2.jpg",
    category: "Award",
  },
  {
    year: "2023",
    title: "Jammu Smart City Beautification",
    description:
      "Commissioned by the Jammu Smart City Project to paint over 40 walls across the city center, transforming the urban landscape with vibrant murals celebrating local culture and history.",
    image: "/images/achievement-3.jpg",
    category: "Landmark Project",
  },
  {
    year: "2023",
    title: "100+ Schools Art Initiative",
    description:
      "Partnered with the Department of Education to paint motivational and educational murals in over 100 government schools across J&K, inspiring thousands of young minds.",
    image: "/images/achievement-4.jpg",
    category: "Community Impact",
  },
  {
    year: "2022",
    title: "Luxury Hospitality Partnership",
    description:
      "Signed a long-term partnership with a leading hotel chain to provide custom art installations, decorative tableau, and hand-painted murals for their properties across northern India.",
    image: "/images/achievement-5.jpg",
    category: "Partnership",
  },
  {
    year: "2021",
    title: "Republic Day Tableau Award",
    description:
      "Designed and built the award-winning Republic Day tableau representing J&K's cultural heritage, which was praised for its intricate detailing and bold visual storytelling.",
    image: "/images/achievement-1.jpg",
    category: "Award",
  },
  {
    year: "2020",
    title: "COVID-19 Awareness Murals",
    description:
      "Volunteered to paint over 30 public health awareness murals across Jammu during the pandemic, spreading important safety messages through bold, eye-catching art.",
    image: "/images/mural-3.jpg",
    category: "Community Impact",
  },
]

const testimonials = [
  {
    quote:
      "Rangrez Studio transformed our entire building facade into a work of art. The response from the community has been overwhelming — people stop and take photos every day.",
    name: "Rajesh Sharma",
    role: "Owner, Hotel Grand Palace, Jammu",
  },
  {
    quote:
      "Working with the Rangrez team on our school beautification project was an incredible experience. The children are so proud of their school now, and attendance has actually improved!",
    name: "Dr. Priya Gupta",
    role: "Principal, Govt. Higher Secondary School",
  },
  {
    quote:
      "The level of creativity and professionalism is unmatched. They delivered a massive mural project on time, within budget, and the quality exceeded all expectations.",
    name: "Amit Verma",
    role: "Project Director, Smart City Jammu",
  },
]

export default function AchievementsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/achievement-1.jpg"
            alt="Rangrez Studio achievements"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
            Our Achievements
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
            Milestones That <br />
            Define Our Journey
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
            From award-winning murals to city-wide beautification campaigns, every project pushes us to create bolder, bigger, and more impactful art.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-3xl font-bold text-foreground md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
              Key Milestones
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Projects & Awards That Shaped Us
            </h2>
          </div>

          <div className="flex flex-col gap-16">
            {milestones.map((milestone, i) => (
              <div
                key={milestone.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  i % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-lg ${
                    i % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-primary px-3 py-1.5 rounded-full">
                      {milestone.category}
                    </span>
                  </div>
                </div>
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground md:text-3xl text-balance">
                    {milestone.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
              Client Testimonials
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              What People Say About Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col gap-6 rounded-lg border border-border bg-card p-8"
              >
                <Award className="h-8 w-8 text-primary/40" />
                <blockquote className="text-foreground leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="border-t border-border pt-6">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Want to Be Part of Our Next Milestone?
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Every great project starts with a conversation. Let&apos;s discuss how we can turn your space into our next proudest achievement.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-lg"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

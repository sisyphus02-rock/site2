"use client"

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Ready to Transform Your Space?
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Whether you have a wall that needs color, a space that needs life, or a vision that needs an artist &mdash; we&apos;re here to make it happen. Let&apos;s create something bold together.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">+91 7006232682</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold text-foreground">hello@rangrezstudio.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit Us</p>
                  <p className="font-semibold text-foreground">Jammu, J&K, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-card border border-border p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground text-balance">
              Have a project in mind?
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-sm">
              Tell us about your space, your vision, and your budget. We&apos;ll get back to you within 24 hours with ideas and a free estimate.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-lg"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

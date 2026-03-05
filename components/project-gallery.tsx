"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export interface Project {
  title: string
  description: string
  image: string
  location: string
  year: string
  category: string
}

interface ProjectGalleryProps {
  projects: Project[]
  title: string
  subtitle: string
  description: string
  heroImage: string
}

export function ProjectGallery({
  projects,
  title,
  subtitle,
  description,
  heroImage,
}: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${title} by Rangrez Studio`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
            {title}
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-lg text-left"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.location} &middot; {project.year}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-6"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <div
            className="relative max-w-4xl w-full bg-card border border-border rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {selectedProject.year}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{selectedProject.location}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {selectedProject.description}
              </p>
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 text-sm font-semibold text-primary hover:opacity-80 transition-opacity uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Want Something Like This?
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Every project starts with a conversation. Tell us about your space and we&apos;ll bring the vision to life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-lg"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

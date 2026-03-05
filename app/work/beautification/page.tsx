import type { Metadata } from "next"
import { ProjectGallery, type Project } from "@/components/project-gallery"

export const metadata: Metadata = {
  title: "Urban Beautification | Rangrez Studio",
  description: "Urban and landscape beautification projects by Rangrez Studio. Transforming public spaces, parks, and commercial areas through art and creative design.",
}

const projects: Project[] = [
  {
    title: "Jammu Smart City Art Walk",
    description: "A major urban beautification project for the Jammu Smart City initiative. The project transformed a 1-kilometer stretch of sidewalk with artistic installations, painted benches, decorative lampposts, mosaic pathways, and interactive art stations.",
    image: "/images/beautification-1.jpg",
    location: "M.A. Road, Jammu",
    year: "2024",
    category: "Beautification",
  },
  {
    title: "Bagh-e-Bahu Garden Makeover",
    description: "A comprehensive beautification of the Bagh-e-Bahu garden entrance. The project included decorative stone walls with mosaic art, painted planters, artistic signage, and a welcome mural celebrating the garden's natural beauty.",
    image: "/images/beautification-2.jpg",
    location: "Bagh-e-Bahu, Jammu",
    year: "2024",
    category: "Beautification",
  },
  {
    title: "Marketplace Color Revival",
    description: "Transforming a tired commercial marketplace with coordinated color schemes, decorative facade paintings, artistic wayfinding signage, and overhead installations. The project increased foot traffic by 40% within the first month.",
    image: "/images/beautification-3.jpg",
    location: "Rani Park, Jammu",
    year: "2023",
    category: "Beautification",
  },
  {
    title: "School Campus Transformation",
    description: "A complete visual transformation of a school campus including painted boundary walls, decorative play areas, educational murals, artistic seating areas, and a colorful entrance archway designed to inspire students daily.",
    image: "/images/beautification-1.jpg",
    location: "Model Academy, Jammu",
    year: "2023",
    category: "Beautification",
  },
  {
    title: "Hospital Healing Garden",
    description: "Designing and executing a healing garden for a hospital campus. The project combined landscape design with artistic elements including mosaic walkways, painted meditation corners, and soothing nature-themed wall art.",
    image: "/images/beautification-2.jpg",
    location: "GMC Hospital, Jammu",
    year: "2022",
    category: "Beautification",
  },
  {
    title: "Railway Station Approach Road",
    description: "Beautifying the approach road to Jammu Tawi Railway Station with decorative elements, themed wall paintings depicting local tourism spots, artistic roundabout installations, and coordinated color schemes for boundary walls.",
    image: "/images/beautification-3.jpg",
    location: "Railway Station, Jammu",
    year: "2022",
    category: "Beautification",
  },
]

export default function BeautificationPage() {
  return (
    <ProjectGallery
      projects={projects}
      title="Urban Beautification"
      subtitle="Transforming Spaces"
      description="We partner with municipalities, businesses, and institutions to transform public spaces through art-driven beautification. From streetscapes to parks, we make communities more vibrant and welcoming."
      heroImage="/images/beautification-1.jpg"
    />
  )
}

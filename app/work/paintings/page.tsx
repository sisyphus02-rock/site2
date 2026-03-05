import type { Metadata } from "next"
import { ProjectGallery, type Project } from "@/components/project-gallery"

export const metadata: Metadata = {
  title: "Paintings | Rangrez Studio",
  description: "Fine art paintings by Rangrez Studio. Canvas works ranging from traditional Indian art to contemporary abstracts, created for homes, offices, and galleries.",
}

const projects: Project[] = [
  {
    title: "Himalayan Dawn Series",
    description: "A collection of five large-format canvas paintings capturing the majestic beauty of the Himalayan landscape at dawn. Each piece uses layered oil techniques to create depth and luminosity, with rich golds, deep blues, and warm ambers.",
    image: "/images/painting-1.jpg",
    location: "Private Collection, Jammu",
    year: "2024",
    category: "Painting",
  },
  {
    title: "Abstract Emotions Collection",
    description: "A series of six abstract expressionist canvases exploring human emotions through color and form. Bold strokes of crimson, cerulean, and gold create dynamic compositions that shift with the viewer's perspective.",
    image: "/images/painting-2.jpg",
    location: "Art Gallery, Delhi",
    year: "2024",
    category: "Painting",
  },
  {
    title: "Dogra Heritage Portraits",
    description: "A commissioned series of traditional-style portraits celebrating Dogra cultural heritage. Each portrait combines classical Indian painting techniques with contemporary sensibilities, honoring the rich history of the Jammu region.",
    image: "/images/painting-3.jpg",
    location: "Heritage Museum, Jammu",
    year: "2023",
    category: "Painting",
  },
  {
    title: "Seasons of Kashmir",
    description: "Four large canvas pieces representing the four seasons of the Kashmir Valley. From spring blossoms to winter snowfall, each painting captures the unique color palette and atmosphere of its respective season.",
    image: "/images/painting-1.jpg",
    location: "Hotel Grand, Srinagar",
    year: "2023",
    category: "Painting",
  },
  {
    title: "Corporate Art Installation",
    description: "A set of twelve abstract paintings created for a corporate headquarters. The collection follows a cohesive color theme of deep navy, warm copper, and soft ivory, designed to complement the modern office interior.",
    image: "/images/painting-2.jpg",
    location: "Tech Park, Bangalore",
    year: "2022",
    category: "Painting",
  },
  {
    title: "Sufi Mysticism Series",
    description: "An evocative series exploring Sufi themes through contemporary art. Swirling forms, calligraphic elements, and rich jewel tones create meditative compositions that bridge traditional spirituality with modern aesthetics.",
    image: "/images/painting-3.jpg",
    location: "Cultural Center, Lucknow",
    year: "2022",
    category: "Painting",
  },
]

export default function PaintingsPage() {
  return (
    <ProjectGallery
      projects={projects}
      title="Paintings"
      subtitle="Fine Art"
      description="Our canvas paintings range from traditional Indian art forms to bold contemporary abstracts. Each piece is a unique work of art, created with premium materials and meticulous attention to detail."
      heroImage="/images/painting-1.jpg"
    />
  )
}

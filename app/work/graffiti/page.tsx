import type { Metadata } from "next"
import { ProjectGallery, type Project } from "@/components/project-gallery"

export const metadata: Metadata = {
  title: "Graffiti Art | Rangrez Studio",
  description: "Bold graffiti and street art by Rangrez Studio. Spray paint artworks that bring urban energy to walls, skate parks, and public spaces.",
}

const projects: Project[] = [
  {
    title: "Urban Pulse Festival Wall",
    description: "A massive 150-foot graffiti piece created live during the Urban Pulse Street Art Festival. The artwork features wildstyle lettering spelling 'JAMMU' surrounded by abstract energy bursts in neon colors, created with over 200 spray cans.",
    image: "/images/graffiti-1.jpg",
    location: "City Center, Jammu",
    year: "2024",
    category: "Graffiti",
  },
  {
    title: "Skate Park Transformation",
    description: "A complete visual overhaul of the Jammu Skate Park, featuring bold geometric graffiti patterns, character illustrations, and dynamic color blocks. The project covered over 3,000 square feet of concrete surfaces.",
    image: "/images/graffiti-2.jpg",
    location: "Sports Complex, Jammu",
    year: "2024",
    category: "Graffiti",
  },
  {
    title: "Underground Passage Art",
    description: "Transforming a dull pedestrian underpass into a vibrant tunnel of color. The graffiti features flowing abstract patterns that guide pedestrians through the space, with UV-reactive elements that glow under black light at night.",
    image: "/images/graffiti-3.jpg",
    location: "Railway Station, Jammu",
    year: "2023",
    category: "Graffiti",
  },
  {
    title: "Youth Center Facade",
    description: "A bold graffiti facade for the Jammu Youth Center, featuring portraits of iconic youth figures and motivational typography. The piece uses a vibrant palette of electric blue, hot pink, and lime green to appeal to the young audience.",
    image: "/images/graffiti-1.jpg",
    location: "Gandhi Nagar, Jammu",
    year: "2023",
    category: "Graffiti",
  },
  {
    title: "Music Studio Identity",
    description: "Custom graffiti branding for a local music recording studio. The artwork combines musical elements like sound waves and instruments with bold lettering, creating an energetic visual identity for the space.",
    image: "/images/graffiti-2.jpg",
    location: "Rehari, Jammu",
    year: "2022",
    category: "Graffiti",
  },
  {
    title: "Warehouse District Revival",
    description: "Part of an urban revival project, this series of graffiti pieces transformed abandoned warehouse walls into a street art gallery. Each wall tells a different story about the industrial history of the area.",
    image: "/images/graffiti-3.jpg",
    location: "Industrial Area, Jammu",
    year: "2022",
    category: "Graffiti",
  },
]

export default function GraffitiPage() {
  return (
    <ProjectGallery
      projects={projects}
      title="Graffiti Art"
      subtitle="Street Culture"
      description="We bring urban energy and bold expression to walls, underpasses, and public spaces. Our graffiti work combines classic street art techniques with contemporary design to create impactful visual statements."
      heroImage="/images/graffiti-1.jpg"
    />
  )
}

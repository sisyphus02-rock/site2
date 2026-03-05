import type { Metadata } from "next"
import { ProjectGallery, type Project } from "@/components/project-gallery"

export const metadata: Metadata = {
  title: "Tableau Art | Rangrez Studio",
  description: "Decorative tableau and mixed-media art by Rangrez Studio. Textured art pieces combining paint, metalwork, and mixed media for luxury interiors.",
}

const projects: Project[] = [
  {
    title: "Golden Lotus Triptych",
    description: "A three-panel tableau featuring lotus motifs crafted with gold leaf, textured acrylic, and metallic accents on hand-stretched canvas. Each panel measures 4x6 feet, creating a stunning 12-foot focal wall installation for a luxury home.",
    image: "/images/tableau-1.jpg",
    location: "Private Residence, Jammu",
    year: "2024",
    category: "Tableau",
  },
  {
    title: "Heritage Mandala Series",
    description: "A collection of intricately designed mandala tableau pieces incorporating traditional Dogra design elements. Each piece combines carved relief work with hand-painted details and semi-precious stone inlays.",
    image: "/images/tableau-2.jpg",
    location: "Boutique Hotel, Jammu",
    year: "2024",
    category: "Tableau",
  },
  {
    title: "Modern Geometry Collection",
    description: "A set of contemporary geometric tableau works using layered acrylic, metallic paint, and textured mediums. The collection features clean lines and bold color blocks that complement modern minimalist interiors.",
    image: "/images/tableau-3.jpg",
    location: "Design Studio, Delhi",
    year: "2023",
    category: "Tableau",
  },
  {
    title: "Floral Cascade Wall Panel",
    description: "A large-format decorative wall panel featuring cascading floral elements in relief. The piece combines sculpted plaster work with hand-painted details in rich jewel tones of emerald, ruby, and sapphire.",
    image: "/images/tableau-1.jpg",
    location: "Banquet Hall, Jammu",
    year: "2023",
    category: "Tableau",
  },
  {
    title: "Abstract Metallics Diptych",
    description: "A two-panel abstract tableau using copper leaf, iron oxide pigments, and heavy impasto technique. The industrial-meets-organic aesthetic creates a dramatic statement piece for a contemporary living space.",
    image: "/images/tableau-2.jpg",
    location: "Luxury Apartment, Mumbai",
    year: "2022",
    category: "Tableau",
  },
  {
    title: "Sacred Geometry Installation",
    description: "A multi-piece tableau installation based on sacred geometry patterns. The work incorporates mathematical precision with handcrafted artistry, featuring gold and silver leaf on deep indigo backgrounds.",
    image: "/images/tableau-3.jpg",
    location: "Meditation Center, Rishikesh",
    year: "2022",
    category: "Tableau",
  },
]

export default function TableauPage() {
  return (
    <ProjectGallery
      projects={projects}
      title="Tableau Art"
      subtitle="Mixed Media"
      description="Our tableau pieces are hand-crafted decorative art works that combine painting, texture, metalwork, and mixed media to create stunning focal points for luxury interiors and commercial spaces."
      heroImage="/images/tableau-1.jpg"
    />
  )
}

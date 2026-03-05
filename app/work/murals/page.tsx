import type { Metadata } from "next"
import { ProjectGallery, type Project } from "@/components/project-gallery"

export const metadata: Metadata = {
  title: "Mural Art | Rangrez Studio",
  description: "Large-scale mural projects by Rangrez Studio. Transforming buildings and public spaces with vibrant, bold wall art across Jammu and India.",
}

const projects: Project[] = [
  {
    title: "Tawi Riverfront Mural",
    description: "A 200-foot long mural depicting the cultural heritage of Jammu along the Tawi River promenade. This project featured scenes from Dogra history, local festivals, and the natural beauty of the region, painted over 6 weeks with weather-resistant paints.",
    image: "/images/mural-1.jpg",
    location: "Tawi Riverfront, Jammu",
    year: "2024",
    category: "Mural",
  },
  {
    title: "Hotel Sunrise Lobby Mural",
    description: "An immersive interior mural for the lobby of Hotel Sunrise, featuring an abstract interpretation of a Himalayan sunrise with flowing warm colors and organic forms. The mural spans three walls and creates a welcoming atmosphere for guests.",
    image: "/images/mural-2.jpg",
    location: "Gandhi Nagar, Jammu",
    year: "2023",
    category: "Mural",
  },
  {
    title: "Cafe Artisan Wall Art",
    description: "A vibrant tropical-themed mural for Cafe Artisan, featuring exotic birds, lush plants, and bold botanical elements. This piece transformed a plain interior wall into a lively focal point that became the cafe's signature visual identity.",
    image: "/images/mural-3.jpg",
    location: "Residency Road, Jammu",
    year: "2023",
    category: "Mural",
  },
  {
    title: "Government School Beautification",
    description: "A series of educational and inspirational murals for a government primary school. The artwork includes colorful illustrations of science, nature, and Indian history designed to inspire young minds and create a vibrant learning environment.",
    image: "/images/mural-1.jpg",
    location: "Kachi Chawni, Jammu",
    year: "2022",
    category: "Mural",
  },
  {
    title: "Raghunath Bazaar Heritage Wall",
    description: "A heritage-themed mural celebrating the historic Raghunath Bazaar market. The piece captures the bustling energy of the marketplace with portraits of vendors, traditional goods, and architectural details of the old city.",
    image: "/images/mural-2.jpg",
    location: "Raghunath Bazaar, Jammu",
    year: "2022",
    category: "Mural",
  },
  {
    title: "Corporate Office Feature Wall",
    description: "A sophisticated abstract mural for a corporate headquarters, blending geometric patterns with organic forms in a restrained palette of deep blues, golds, and warm grays. Designed to inspire creativity while maintaining professional aesthetics.",
    image: "/images/mural-3.jpg",
    location: "Sector 1, Jammu",
    year: "2021",
    category: "Mural",
  },
]

export default function MuralsPage() {
  return (
    <ProjectGallery
      projects={projects}
      title="Mural Art"
      subtitle="Our Specialty"
      description="From building facades to interior feature walls, our murals transform spaces into immersive visual experiences. Each piece is custom-designed, hand-painted, and built to last."
      heroImage="/images/mural-1.jpg"
    />
  )
}

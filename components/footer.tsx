import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const workLinks = [
  { href: "/work/murals", label: "Murals" },
  { href: "/work/paintings", label: "Paintings" },
  { href: "/work/graffiti", label: "Graffiti" },
  { href: "/work/tableau", label: "Tableau" },
  { href: "/work/beautification", label: "Beautification" },
]

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-2xl font-bold tracking-tight text-primary">RANGREZ</span>
              <span className="ml-2 text-sm font-medium text-muted-foreground tracking-widest uppercase">Studio</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming spaces into vibrant expressions of art and culture. Based in Jammu, creating bold visual experiences across India.
            </p>
          </div>

          {/* Our Work */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Our Work</h3>
            <nav className="flex flex-col gap-2">
              {workLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Company</h3>
            <nav className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 7006232682</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@rangrezstudio.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Jammu, J&K, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Rangrez Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with passion in Jammu Since 2003
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7006232682",
    href: "tel:+917006232682",
    description: "Mon-Sat, 9 AM - 7 PM IST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@rangrezstudio.com",
    href: "mailto:hello@rangrezstudio.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Studio Address",
    value: "Residency Road, Jammu",
    href: "https://maps.google.com/?q=Jammu+India",
    description: "Jammu, J&K, India - 180001",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9 AM - 7 PM",
    href: undefined,
    description: "Sunday by appointment only",
  },
]

const services = [
  "Mural Painting",
  "Canvas / Fine Art Painting",
  "Graffiti & Street Art",
  "Tableau & Mixed Media",
  "Urban Beautification",
  "Interior Art & Decoration",
  "Corporate Art Projects",
  "Other / Not Sure",
]

const budgetRanges = [
  "Under 25,000",
  "25,000 - 50,000",
  "50,000 - 1,00,000",
  "1,00,000 - 5,00,000",
  "5,00,000+",
  "Not Sure Yet",
]

const faqs = [
  {
    question: "How long does a typical mural project take?",
    answer:
      "It depends on the size and complexity. A small cafe mural (10x8 ft) usually takes 3-5 days, while a large building facade can take 2-4 weeks. We always provide a timeline estimate before starting.",
  },
  {
    question: "Do you work outside of Jammu?",
    answer:
      "Absolutely! We've completed projects across J&K, Punjab, Himachal Pradesh, Delhi, and other northern Indian states. Travel costs are included in our project quotes for out-of-city work.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We use weather-resistant, UV-protected paints for outdoor murals. For indoor work, we use premium acrylics, oil paints, and specialized art materials depending on the project requirements.",
  },
  {
    question: "Can you work from a reference image or design?",
    answer:
      "Yes! We can work from your references, sketches, or mood boards. We also offer a full design service where our team creates original concepts based on your vision.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We typically work with a 40% advance to begin, 30% at the midpoint, and the remaining 30% upon completion. For larger projects, we offer flexible milestone-based payment plans.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitted(true)
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
              Let&apos;s Create Something Extraordinary
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Have a wall that needs color? A space that needs life? An idea that needs an artist? We&apos;d love to hear from you. Fill out the form below or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground">{info.value}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Tell Us About Your Project
              </h2>
              <p className="text-muted-foreground mb-8">
                The more details you share, the better we can tailor our response.
              </p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-primary/30 bg-primary/5 p-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                    <Send className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                    Thank you for reaching out. We&apos;ll review your project details and get back to you within 24 hours with ideas and a free estimate.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        budget: "",
                        message: "",
                      })
                    }}
                    className="mt-6 text-sm font-semibold text-primary hover:opacity-80 transition-opacity uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-foreground"
                      >
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-foreground"
                      >
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-semibold text-foreground"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-semibold text-foreground"
                      >
                        Service Interested In <span className="text-accent">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="rounded-lg border border-border bg-input px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="budget"
                      className="text-sm font-semibold text-foreground"
                    >
                      Estimated Budget (INR)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="rounded-lg border border-border bg-input px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-foreground"
                    >
                      Project Details <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your space, the size of the area, your vision, timeline, and anything else that helps us understand your project..."
                      className="rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-lg self-start"
                  >
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  title="Rangrez Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106892.7645965!2d74.7691!3d32.7266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e84f5e1f8e74d%3A0x31cfe4f8e36e22a0!2sJammu%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social Links */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Follow Our Work
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Stay updated with our latest projects, behind-the-scenes content, and studio updates.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 hover:border-primary/30 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                    @rangrezstudio
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/5 hover:border-primary/30 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-primary" />
                    Rangrez Studio
                  </a>
                </div>
              </div>

              {/* Quick Response */}
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Need a Quick Response?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent inquiries or to discuss your project right away, give us a call or WhatsApp.
                </p>
                <a
                  href="tel:+917006232682"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                >
                  <Phone className="h-4 w-4" />
                  +91 7006232682
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-4">
              FAQs
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Common Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-card overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 text-foreground font-semibold hover:bg-secondary transition-colors list-none">
                  {faq.question}
                  <span className="ml-4 text-primary text-xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

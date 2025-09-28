import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Users,
  ArrowRight,
  Building2,
  Headphones,
} from "lucide-react"

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: "Phone",
    description: "Speak directly with our team",
    contact: "+254 700 123 456",
    action: "Call Now",
    available: "Mon-Fri, 8AM-6PM",
  },
  {
    icon: <Mail className="w-6 h-6 text-accent" />,
    title: "Email",
    description: "Send us a detailed message",
    contact: "hello@maverick.co.ke",
    action: "Send Email",
    available: "24/7 Response",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-orange" />,
    title: "WhatsApp",
    description: "Quick chat for urgent matters",
    contact: "+254 700 123 456",
    action: "Chat Now",
    available: "Mon-Fri, 8AM-8PM",
  },
]

const officeInfo = [
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    label: "Address",
    value: "Muthaiga Shopping Centre, Nairobi, Kenya",
  },
  {
    icon: <Clock className="w-5 h-5 text-accent" />,
    label: "Business Hours",
    value: "Monday - Friday: 8:00 AM - 6:00 PM",
  },
  {
    icon: <Phone className="w-5 h-5 text-orange" />,
    label: "Main Line",
    value: "+254 700 123 456",
  },
  {
    icon: <Mail className="w-5 h-5 text-primary" />,
    label: "General Inquiries",
    value: "hello@maverick.co.ke",
  },
]

const departments = [
  {
    name: "Job Seekers",
    email: "careers@maverick.co.ke",
    description: "CV submissions, career guidance, job applications",
    icon: "👤",
  },
  {
    name: "Employers",
    email: "employers@maverick.co.ke",
    description: "Hiring needs, recruitment services, consultations",
    icon: "🏢",
  },
  {
    name: "Partnerships",
    email: "partnerships@maverick.co.ke",
    description: "Business partnerships, collaborations",
    icon: "🤝",
  },
  {
    name: "Support",
    email: "support@maverick.co.ke",
    description: "Technical support, general assistance",
    icon: "🛠️",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">Contact Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                Let's Start a <span className="text-primary">Conversation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Whether you're looking for your next career opportunity or need to hire exceptional talent, we're here
                to help. Get in touch with our expert team today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                Schedule a Call
                <Calendar className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 bg-transparent"
              >
                Send a Message
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24hrs</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange">6</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">Choose the best way to reach us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{method.title}</h3>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                  <div className="space-y-2">
                    <p className="font-medium">{method.contact}</p>
                    <p className="text-xs text-muted-foreground">{method.available}</p>
                  </div>
                  <Button className="w-full group/btn">
                    {method.action}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <Building2 className="w-12 h-12 text-primary mx-auto" />
                    <h3 className="text-2xl font-bold">Visit Our Office</h3>
                    <p className="text-muted-foreground">We'd love to meet you in person</p>
                  </div>

                  <div className="space-y-4">
                    {officeInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">{info.icon}</div>
                        <div>
                          <div className="font-medium text-sm">{info.label}</div>
                          <div className="text-muted-foreground text-sm">{info.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="w-16 h-16 text-primary mx-auto" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-xs text-muted-foreground">Muthaiga Shopping Centre, Nairobi</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Contact by Department</h2>
            <p className="text-xl text-muted-foreground">Reach the right team for your specific needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="text-4xl">{dept.icon}</div>
                  <h3 className="text-lg font-semibold">{dept.name}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">{dept.description}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Mail className="w-3 h-3 mr-2" />
                    {dept.email}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can you fill a position?",
                answer:
                  "Our average placement time is 14 days, though this varies based on role complexity and requirements.",
              },
              {
                question: "Do you charge job seekers?",
                answer:
                  "No, our services are completely free for job seekers. We're paid by employers when we make successful placements.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "We work across all major industries including technology, finance, healthcare, manufacturing, and more.",
              },
              {
                question: "Do you offer remote job opportunities?",
                answer: "Yes, we have a growing portfolio of remote and hybrid positions across various sectors.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">{faq.answer}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto text-pretty">
              Don't wait - your next great opportunity or perfect hire is just a conversation away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Headphones className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Users className="w-4 h-4 mr-2" />
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

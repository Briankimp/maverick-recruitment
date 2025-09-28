import { Navigation } from "@/components/navigation"
import { ServiceCard } from "@/components/service-card"
import { ConsultationForm } from "@/components/consultation-form"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Zap, Shield, Clock, Award, CheckCircle, ArrowRight, Building2, Star } from "lucide-react"
import { Footer } from "@/components/footer"

const services = [
  {
    title: "Executive Search",
    description: "Find top-tier executives and senior leadership for your organization.",
    features: [
      "Comprehensive candidate screening",
      "Executive assessment and profiling",
      "Confidential search process",
      "90-day replacement guarantee",
      "Market intelligence reports",
    ],
    price: "25% of annual salary",
    icon: <Target className="w-8 h-8 text-primary" />,
  },
  {
    title: "Volume Recruitment",
    description: "Scale your team quickly with our bulk hiring solutions.",
    features: [
      "Mass recruitment campaigns",
      "Streamlined interview process",
      "Skills-based assessments",
      "Onboarding support",
      "Performance tracking",
    ],
    price: "KSh 15,000",
    popular: true,
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Specialized Roles",
    description: "Expert recruitment for niche and technical positions.",
    features: [
      "Industry-specific expertise",
      "Technical skill validation",
      "Cultural fit assessment",
      "Reference verification",
      "Salary benchmarking",
    ],
    price: "KSh 25,000",
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "HR Director",
    company: "TechCorp Kenya",
    content:
      "Maverick helped us build our entire engineering team in just 3 months. Their understanding of the tech landscape in Kenya is unmatched.",
    rating: 5,
  },
  {
    name: "David Ochieng",
    role: "CEO",
    company: "FinanceFirst Ltd",
    content:
      "The quality of candidates they presented was exceptional. We hired 5 people through them and all are still with us 2 years later.",
    rating: 5,
  },
  {
    name: "Grace Wanjiku",
    role: "Operations Manager",
    company: "Retail Solutions",
    content:
      "Professional, efficient, and results-driven. They understood our company culture and found candidates who fit perfectly.",
    rating: 5,
  },
]

export default function EmployersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <Badge className="bg-accent/10 text-accent border-accent/20">For Employers</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                  Hire <span className="text-primary">Top Talent</span> Faster Than Ever
                </h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Partner with Kenya's leading recruitment agency to find exceptional candidates who drive your business
                  forward. Our proven process delivers results in weeks, not months.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Start Hiring Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 bg-transparent"
                >
                  View Success Stories
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">14</div>
                  <div className="text-sm text-muted-foreground">Days Average Fill Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange">95%</div>
                  <div className="text-sm text-muted-foreground">Client Retention Rate</div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up">
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="text-center">
                    <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Why Choose Maverick?</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Extensive candidate database",
                      "Industry expertise across sectors",
                      "Rigorous screening process",
                      "Dedicated account management",
                      "Competitive pricing",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Recruitment Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Tailored solutions to meet your unique hiring needs, from executive search to volume recruitment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A streamlined approach that delivers quality candidates efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We understand your needs, culture, and requirements",
                icon: <Users className="w-8 h-8 text-primary" />,
              },
              {
                step: "02",
                title: "Sourcing",
                description: "Tap into our network and actively search for candidates",
                icon: <Target className="w-8 h-8 text-accent" />,
              },
              {
                step: "03",
                title: "Screening",
                description: "Rigorous assessment and interview process",
                icon: <Shield className="w-8 h-8 text-orange" />,
              },
              {
                step: "04",
                title: "Placement",
                description: "Present top candidates and support the hiring decision",
                icon: <Award className="w-8 h-8 text-primary" />,
              },
            ].map((process, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-muted-foreground/30">{process.step}</div>
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">{process.icon}</div>
                  <h3 className="text-xl font-semibold">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by leading companies across Kenya</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultationForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Build Your Dream Team?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto text-pretty">
              Join hundreds of companies who trust Maverick to find their next great hire. Let's discuss your needs
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Clock className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Download Our Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

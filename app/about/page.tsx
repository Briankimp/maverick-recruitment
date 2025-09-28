import { Navigation } from "@/components/navigation"
import { TeamMember } from "@/components/team-member"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Building2,
  Calendar,
  MapPin,
} from "lucide-react"

const teamMembers = [
  {
    name: " ",
    role: "Founder & CEO",
    bio: "15+ years in recruitment with expertise in executive search and talent acquisition across East Africa.",
    expertise: ["Executive Search", "Leadership", "Strategy"],
    image: "👩‍💼",
    linkedin: "#",
    email: "sarah@maverickrecruiters.co.ke",
  },
  {
    name: " ",
    role: "Head of Technology Recruitment",
    bio: "Former software engineer turned recruiter, specializing in tech talent acquisition and startup hiring.",
    expertise: ["Tech Recruitment", "Startups", "Software Engineering"],
    image: "👨‍💻",
    linkedin: "#",
    email: "david@maverickrecruitment.co.ke",
  },
  {
    name: " ",
    role: "Senior Recruitment Consultant",
    bio: "Expert in finance and banking recruitment with a track record of placing senior professionals.",
    expertise: ["Finance", "Banking", "Senior Roles"],
    image: "👩‍💼",
    linkedin: "#",
    email: "grace@maverickrecruitment.co.ke",
  },
  {
    name: " ",
    role: "Career Coach",
    bio: "Certified career coach helping professionals navigate career transitions and achieve their goals.",
    expertise: ["Career Coaching", "Interview Prep", "CV Writing"],
    image: "👨‍🏫",
    linkedin: "#",
    email: "michael@maverickrecruitment.co.ke",
  },
]

const milestones = [
  {
    year: "2021",
    title: "Company Founded",
    description: "Started with a vision to transform recruitment accross the Globe",
  },
  {
    year: "2022",
    title: "First 100 Placements",
    description: "Achieved our first major milestone in successful placements",
  },
  {
    year: "2023",
    title: "Regional Expansion",
    description: "Extended services across East Africa",
  },
  // {
  //   year: "2023",
  //   title: "Digital Transformation",
  //   description: "Launched our comprehensive digital platform",
  // },
  {
    year: "2024",
    title: "500+ Success Stories",
    description: "Celebrating over 500 successful career placements",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">About Maverick Recruitment Agency</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                  Transforming <span className="text-primary">Careers</span> and{" "}
                  <span className="text-accent">Companies</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  Since 2021, we've been a trusted recruitment partner, connecting exceptional talent with
                  forward-thinking companies across the globe.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">150+</div>
                  <div className="text-sm text-muted-foreground">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange">4</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up">
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="text-center">
                    <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Our Impact</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Transformed 500+ careers across Kenya",
                      "Helped 150+ companies build winning teams",
                      "Maintained 95% client satisfaction rate",
                      "Expanded across East African markets",
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-primary/30">
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground text-pretty">
                  To bridge the gap between exceptional talent and innovative companies, creating meaningful connections
                  that drive mutual success and growth.
                </p>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-accent/30">
              <div className="space-y-4">
                <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground text-pretty">
                  To be East Africa's leading recruitment agency, recognized for our integrity, innovation, and
                  commitment to transforming careers and businesses.
                </p>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-orange/30">
              <div className="space-y-4">
                <div className="p-4 bg-orange/10 rounded-full w-fit mx-auto">
                  <Heart className="w-8 h-8 text-orange" />
                </div>
                <h3 className="text-2xl font-bold">Our Values</h3>
                <p className="text-muted-foreground text-pretty">
                  Integrity, Excellence, Innovation, and Empowerment guide everything we do. We believe in building
                  lasting relationships based on trust and results.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From a small startup to Kenya's trusted recruitment partner - here's how we've grown.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1 md:pr-8">
                    <Card className={`p-6 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="space-y-2">
                        <Badge className="bg-accent/10 text-accent border-accent/20">{milestone.year}</Badge>
                        <h3 className="text-xl font-semibold">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                  <div className="flex-1 md:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Experienced professionals dedicated to your success, with deep expertise across industries and markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Maverick?</h2>
            <p className="text-xl text-muted-foreground">What sets us apart in the recruitment industry</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Deep Market Knowledge",
                description: "Extensive understanding of the East African job market and industry trends.",
              },
              {
                icon: <Award className="w-8 h-8 text-accent" />,
                title: "Proven Track Record",
                description: "500+ successful placements with a 95% client satisfaction rate.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-orange" />,
                title: "Personalized Approach",
                description: "Tailored solutions that match your unique needs and company culture.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-primary" />,
                title: "Quality Assurance",
                description: "Rigorous screening process ensures only the best candidates reach you.",
              },
              {
                icon: <Calendar className="w-8 h-8 text-accent" />,
                title: "Fast Turnaround",
                description: "Average placement time of just 14 days without compromising quality.",
              },
              {
                icon: <Heart className="w-8 h-8 text-orange" />,
                title: "Long-term Partnership",
                description: "We build lasting relationships and provide ongoing support.",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Visit Our Office</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Located in the heart of Nairobi, we're easily accessible and always ready to meet with clients and
                candidates.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Muthaiga, Nairobi, Kenya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                Get Directions
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Building2 className="w-16 h-16 text-primary mx-auto" />
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Work Together?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto text-pretty">
              Whether you're looking for your next career opportunity or need to hire exceptional talent, we're here to
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

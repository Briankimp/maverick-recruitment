"use client"
import { Navigation } from "@/components/navigation"
import { ResourceCard } from "@/components/resource-card"
import { CVUpload } from "@/components/cv-upload"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, MessageCircle, Calendar, FileText, Target, Star, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

const resources = [
  {
    title: "How to Write a Winning CV in 2024",
    description:
      "Learn the latest CV writing techniques that get you noticed by recruiters and hiring managers in today's competitive job market.",
    category: "CV Writing",
    readTime: "8 min read",
    views: "2.3k views",
    image: "📄",
    featured: true,
  },
  {
    title: "Mastering the Virtual Interview",
    description:
      "Essential tips for succeeding in video interviews, from technical setup to body language and follow-up strategies.",
    category: "Interview Tips",
    readTime: "6 min read",
    views: "1.8k views",
    image: "💻",
  },
  {
    title: "Salary Negotiation Strategies That Work",
    description: "Proven techniques to negotiate better compensation packages and advance your career with confidence.",
    category: "Career Growth",
    readTime: "10 min read",
    views: "3.1k views",
    image: "💰",
  },
  {
    title: "Building Your Professional Network",
    description: "How to expand your professional network both online and offline to unlock hidden job opportunities.",
    category: "Networking",
    readTime: "7 min read",
    views: "1.5k views",
    image: "🤝",
  },
  {
    title: "Career Change: A Complete Guide",
    description:
      "Step-by-step guide to successfully transitioning to a new career field, including skill development and positioning.",
    category: "Career Change",
    readTime: "12 min read",
    views: "2.7k views",
    image: "🔄",
  },
  {
    title: "LinkedIn Optimization for Job Seekers",
    description:
      "Optimize your LinkedIn profile to attract recruiters and showcase your professional brand effectively.",
    category: "Personal Branding",
    readTime: "9 min read",
    views: "2.1k views",
    image: "💼",
  },
]

const services = [
  {
    title: "CV Review & Optimization",
    description: "Professional CV review with personalized feedback and optimization recommendations.",
    icon: <FileText className="w-8 h-8 text-primary" />,
    price: "Free",
    features: ["Professional review", "Formatting improvements", "Content optimization", "ATS compatibility check"],
  },
  {
    title: "Interview Coaching",
    description: "One-on-one coaching sessions to prepare you for any interview scenario.",
    icon: <MessageCircle className="w-8 h-8 text-accent" />,
    price: "KSh 5,000",
    features: ["Mock interviews", "Behavioral questions", "Industry-specific prep", "Confidence building"],
  },
  {
    title: "Career Consultation",
    description: "Strategic career planning and guidance from experienced career coaches.",
    icon: <Target className="w-8 h-8 text-orange" />,
    price: "KSh 8,000",
    features: ["Career assessment", "Goal setting", "Action planning", "Ongoing support"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent/10 text-accent border-accent/20">For Job Seekers</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                Accelerate Your <span className="text-primary">Career</span> Journey
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Access expert resources, personalized coaching, and career guidance to land your dream job and advance
                your professional growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
                onClick={() => {
                  document.getElementById('career-resources')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Resources
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 bg-transparent"
              //  onClick={() => {
              //     doc ument.getElementById('consultation-cta')?.scrollIntoView({ behavior: 'smooth' });
              //   }}
              >
                Book Consultation
                </Button>
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Careers Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">85%</div>
                <div className="text-sm text-muted-foreground">Interview Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange">30+</div>
                <div className="text-sm text-muted-foreground">Expert Resources</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Career Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Professional services designed to give you a competitive edge in your job search.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">{service.icon}</div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground text-pretty">{service.description}</p>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-muted-foreground">per session</div>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Star className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Book Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="career-resources" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Career Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Expert insights and practical guides to help you navigate your career journey successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* CV Upload Section */}
      {/* <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CVUpload />
        </div>
      </section> */}

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real people, real results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Michael Omondi",
                role: "Software Developer",
                company: "TechStart Kenya",
                story:
                  "After using Maverick's CV optimization service, I received 3 interview calls within a week. Their coaching helped me land my dream job!",
                image: "👨‍💻",
              },
              {
                name: "Grace Wanjiku",
                role: "Marketing Manager",
                company: "Digital Agency",
                story:
                  "The career consultation session was a game-changer. I got clarity on my career path and negotiated a 40% salary increase.",
                image: "👩‍💼",
              },
            ].map((story, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{story.image}</div>
                    <div>
                      <div className="font-semibold text-lg">{story.name}</div>
                      <div className="text-muted-foreground">
                        {story.role} at {story.company}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{story.story}"</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section id="consultation-cta" className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Advance Your Career?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto text-pretty">
              Take the next step in your professional journey with expert guidance and proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Calendar className="w-4 h-4 mr-2" />
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Resources
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, Briefcase, TrendingUp, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Connecting <span className="text-primary">Talent</span> with{" "}
                <span className="text-accent">Opportunity</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Professional recruitment and career consultancy services. Whether you're seeking your next career move
                or looking to hire top talent, we're here to make the perfect match.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/jobs">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Find Your Dream Job
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/employers">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  Hire Top Talent
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Candidates Placed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">150+</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">For Job Seekers</h3>
                  <p className="text-muted-foreground">
                    Access exclusive opportunities, get career coaching, and find your perfect role with our
                    personalized approach.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">For Employers</h3>
                  <p className="text-muted-foreground">
                    Find qualified candidates quickly with our extensive network and rigorous screening process.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-orange/20 hover:border-orange/40 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-orange/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Career Growth</h3>
                  <p className="text-muted-foreground">
                    Professional development, interview coaching, and career guidance to accelerate your success.
                  </p>
                </div>
              </div>
            </Card>

            {/* Testimonial */}
            {/* <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm italic mb-3">
                "Maverick helped me land my dream job in just 2 weeks. Their personalized approach and industry
                expertise made all the difference."
              </p>
              <div className="text-sm font-medium">Sarah Johnson, Marketing Manager</div>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  )
}

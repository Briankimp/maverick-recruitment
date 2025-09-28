import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  Briefcase,
  Users,
  BookOpen,
  MessageCircle,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Stay Updated with Career Opportunities
              </h3>
              <p className="text-primary-foreground/80 text-pretty">
                Get the latest job openings, career tips, and industry insights
                delivered to your inbox weekly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="Enter your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex  items-center space-x-3">
              <Image
                src="/images/logo1.png"
                alt="Maverick Recruitment Agency"
                width={100}
                height={40}
                className="rounded-full bg-blue-50"
              />
              {/* <span className="font-bold text-xl">Maverick Recruitment</span> */}
            </Link>
            <p className="text-primary-foreground/80 text-sm text-pretty">
              Global recruitment agency, connecting exceptional talent with
              innovative companies since 2021.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Muthaiga, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>+254 705078298</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@maverickrecruitment.co.ke</span>
              </div>
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center">
              <Users className="w-5 h-5 mr-2 text-accent" />
              For Job Seekers
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/jobs"
                  className="hover:text-accent transition-colors"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Career Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  CV Review
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Interview Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Career Consultation
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Upload CV
                </Link>
              </li> */}
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-accent" />
              For Employers
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/employers"
                  className="hover:text-accent transition-colors"
                >
                  Hire Talent
                </Link>
              </li>
              <li>
                <Link
                  href="/employers"
                  className="hover:text-accent transition-colors"
                >
                  Executive Search
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/employers"
                  className="hover:text-accent transition-colors"
                >
                  Volume Recruitment
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/employers"
                  className="hover:text-accent transition-colors"
                >
                  Specialized Roles
                </Link>
              </li> */}
              <li>
                <Link
                  href="/employers"
                  className="hover:text-accent transition-colors"
                >
                  Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-accent" />
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Office Location
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Quick Actions */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Follow Us:</span>
              <div className="flex space-x-3">
                <div className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent/20 transition-colors cursor-pointer">
                  <Instagram className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
              <Button
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <div>
              © 2025 Maverick Recruitment Agency. All rights reserved. |
              Connecting talent with opportunity across the Globe.
            </div>
            <div className="flex items-center space-x-6">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

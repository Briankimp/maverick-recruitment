"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Users, Briefcase, Phone, Info } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.jpg"
              alt="Maverick Recruitment Agency"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-primary">Maverick Agency</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/jobs"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Find Jobs</span>
            </Link>
            <Link
              href="/employers"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>For Employers</span>
            </Link>
            <Link
              href="/services"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span>Services</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-glow">
              Get Started
            </Button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2">
              <Link
                href="/jobs"
                className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                <Search className="w-4 h-4" />
                <span>Find Jobs</span>
              </Link>
              <Link
                href="/employers"
                className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                <Users className="w-4 h-4" />
                <span>For Employers</span>
              </Link>
              <Link
                href="/services"
                className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                <span>Services</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                <Info className="w-4 h-4" />
                <span>About</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </Link>
              {/* <div className="px-3 py-2">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

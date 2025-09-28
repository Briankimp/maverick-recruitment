"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, Users } from "lucide-react"

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    companySize: "",
    hiringNeeds: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">Book a Free Consultation</h3>
          <p className="text-muted-foreground">
            Let's discuss your hiring needs and how we can help you find the perfect candidates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              required
            />
            <Input
              placeholder="Contact Name"
              value={formData.contactName}
              onChange={(e) => handleInputChange("contactName", e.target.value)}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Select value={formData.companySize} onValueChange={(value) => handleInputChange("companySize", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Company Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-500">201-500 employees</SelectItem>
                <SelectItem value="500+">500+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Input
            placeholder="What positions are you looking to fill?"
            value={formData.hiringNeeds}
            onChange={(e) => handleInputChange("hiringNeeds", e.target.value)}
          />

          <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Hiring Timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="immediate">Immediate (within 2 weeks)</SelectItem>
              <SelectItem value="1-month">Within 1 month</SelectItem>
              <SelectItem value="3-months">Within 3 months</SelectItem>
              <SelectItem value="6-months">Within 6 months</SelectItem>
              <SelectItem value="ongoing">Ongoing hiring needs</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Tell us more about your hiring challenges and requirements..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            rows={4}
          />

          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Consultation
          </Button>
        </form>

        {/* Contact Info */}
        <div className="border-t pt-6">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <Clock className="w-6 h-6 text-primary mx-auto" />
              <div className="text-sm font-medium">Response Time</div>
              <div className="text-xs text-muted-foreground">Within 24 hours</div>
            </div>
            <div className="space-y-2">
              <Calendar className="w-6 h-6 text-accent mx-auto" />
              <div className="text-sm font-medium">Free Consultation</div>
              <div className="text-xs text-muted-foreground">30-minute call</div>
            </div>
            <div className="space-y-2">
              <Users className="w-6 h-6 text-orange mx-auto" />
              <div className="text-sm font-medium">Expert Team</div>
              <div className="text-xs text-muted-foreground">Dedicated recruiters</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
        <div className="text-center space-y-4">
          <CheckCircle className="w-16 h-16 text-accent mx-auto" />
          <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
          <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">Send Us a Message</h3>
          <p className="text-muted-foreground">
            We'd love to hear from you. Send us a message and we'll respond promptly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
            <Input
              placeholder="Company (Optional)"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
          </div>

          <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="What can we help you with?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="job-seeker">I'm looking for a job</SelectItem>
              <SelectItem value="employer">I need to hire talent</SelectItem>
              <SelectItem value="consultation">I want a consultation</SelectItem>
              <SelectItem value="partnership">Partnership opportunities</SelectItem>
              <SelectItem value="other">Other inquiry</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            required
          />

          <Textarea
            placeholder="Tell us more about your inquiry..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            rows={5}
            required
          />

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </form>
      </div>
    </Card>
  )
}

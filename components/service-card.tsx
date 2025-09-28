import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from "lucide-react"

interface ServiceCardProps {
  service: {
    title: string
    description: string
    features: string[]
    price: string
    popular?: boolean
    icon: React.ReactNode
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card
      className={`p-8 relative hover:shadow-xl transition-all duration-300 ${
        service.popular ? "border-accent shadow-lg scale-105" : "hover:border-primary/30"
      }`}
    >
      {service.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
          Most Popular
        </Badge>
      )}

      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto">{service.icon}</div>
          <h3 className="text-2xl font-bold">{service.title}</h3>
          <p className="text-muted-foreground text-pretty">{service.description}</p>
        </div>

        {/* Price */}
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">{service.price}</div>
          <div className="text-sm text-muted-foreground">per placement</div>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button
          className={`w-full group ${
            service.popular
              ? "bg-accent text-accent-foreground hover:bg-accent/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          Get Started
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  )
}

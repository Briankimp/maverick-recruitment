import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye, ArrowRight } from "lucide-react"

interface ResourceCardProps {
  resource: {
    title: string
    description: string
    category: string
    readTime: string
    views: string
    image: string
    featured?: boolean
  }
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card
      className={`overflow-hidden hover:shadow-xl transition-all duration-300 group ${
        resource.featured ? "border-accent shadow-lg" : "hover:border-primary/30"
      }`}
    >
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge
            className={
              resource.featured
                ? "bg-accent text-accent-foreground"
                : "bg-primary/90 text-primary-foreground backdrop-blur-sm"
            }
          >
            {resource.category}
          </Badge>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">{resource.image}</div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
          {resource.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{resource.description}</p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{resource.readTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-3 h-3" />
              <span>{resource.views}</span>
            </div>
          </div>
        </div>

        <Button variant="ghost" className="w-full group/btn justify-between">
          Read More
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  )
}

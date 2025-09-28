import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Building2 } from "lucide-react"

interface JobCardProps {
  job: {
    id: string
    title: string
    company: string
    location: string
    type: string
    salary: string
    description: string
    postedDate: string
    tags: string[]
  }
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30 group">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{job.title}</h3>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Building2 className="w-4 h-4" />
              <span>{job.company}</span>
            </div>
          </div>
          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
            {job.type}
          </Badge>
        </div>

        {/* Job Details */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <DollarSign className="w-4 h-4" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{job.postedDate}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground line-clamp-2">{job.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <Button variant="outline" size="sm">
            View Details
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Apply Now
          </Button>
        </div>
      </div>
    </Card>
  )
}

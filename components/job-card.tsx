import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  DollarSign,
  Building2,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { Job } from "@/types/sanity";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30)
      return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? "s" : ""} ago`;
    return date.toLocaleDateString("en-KE", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30 group">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            {job.companyLogo && (
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={job.companyLogo.url}
                  alt={job.company}
                  width={64}
                  height={64}
                  className="object-contain rounded-lg"
                />
              </div>
            )}
            <div className="space-y-2 flex-1">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Building2 className="w-4 h-4" />
                <span>{job.company}</span>
              </div>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="bg-accent/10 text-accent border-accent/20"
          >
            {job.type}
          </Badge>
        </div>

        {/* Job Details */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          {job.salary && (
            <div className="flex items-center space-x-1">
              <DollarSign className="w-4 h-4" />
              <span>{job.salary}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{formatDate(job.postedAt)}</span>
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
          {job.applicationUrl ? (
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a
                href={job.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          ) : (
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Apply Now
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

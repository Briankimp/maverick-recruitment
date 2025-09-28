"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { JobCard } from "@/components/job-card"
import { JobFilters } from "@/components/job-filters"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, TrendingUp } from "lucide-react"
import { Footer } from "@/components/footer"

// Dummy job data
const dummyJobs = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "TechCorp Kenya",
    location: "Nairobi, Kenya",
    type: "Full Time",
    salary: "KSh 150,000 - 250,000",
    description:
      "We are looking for a senior software engineer to join our growing team. You will be responsible for developing scalable web applications and mentoring junior developers.",
    postedDate: "2 days ago",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    id: "2",
    title: "Marketing Manager",
    company: "Digital Solutions Ltd",
    location: "Remote",
    type: "Full Time",
    salary: "KSh 120,000 - 180,000",
    description:
      "Lead our marketing initiatives and develop comprehensive strategies to drive brand awareness and customer acquisition across digital channels.",
    postedDate: "1 week ago",
    tags: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
  },
  {
    id: "3",
    title: "Data Analyst",
    company: "FinTech Innovations",
    location: "Nairobi, Kenya",
    type: "Contract",
    salary: "KSh 80,000 - 120,000",
    description:
      "Analyze complex datasets to provide actionable insights for business decision-making. Experience with SQL, Python, and data visualization tools required.",
    postedDate: "3 days ago",
    tags: ["Python", "SQL", "Tableau", "Statistics"],
  },
  {
    id: "4",
    title: "UX/UI Designer",
    company: "Creative Agency",
    location: "Mombasa, Kenya",
    type: "Full Time",
    salary: "KSh 90,000 - 140,000",
    description:
      "Design intuitive and engaging user experiences for web and mobile applications. Collaborate with development teams to bring designs to life.",
    postedDate: "5 days ago",
    tags: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
  },
  {
    id: "5",
    title: "Sales Representative",
    company: "Global Trading Co",
    location: "Kisumu, Kenya",
    type: "Full Time",
    salary: "KSh 60,000 - 100,000",
    description:
      "Drive sales growth by building relationships with clients and identifying new business opportunities in the East African market.",
    postedDate: "1 day ago",
    tags: ["B2B Sales", "Client Relations", "CRM", "Negotiation"],
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "Cloud Systems Inc",
    location: "Remote",
    type: "Contract",
    salary: "KSh 180,000 - 280,000",
    description:
      "Manage cloud infrastructure and implement CI/CD pipelines. Experience with AWS, Docker, and Kubernetes essential.",
    postedDate: "4 days ago",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
]

export default function JobsPage() {
  const [filteredJobs, setFilteredJobs] = useState(dummyJobs)
  const [currentFilters, setCurrentFilters] = useState<any>({})

  const handleFiltersChange = (filters: any) => {
    setCurrentFilters(filters)
    // Simple filtering logic - in a real app, this would be more sophisticated
    let filtered = dummyJobs

    if (filters.searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          job.tags.some((tag) => tag.toLowerCase().includes(filters.searchTerm.toLowerCase())),
      )
    }

    if (filters.location) {
      filtered = filtered.filter((job) => job.location.toLowerCase().includes(filters.location.toLowerCase()))
    }

    if (filters.jobType) {
      filtered = filtered.filter((job) => job.type.toLowerCase().replace(" ", "-") === filters.jobType)
    }

    setFilteredJobs(filtered)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Briefcase className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold text-balance">Find Your Dream Job</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover exciting career opportunities with top companies across Kenya and beyond.
            </p>
            <div className="flex items-center justify-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{dummyJobs.length}</div>
                <div className="text-sm text-muted-foreground">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange">New</div>
                <div className="text-sm text-muted-foreground">Jobs Daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <JobFilters onFiltersChange={handleFiltersChange} />

                {/* Popular Categories */}
                <div className="mt-6 p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                    Popular Categories
                  </h3>
                  <div className="space-y-2">
                    {["Technology", "Marketing", "Finance", "Healthcare", "Education", "Sales"].map((category) => (
                      <Button key={category} variant="ghost" className="w-full justify-start text-sm">
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Jobs List */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {filteredJobs.length} Job{filteredJobs.length !== 1 ? "s" : ""} Found
                  </h2>
                  {Object.keys(currentFilters).length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {currentFilters.searchTerm && (
                        <Badge variant="secondary">Search: {currentFilters.searchTerm}</Badge>
                      )}
                      {currentFilters.location && (
                        <Badge variant="secondary">Location: {currentFilters.location}</Badge>
                      )}
                      {currentFilters.jobType && <Badge variant="secondary">Type: {currentFilters.jobType}</Badge>}
                      {currentFilters.salaryRange && (
                        <Badge variant="secondary">Salary: {currentFilters.salaryRange}</Badge>
                      )}
                    </div>
                  )}
                </div>
                <Button variant="outline" size="sm">
                  Sort by: Newest
                </Button>
              </div>

              {/* Jobs Grid */}
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              {/* Load More */}
              {filteredJobs.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Jobs
                  </Button>
                </div>
              )}

              {/* No Results */}
              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your search criteria or browse all jobs.</p>
                  <Button onClick={() => handleFiltersChange({})}>Clear All Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

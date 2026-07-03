import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { JobCard } from "@/components/job-card";
import { JobFilters } from "@/components/job-filters";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp } from "lucide-react";
import { Footer } from "@/components/footer";
import { getAllJobs, searchJobs } from "@/lib/fetch/jobs";
import { Job } from "@/types/sanity";

export const metadata: Metadata = {
  title: "Find Your Dream Job | Maverick Recruitment",
  description:
    "Discover exciting career opportunities with top companies across Kenya and beyond.",
};

// Enable ISR (Incremental Static Regeneration) for better performance
export const revalidate = 60; // Revalidate every 60 seconds

export default async function JobsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Parse filters from URL search params
  const filters = {
    searchTerm:
      typeof searchParams.search === "string" ? searchParams.search : undefined,
    location:
      typeof searchParams.location === "string"
        ? searchParams.location
        : undefined,
    jobType:
      typeof searchParams.type === "string" ? searchParams.type : undefined,
    salaryRange:
      typeof searchParams.salary === "string" ? searchParams.salary : undefined,
  };

  // Fetch jobs based on filters
  const jobs: Job[] =
    filters.searchTerm || filters.location || filters.jobType
      ? await searchJobs(filters)
      : await getAllJobs();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Briefcase className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold text-balance">
                Find Your Dream Job
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover exciting career opportunities with top companies across
              Kenya and beyond.
            </p>
            <div className="flex items-center justify-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {jobs.length}
                </div>
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
                <JobFilters />

                {/* Popular Categories */}
                <div className="mt-6 p-6 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                    Popular Categories
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Technology",
                      "Marketing",
                      "Finance",
                      "Healthcare",
                      "Education",
                      "Sales",
                    ].map((category) => (
                      <Button
                        key={category}
                        variant="ghost"
                        className="w-full justify-start text-sm"
                      >
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
                    {jobs.length} Job{jobs.length !== 1 ? "s" : ""} Found
                  </h2>
                  {(filters.searchTerm ||
                    filters.location ||
                    filters.jobType) && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {filters.searchTerm && (
                        <Badge variant="secondary">
                          Search: {filters.searchTerm}
                        </Badge>
                      )}
                      {filters.location && (
                        <Badge variant="secondary">
                          Location: {filters.location}
                        </Badge>
                      )}
                      {filters.jobType && (
                        <Badge variant="secondary">
                          Type: {filters.jobType}
                        </Badge>
                      )}
                      {filters.salaryRange && (
                        <Badge variant="secondary">
                          Salary: {filters.salaryRange}
                        </Badge>
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
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              {/* Load More */}
              {jobs.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Jobs
                  </Button>
                </div>
              )}

              {/* No Results */}
              {jobs.length === 0 && (
                <div className="text-center py-12">
                  <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search criteria or browse all jobs.
                  </p>
                  <Button asChild>
                    <a href="/jobs">Clear All Filters</a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

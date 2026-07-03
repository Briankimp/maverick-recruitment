// Fetch helpers for jobs
// These functions handle data fetching from Sanity CMS

import { sanityClient } from "@/lib/sanity"
import { SanityJob, Job } from "@/types/sanity"
import { urlFor } from "@/lib/image-url"

/**
 * Normalize a Sanity job document to application Job type
 * This follows the normalization principle from SANITY_INTEGRATION_STANDARD.md
 */
function normalizeJob(sanityJob: SanityJob): Job {
  return {
    id: sanityJob._id,
    title: sanityJob.title,
    company: sanityJob.company,
    location: sanityJob.location,
    type: sanityJob.type,
    salary: sanityJob.salary,
    description: sanityJob.description,
    requirements: sanityJob.requirements,
    tags: sanityJob.tags,
    companyLogo: sanityJob.companyLogo
      ? {
          url: urlFor(sanityJob.companyLogo)?.url() || sanityJob.companyLogo.asset.url,
          width: sanityJob.companyLogo.asset.metadata?.dimensions?.width,
          height: sanityJob.companyLogo.asset.metadata?.dimensions?.height,
        }
      : undefined,
    applicationUrl: sanityJob.applicationUrl,
    postedAt: sanityJob.postedAt,
    expiresAt: sanityJob.expiresAt,
    isActive: sanityJob.isActive,
    featured: sanityJob.featured,
  }
}

/**
 * Fetch all active jobs from Sanity
 */
export async function getAllJobs(): Promise<Job[]> {
  try {
    const jobs: SanityJob[] = await sanityClient.fetch(`
      *[_type == "job" && isActive == true] | order(postedAt desc) {
        _id,
        title,
        company,
        location,
        type,
        salary,
        description,
        requirements,
        tags,
        companyLogo {
          asset -> {
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          }
        },
        applicationUrl,
        postedAt,
        expiresAt,
        featured
      }
    `)

    return jobs.map(normalizeJob)
  } catch (error) {
    console.error("Error fetching jobs:", error)
    return []
  }
}

/**
 * Fetch featured jobs from Sanity
 */
export async function getFeaturedJobs(limit: number = 6): Promise<Job[]> {
  try {
    const jobs: SanityJob[] = await sanityClient.fetch(`
      *[_type == "job" && isActive == true && featured == true] | order(postedAt desc) [0...${limit}] {
        _id,
        title,
        company,
        location,
        type,
        salary,
        description,
        tags,
        companyLogo {
          asset -> {
            url
          }
        },
        postedAt
      }
    `)

    return jobs.map(normalizeJob)
  } catch (error) {
    console.error("Error fetching featured jobs:", error)
    return []
  }
}

/**
 * Fetch a single job by ID
 */
export async function getJobById(id: string): Promise<Job | null> {
  try {
    const job: SanityJob | null = await sanityClient.fetch(
      `
      *[_type == "job" && _id == $id][0] {
        _id,
        title,
        company,
        location,
        type,
        salary,
        description,
        requirements,
        tags,
        companyLogo {
          asset -> {
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          }
        },
        applicationUrl,
        postedAt,
        expiresAt
      }
    `,
      { id }
    )

    if (!job) return null
    return normalizeJob(job)
  } catch (error) {
    console.error("Error fetching job by ID:", error)
    return null
  }
}

/**
 * Search and filter jobs
 */
export async function searchJobs(filters: {
  searchTerm?: string
  location?: string
  jobType?: string
  salaryRange?: string
}): Promise<Job[]> {
  try {
    // Build GROQ query with filters
    let query = `*[_type == "job" && isActive == true`
    const params: Record<string, any> = {}

    // Search term filter
    if (filters.searchTerm) {
      query += ` && (title match $searchTerm || company match $searchTerm || tags[] match $searchTerm)`
      params.searchTerm = `*${filters.searchTerm}*`
    }

    // Location filter
    if (filters.location) {
      query += ` && location match $location`
      params.location = `*${filters.location}*`
    }

    // Job type filter
    if (filters.jobType) {
      query += ` && type == $jobType`
      params.jobType = filters.jobType
    }

      query += `] | order(postedAt desc) {
        _id,
        title,
        company,
        location,
        type,
        salary,
        description,
        tags,
        companyLogo {
          asset -> {
            url
          }
        },
        postedAt
      }`

    const jobs: SanityJob[] = await sanityClient.fetch(query, params)
    return jobs.map(normalizeJob)
  } catch (error) {
    console.error("Error searching jobs:", error)
    return []
  }
}
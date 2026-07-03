// Sanity CMS Types
// These types represent the raw data structure from Sanity

export interface SanityImage {
  asset: {
    url: string
    metadata?: {
      dimensions: {
        width: number
        height: number
      }
    }
  }
}

export interface SanityJob {
  _id: string
  _type: "job"
  title: string
  company: string
  location: string
  type: string
  salary?: string
  description: string
  requirements?: string[]
  tags: string[]
  companyLogo?: SanityImage
  applicationUrl?: string
  postedAt: string
  expiresAt?: string
  isActive: boolean
  featured: boolean
}

// Normalized types for the application
// These types are independent of Sanity and can be used in components

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary?: string
  description: string
  requirements?: string[]
  tags: string[]
  companyLogo?: {
    url: string
    width?: number
    height?: number
  }
  applicationUrl?: string
  postedAt: string
  expiresAt?: string
  isActive: boolean
  featured: boolean
}

export interface JobFilters {
  searchTerm?: string
  location?: string
  jobType?: string
  salaryRange?: string
}
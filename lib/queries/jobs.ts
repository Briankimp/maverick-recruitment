// GROQ queries for jobs
// These queries fetch data from Sanity CMS

export const getAllJobsQuery = `
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
      asset {
        url
        metadata {
          dimensions {
            width
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
`

export const getFeaturedJobsQuery = `
  *[_type == "job" && isActive == true && featured == true] | order(postedAt desc) [0...6] {
    _id,
    title,
    company,
    location,
    type,
    salary,
    description,
    tags,
    companyLogo {
      asset {
        url
      }
    },
    postedAt
  }
`

export const getJobByIdQuery = `
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
      asset {
        url
        metadata {
          dimensions {
            width
            height
          }
        }
      }
    },
    applicationUrl,
    postedAt,
    expiresAt
  }
`

export const searchJobsQuery = `
  *[_type == "job" && isActive == true && $searchTerm == "" || 
    _type == "job" && isActive == true && 
    (title match $searchTerm || company match $searchTerm || tags[] match $searchTerm)] | order(postedAt desc) {
    _id,
    title,
    company,
    location,
    type,
    salary,
    description,
    tags,
    companyLogo {
      asset {
        url
      }
    },
    postedAt
  }
`
import { createClient } from "@sanity/client"
import { projectId, dataset, apiVersion } from "./sanity.config"

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for faster reads in production
})

// Client for write operations (server-side only)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

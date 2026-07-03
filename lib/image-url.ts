// Image URL builder for Sanity images
import { createImageUrlBuilder } from "@sanity/image-url"
import { projectId, dataset } from "./sanity.config"

export const urlFor = (source: any) => {
  if (!source?.asset?._ref) return null
  
  return createImageUrlBuilder({
    projectId,
    dataset,
  }).image(source)
}

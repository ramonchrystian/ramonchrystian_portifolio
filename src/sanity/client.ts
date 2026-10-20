import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'ankkhvgz',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // CDN com resposta ultra-rápida em cache
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export type SanityImageSource = Parameters<typeof builder.image>[0]

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

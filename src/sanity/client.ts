import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'ankkhvgz'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const writeToken =
  import.meta.env.VITE_SANITY_WRITE_TOKEN ||
  'sk44WdVUysZ0PsKCh30ihC1nqWb9aZyTSlCfJL1ky1POOGASwssd5ZAgBKdjCwa5H9DcDwJ57UE0MHLrWsv3GM3XMLPFtpC2jdNFXSqZwkci8KMksZ15nDJUwJGgV3pvg3ABc5CccfPm1BOAwCMTg59FPr2rcGf83wfB1lD6dgN1Pv1EPeJs'

export const client = createClient({
  projectId,
  dataset,
  useCdn: false, // useCdn: false ensures immediate cloud sync of changes like maintenance mode
  apiVersion: '2024-01-01',
})

export const writeClient = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-01-01',
  token: writeToken,
})

const builder = imageUrlBuilder(client)

export type SanityImageSource = Parameters<typeof builder.image>[0]

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

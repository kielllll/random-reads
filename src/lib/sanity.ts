import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_APP_SANITY_STUDIO_PROJECT_ID || '',
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function generateImageUrl(source: string) {
  return builder.image(source)
}

import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_APP_SANITY_STUDIO_PROJECT_ID || '',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
})

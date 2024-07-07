'use server'

import { client } from '@/lib/sanity'

export async function getPosts() {
  try {
    const posts = await client.fetch('*[_type == "post"]')

    return posts
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch posts')
  }
}

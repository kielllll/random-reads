'use server'

import { client } from '@/lib/sanity'
import { type Post } from './posts'

export async function getPostBySlug(slug: string) {
  try {
    const posts = await client.fetch<Post>(
      `*[_type == "post" && slug.current == '${slug}'][0]`
    )

    return posts
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch posts')
  }
}

'use server'

import { client } from '@/lib/sanity'

export type Post = {
  _id: string
  _type: 'post'
  title: string
  slug: {
    current: string
    _type: 'slug'
  }
  body: Record<string, any>
  publishedAt: string
  preview: any
  category: string
}

export async function getPosts(length = 3) {
  try {
    const posts = await client.fetch<Post[]>(
      `*[_type == "post"]|order(publishedAt desc)[0...${length}]`
    )

    return posts
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch posts')
  }
}

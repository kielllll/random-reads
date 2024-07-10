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
}

export async function getPosts() {
  try {
    const posts = await client.fetch<Post[]>('*[_type == "post"]')

    return posts
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch posts')
  }
}

import ImagePlaceholder from '@/components/image-placeholder'
import { Badge } from '@/components/ui/badge'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { generateImageUrl } from '@/lib/sanity'
import { getPosts } from '@/server/posts'
import Image from 'next/image'
import Link from 'next/link'
import { LoadMoreButton } from './load_more_button'

export default async function Blogs({ length }: { length: number }) {
  const posts = await getPosts(length)

  return (
    <div className="grid grid-cols-2 w-full place-items-center gap-4">
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/blogs/${post.slug.current}`}
          className="w-5/6 sm:w-full col-span-2 sm:col-span-1"
        >
          <Card className="h-[324px] w-full flex flex-col">
            <CardHeader className="p-0">
              <div className="relative h-48">
                {post.preview?.asset ? (
                  <Image
                    src={generateImageUrl(post.preview.asset._ref).url()}
                    alt="image"
                    fill
                    objectFit="cover"
                    className="bg-slate-100"
                  />
                ) : (
                  <ImagePlaceholder />
                )}
              </div>

              <CardTitle className="line-clamp-3 leading-8 text-xl px-6">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-between items-center mt-auto">
              {post.category && <Badge>{post.category}</Badge>}
              <p className="ml-auto">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
      <LoadMoreButton length={6} />
    </div>
  )
}

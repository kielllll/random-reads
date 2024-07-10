import { Badge } from '@/components/ui/badge'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { getPosts } from '@/server/posts'
import Image from 'next/image'
import Link from 'next/link'

export default async function Blogs() {
  const posts = await getPosts()

  return (
    <div className="grid grid-cols-2 w-full items-center gap-4">
      {posts.map((post) => (
        <Link key={post._id} href={`/blogs/${post.slug.current}`}>
          <Card className="col-span-1 h-[382px] w-full flex flex-col">
            <CardHeader>
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=3440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                  fill
                  objectFit="cover"
                />
              </div>

              <CardTitle className="line-clamp-3 leading-8 text-xl">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-between items-center mt-auto">
              <Badge className="w-fit">Technology</Badge>
              <p>July 7, 2024</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

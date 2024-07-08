import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getPosts } from '@/server/posts'

export default async function Blogs() {
  const posts = await getPosts()
  console.log(posts)

  return (
    <div className="grid grid-cols-4 w-full items-center gap-4">
      {posts.map((post) => (
        <Card key={post._id} className="col-span-1 h-60">
          <CardHeader>
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>Content</CardContent>
        </Card>
      ))}
    </div>
  )
}

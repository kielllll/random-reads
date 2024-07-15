import { getPostBySlug } from '@/server/post'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import { FaLongArrowAltLeft } from 'react-icons/fa'

export default async function Blog({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  return (
    <main className="w-full max-w-4xl flex flex-col gap-4 py-12">
      <Link href="/" className="flex gap-1 items-center">
        <FaLongArrowAltLeft /> Back to Home
      </Link>
      <h1 className="text-6xl">{post.title}</h1>
      <PortableText
        value={post.body}
        components={{
          block: {
            h2: ({ children }) => <h2 className="text-3xl">{children}</h2>,
            h3: ({ children }) => <h3 className="text-2xl">{children}</h3>,
          },
        }}
      />
    </main>
  )
}

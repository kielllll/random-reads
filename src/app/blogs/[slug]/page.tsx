import { generateImageUrl } from '@/lib/sanity'
import { getPostBySlug } from '@/server/post'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { FaLongArrowAltLeft } from 'react-icons/fa'

export default async function Blog({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  return (
    <main className="w-full max-w-4xl flex flex-col gap-4 py-6 lg:px-0 px-4">
      <Link href="/" className="flex gap-1 items-center">
        <FaLongArrowAltLeft /> Back to Home
      </Link>
      <h1 className="text-6xl">{post.title}</h1>
      {post.preview?.asset && (
        <div className="h-72 relative">
          <Image
            src={generateImageUrl(post.preview.asset._ref).url()}
            alt="image"
            fill
            objectFit="cover"
            className="bg-slate-100"
          />
        </div>
      )}
      <PortableText
        value={post.body}
        components={{
          block: {
            h2: ({ children }) => <h2 className="text-3xl">{children}</h2>,
            h3: ({ children }) => <h3 className="text-2xl">{children}</h3>,
            h4: ({ children }) => <h4 className="text-xl">{children}</h4>,
          },
        }}
      />
    </main>
  )
}

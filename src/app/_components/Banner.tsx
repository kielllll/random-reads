import ImagePlaceholder from '@/components/image-placeholder'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { generateImageUrl } from '@/lib/sanity'
import { getPosts } from '@/server/posts'
import Image from 'next/image'
import Link from 'next/link'

export default async function Banner() {
  const posts = await getPosts(3)

  return (
    <div className="w-full flex justify-center bg-slate-100 px-2 py-4">
      <Carousel className="w-5/6">
        <CarouselContent>
          {posts?.map((post) => {
            return (
              <CarouselItem key={post._id} className="relative">
                <Link href={`/blogs/${post.slug.current}`}>
                  <div className="h-48">
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
                  <h3 className="absolute bottom-2 right-2 text-2xl text-white font-bold mix-blend-difference">
                    {post.title}
                  </h3>
                </Link>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

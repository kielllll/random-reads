import Banner from './_components/Banner'
import Blogs from './_components/Blogs'

export default function Home({
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { length?: string }
}) {
  const length = !!searchParams?.length ? +searchParams?.length : 6

  return (
    <main className="w-full max-w-4xl flex flex-col gap-4 items-center py-6">
      <Banner />
      <Blogs length={length} />
    </main>
  )
}

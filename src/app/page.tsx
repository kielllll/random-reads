import Blogs from './_components/Blogs'

export default function Home() {
  return (
    <main className="w-full max-w-4xl flex flex-col gap-8">
      <div>Banner</div>
      <Blogs />
    </main>
  )
}

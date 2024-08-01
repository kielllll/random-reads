import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex w-full max-w-4xl items-center justify-between py-4 relative">
      <Link href="/">
        <Image
          src={'/random-reads.svg'}
          width={50}
          height={50}
          alt={'Random Reads'}
        />
      </Link>
    </header>
  )
}

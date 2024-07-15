import Link from 'next/link'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
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
      <div className="flex items-center space-x-2">
        <Switch id="dark-mode" />
        <Label htmlFor="dark-mode">Dark Mode</Label>
      </div>
    </header>
  )
}

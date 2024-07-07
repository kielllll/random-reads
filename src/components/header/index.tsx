import Link from 'next/link'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'

export default function Header() {
  return (
    <header className="flex w-full max-w-5xl items-center justify-between py-4 relative">
      <Link href="/">Logo</Link>
      <nav className="flex justify-between gap-4 absolute right-1/2">
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
      </nav>
      <div className="flex items-center space-x-2">
        <Switch id="dark-mode" />
        <Label htmlFor="dark-mode">Dark Mode</Label>
      </div>
    </header>
  )
}

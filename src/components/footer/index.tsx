import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col w-full max-w-5xl py-4 gap-4">
      <div className="flex w-full items-center justify-between">
        <div>About</div>
        <div>Quick Links</div>
        <div>Category</div>
        <div>Newsletter</div>
      </div>
      <div className="flex w-full justify-between border-t-2 py-4">
        <div>Copyright</div>
        <div className="flex gap-4">
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  )
}

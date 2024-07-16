import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-slate-100 flex justify-center items-center py-4">
      <p>
        Copyright © 2024 by{' '}
        <Link
          href={'https://github.com/kielllll'}
          target="_blank"
          className="underline"
        >
          eatarranza
        </Link>
      </p>
    </footer>
  )
}

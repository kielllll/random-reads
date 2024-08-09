'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeButton from './theme-button'

export default function Header() {
  const [theme, setTheme] = useState('dark')
  const isDark = theme === 'dark'

  return (
    <header className="flex w-full max-w-4xl items-center justify-between py-4 relative">
      <Link href="/">
        <Image
          src={isDark ? '/random-reads-dark-theme.svg' : '/random-reads.svg'}
          width={50}
          height={50}
          alt={'Random Reads'}
        />
      </Link>
      <ThemeButton theme={theme} setTheme={setTheme} />
    </header>
  )
}

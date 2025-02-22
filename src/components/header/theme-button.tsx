'use client'

import { useEffect } from 'react'
import { CiDark, CiLight } from 'react-icons/ci'
import { Button } from '../ui/button'

export default function ThemeButton({
  theme,
  setTheme,
}: {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}) {
  const isDark = theme === 'dark'

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    setTheme(savedTheme || 'dark')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [isDark])

  const handleToggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Button variant="outline" size="icon" onClick={handleToggleTheme}>
      {isDark ? <CiLight size={24} /> : <CiDark size={24} />}
    </Button>
  )
}

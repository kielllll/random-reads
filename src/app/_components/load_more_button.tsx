'use client'

import { Button } from '@/components/ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function LoadMoreButton({ length }: { length: number }) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  return (
    <Button
      onClick={() => {
        console.log('clicked')
        params.set('length', (length + 6).toString())
        replace(`${pathname}?${params.toString()}`)
      }}
      className="col-span-2"
    >
      Load More
    </Button>
  )
}

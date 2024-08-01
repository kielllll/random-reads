import Image from 'next/image'

export default function ImagePlaceholder() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=3440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      fill
      objectFit="cover"
    />
  )
}

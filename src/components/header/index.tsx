export default function Header() {
  return (
    <header className="flex w-full max-w-5xl items-center justify-between py-4">
      <p>logo</p>
      <nav className="flex justify-between gap-4">
        <a>Home</a>
        <a>Blogs</a>
      </nav>
      <p>toggle</p>
    </header>
  )
}

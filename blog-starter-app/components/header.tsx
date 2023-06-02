import Link from 'next/link'

const Header = () => {
  return (
    <div className="pt-28 pb-1 flex flex-col lg:flex-row items-center">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-6 mt-8">
        <Link href="/" className="hover:underline">
          Samantha High Ph.D.
        </Link>
      </h2>
   </div>
  )
}

export default Header

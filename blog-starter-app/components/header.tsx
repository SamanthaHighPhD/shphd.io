import Link from 'next/link'
import { HiHome } from "react-icons/hi"

const Header = () => {
  return (
    <div className="pt-28 pb-1 flex flex-col lg:flex-row items-center">
      <Link href="/" className="hover:underline"><HiHome className="pt-3 h-9 w-9"/></Link>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-6 mt-8">
        <Link href="/" className="hover:underline">
          Samantha High Ph.D. 
        </Link>  
      </h2>
   </div>
  )
}

export default Header

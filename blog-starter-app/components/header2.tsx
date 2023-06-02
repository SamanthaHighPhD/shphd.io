import Link from 'next/link'

const Header = () => {
  return (
    <div className="pt-1 pb-28 flex flex-col lg:flex-row items-center">     
      <div className="flex flex-col lg:flex-row tracking-tight md:tracking-tighter leading-tight mb-6 mt-8">
        <a
        href="https://www.linkedin.com/in/samanthahighphd/"
        className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SamanthaHighPhD"
          className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
        >
          GitHub
        </a>
        <a
          href="https://pdx.sh/@LadyTehanu"
          className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
        >
          Mastodon
        </a>
        <Link
          href="/assets/blog/CV/SAMANTHA HIGH Curriculum Vitae.pdf"
          className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
        >
          CV
        </Link>
    </div>
   </div>
  )
}

export default Header

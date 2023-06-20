import React from 'react'
import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-t border-neutral-200">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
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
          <a
            href="/assets/blog/CV/SAMANTHA HIGH Curriculum Vitae.pdf"
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            CV
          </a>
          <a
            href="/portfolio"
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            Portfolio
          </a>
          </div>
          <a
            href="https://github.com/SamanthaHighPhD/shphd.io/blob/main/LICENSE.md" 
            className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            © Samantha High {currentYear}
          </a>
        </div>
      </Container>

    </footer>
  )
}

export default Footer

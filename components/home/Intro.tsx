import Link from 'next/link'
import React from 'react'

export default function Intro() {
  return (
    <div id="learnmore" className="relative bg-white overflow-hidden">
      <div className="container">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 lg:max-w-2xl lg:w-full lg:pb-24 xl:pb-28">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          <main className="z-20 relative mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-left">
              <h1 className="tracking-tight font-bold text-gray-900 text-5xl md:text-6xl">
                <span className="block xl:inline">
                  We're not just another coding organization.
                </span>
              </h1>
              <p className="mt-3 text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 text-xl md:text-2xl lg:mx-0">
                At Project Tech Foundation, we strive to inspire the next
                generation of computer programming enthusiasts by offering
                creative CS programs for elementary, middle, and high school
                students.</p>
                
                <p className="mt-3 text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 text-xl md:text-2xl lg:mx-0">Through promoting cross-collaboration and friendly
                competition, our programs foster a passion for technology and
                equip future leaders with the skills necessary to make a
                positive impact in a fast-paced world, paving the way for
                promising careers in computer science, engineering, and
                technology.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/workshops">
                    <a className="trans-300 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-primary-main hover:bg-yei-primary-darker md:py-4 md:text-lg md:px-10">
                      Our Workshops
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/clubs/register">
                    <a className="trans-300 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yei-primary-darker bg-gray-200 hover:bg-gray-300 md:py-4 md:text-lg md:px-10">
                      Register A Club
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-gray-800"
          src="img/photos/lynbrook-lunch.png"
          alt="meeting"
        />
      </div>
    </div>
  )
}

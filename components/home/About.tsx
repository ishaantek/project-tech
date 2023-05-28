import React from 'react'
import Link from 'next/link'
import DoubleGridBg from './../utility/DoubleGridBg'

export default function About() {
  return (
    <div className="relative z-30 bg-gray-50 overflow-hidden">
      <DoubleGridBg />
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="tracking-tight font-bold text-gray-900  text-5xl md:text-6xl">
              <span className="block xl:inline">Project Tech </span>
              <span className="block text-yei-primary-main xl:inline">
                Clubs
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-gray-500 text-xl md:text-2xl md:mt-5 md:max-w-3xl">
              <b>
                The Project Tech Foundation offers students the opportunity to
                start their own Project Tech clubs in their schools to promote
                computer science.
              </b>{' '}
              Our team provides all the necessary resources and guidance for
              establishing a successful club, including a comprehensive
              curriculum, training materials, and ongoing support from
              experienced mentors. By joining the Project Tech network, students
              can connect with other clubs across the country to share ideas and
              collaborate on projects. Starting a Project Tech club is an
              excellent way for you to develop leadership skills, make a
              positive impact in your community, and inspire the next generation
              of tech enthusiasts.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/clubs">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-primary-main hover:bg-yei-primary-darker md:py-4 md:text-lg md:px-10 trans-300">
                    Learn More
                  </a>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/clubs/register">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yei-primary-main bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 trans-300">
                    Register A Club
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

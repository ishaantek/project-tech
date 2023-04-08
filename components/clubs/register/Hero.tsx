import React from 'react'
import DoubleGridBg from '../../utility/DoubleGridBg'

export default function Hero() {
  return (
    <div className="bg-yei-secondary-main relative pt-14 overflow-hidden">
      <DoubleGridBg color="text-gray-700" />
      <div className="z-10 relative container py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-yei-primary-main tracking-wide uppercase">
            Project Tech Clubs
          </h2>
          <p className="mt-1 text-4xl font-bold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Register a Club
          </p>
          <p className="max-w-xl mt-5 mx-auto text-2xl text-gray-400">
            Starting a Project Tech club is easy. Whether you're creating a new
            club or already have an existing one, you can get started right away
            by filling out our application form.
          </p>
        </div>
      </div>
    </div>
  )
}

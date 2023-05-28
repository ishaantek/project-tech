import React from 'react'

export default function Hero() {
  return (
    <>
      <div
        style={{ backgroundImage: 'url("/img/page-bg/clubs-bg.png")' }}
        className="bg-yei-secondary-blackVibrant relative overflow-hidden bg-cover bg-center pt-16"
      >
        <div className="z-10 relative container py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
          <p className="mt-1 font-bold text-white text-5xl sm:tracking-tight lg:text-6xl">
            Privacy Policy
          </p>
          <p className="max-w-xl mt-5 text-2xl sm:text-3xl text-gray-300">
            Your privacy matters to us - learn how Project Tech handles your
            personal information.
          </p>
        </div>
      </div>
    </>
  )
}
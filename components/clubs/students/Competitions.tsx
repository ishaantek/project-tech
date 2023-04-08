import React from 'react'
import DoubleGridBg from '../../utility/DoubleGridBg'
import Link from 'next/link'

const competitions = [
]

export default function Opportunities() {
  return (
    <div className="bg-white relative overflow-hidden">
      <DoubleGridBg color="text-gray-100" />
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <Competitions />
      </div>
    </div>
  )
}

function Competitions() {
  return (
    <>
      <h2 className="text-4xl text-center font-bold text-gray-900">
        Compete for Prizes
      </h2>
      <div className="flow-root mt-4 md:mt-7 lg:mt-8">
        <div className="flex flex-wrap sm:flex-row justify-center">
          {competitions.map((p) => {
            let key = p.name.replace(/[\W_]+/g, '-').toLowerCase()
            return (
              <div
                key={key}
                className="cursor-pointer mt-4 px-4 pt-6 lg:px-8 items-center flex"
              >
                <Link href={p.link}>
                  <img
                    className="my-2 sm:my-0 w-36 h-auto lg:w-48 mx-auto"
                    src={`/img/logos/${p.name}.png`}
                    alt={p.name}
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

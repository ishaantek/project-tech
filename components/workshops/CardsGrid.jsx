import React from 'react'
import workshops from '../../data/content/workshops'
import Link from 'next/link'

export default function CardsGrid() {
  return (
    <div className="bg-white relative overflow-hidden pt-16">
      <div className="mx-auto py-8 px-6 max-w-7xl sm:px-6 lg:px-8 lg:py-14">
        <div className="pb-8">
          <h2 className="font-extrabold tracking-tight text-5xl mb-4">
            CS Discovery Workshops
          </h2>
          <div className="text-gray-600 text-xl space-y-4">
            <p>
              Whether you’re an experienced programmer, or just dipping your
              toes into the world of computer science, Project Tech offers
              students from around the globe the opportunity to explore computer
              programming and technology topics throughout the summer
            </p>
            <p>
              Through our CS Discovery Workshops, students can access
              high-quality computer science classes that equip them with the
              skills and knowledge necessary for a successful career in this
              field. Our interactive sessions cater to all levels of learners,
              from beginners to advanced, and promote participation and
              collaboration.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-gray-300 overflow-hidden shadow divide-y divide-gray-300 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
          {workshops.map(({ title, content, href }) => (
            <div
              key={title}
              className=" bg-gray-100 relative group p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            >
              <div>
                <span className="rounded-lg inline-flex bg-green-50 text-green-700 ring-4 ring-white">
                  {/* Heroicon name: calendar */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold">
                  {href ? (
                    href.startsWith('/') ? (
                      <Link href={href}>
                        <a className="focus:outline-none" target="_blank">
                          {/* Extend touch target to entire panel */}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {title}
                        </a>
                      </Link>
                    ) : (
                      <a
                        href={href}
                        className="focus:outline-none"
                        target="_blank"
                      >
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        {title}
                      </a>
                    )
                  ) : (
                    <>{title}</>
                  )}
                </h3>
                <p className="mt-2 text-base text-gray-500">{content}</p>
              </div>
              {href && (
                <span
                  className="pointer-events-none trans-300 absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

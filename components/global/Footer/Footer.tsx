import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPaypal,
  faDiscord,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Column from './Column'

export default function Footer() {
  return (
    <footer
      className="bg-gray-800 z-20 relative"
      aria-labelledby="footerHeading"
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <Column
                  title="Workshops"
                  links={[
                    {
                      href: 'https://project-tech.org/workshops/',
                      name: '1',
                    },
                    {
                      href: 'https://project-tech.org/workshops/',
                      name: '2',
                    },
                    {
                      href: 'https://project-tech.org/workshops/',
                      name: 'All Workshops',
                    },
                  ]}
                />
              </div>
              <div className="mt-12 md:mt-0">
                <Column
                  title="Clubs"
                  links={[
                    { href: '/clubs/register', name: 'Register a Club' },
                    { href: '/clubs', name: 'Club Information' },
                  ]}
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <Column
                  title="Legal"
                  links={[
                    { href: '/legal/tos', name: 'Terms Of Service' },
                    { href: '/legal/privacy', name: 'Privacy Policy' },
                  ]}
                />
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Donate to Project Tech
                </h3>
                <p className="mt-4 text-base text-gray-300">
                  Project Tech Foundation is a 501(c)(3) non-profit
                  organization.
                </p>
                <div className="mt-4 rounded-md">
                  <form
                    action="https://ko-fi.com/ishaantek"
                    method="post"
                    target="_blank"
                  >
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      defaultValue="ishaantek"
                    />
                    <button
                      type="submit"
                      className="w-full trans-300 bg-yei-primary-main border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-yei-primary-darker focus:outline-none"
                    >
                      <FontAwesomeIcon
                        icon={faPaypal}
                        className="w-5 h-5 mr-2"
                      />
                      Donate
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {[
              {
                name: 'Email',
                icon: faEnvelope,
                href: 'mailto:contact@project-tech.org',
              },
              {
                name: 'Instagram',
                icon: faInstagram,
                href: 'https://www.instagram.com/projecttechorg/',
              },
              {
                name: 'Discord',
                icon: faDiscord,
                href: 'https://discord.gg/AFFYnNVXpZ',
              },
              {
                name: 'Twitter',
                icon: faTwitter,
                href: 'https://www.twitter.com/projecttechorg',
              },
            ].map((link) => (
              <a
                key={link.href}
                target="_blank"
                href={link.href}
                className="trans-300 text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{link.name}</span>
                <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            © 2023 Project Tech Foundation, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

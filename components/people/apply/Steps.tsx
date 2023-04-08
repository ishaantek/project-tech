import React from 'react'
import {
  faCheck,
  faCopy,
  faEnvelope,
  faPen,
} from '@fortawesome/free-solid-svg-icons'
import Step from './Step'

export default function Steps() {
  return (
    <div className="flow-root mx-auto">
      <ul>
        <Step icon={faCopy}>
          <p className="text-xl text-gray-500">
            Read the{' '}
            <a
              target="_blank"
              href="https://docs.google.com/document/"
              className="font-medium text-gray-900"
            >
              Project Tech leadership application packet
            </a>
          </p>
        </Step>
        <Step icon={faPen}>
          <p className="text-xl text-gray-500">
            Fill out the{' '}
            <a
              target="_blank"
              href="https://docs.google.com/forms/"
              className="font-medium text-gray-900"
            >
              leadership application
            </a>
          </p>
        </Step>
        <Step icon={faEnvelope}>
          <p className="text-xl text-gray-500">
            Email{' '}
            <a
              target="_blank"
              href="mailto:recruiting@project-tech.org"
              className="font-medium text-gray-900"
            >
              recruiting@project-tech.org
            </a>{' '}
            stating you have submitted an application
          </p>
        </Step>
        <Step icon={faCheck} lastStep color="yei-primary-main">
          <p className="text-xl text-gray-500">
            We'll get back to you as soon as possible
          </p>
        </Step>
      </ul>
      <p className="text-sm text-gray-500">
        Positions in the team are competitive. Your quality of submission in the
        application and interviewing abilities will be heavily considered in a
        final decision.
      </p>
    </div>
  )
}

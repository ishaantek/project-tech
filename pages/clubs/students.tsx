import React from 'react'
import Page from '../../components/utility/Page'
import CTA from '../../components/clubs/index/CTA'
import Hero from '../../components/clubs/students/Hero'
import Benefits from '../../components/clubs/students/Benefits'
import Competitions from '../../components/clubs/students/Competitions'
import Steps from '../../components/clubs/students/Steps'

export default function students() {
  return (
    <Page title="Clubs">
      <Hero />
      <div id="benefits">
        <Benefits />e
        <Competitions />
        <Steps />
        <CTA />
      </div>
    </Page>
  )
}

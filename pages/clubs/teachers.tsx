import React from 'react'
import Page from '../../components/utility/Page'
import CTA from '../../components/clubs/index/CTA'
import Hero from '../../components/clubs/teachers/Hero'
import Benefits from '../../components/clubs/teachers/Benefits'
import Opportunities from '../../components/clubs/teachers/Opportunities'

export default function students() {
  return (
    <Page
      title="Clubs"
    >
      <Hero />
      <div id="benefits">
        <Benefits />
        <Opportunities />
        <CTA />
      </div>
    </Page>
  )
}
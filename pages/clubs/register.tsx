import React from 'react'
import Application from '../../components/clubs/register/Application'
import Hero from '../../components/clubs/register/Hero'
import Page from '../../components/utility/Page'

export default function register() {
  return (
    <Page title="Register Your Club">
      <Hero />
      <Application />
    </Page>
  )
}

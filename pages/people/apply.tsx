import React, { useEffect } from 'react'
import Hero from '../../components/people/apply/Hero'
import Page from '../../components/utility/Page'

export default function apply() {
  useEffect(() => {
    localStorage.setItem('hideHiringModal', 'yes')
  }, [])
  return (
    <Page
      title="Apply"
     
    >
      <Hero />
    </Page>
  )
}

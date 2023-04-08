import CTA from '../components/home/CTA'
import Hero from '../components/home/Hero'
import Hiring from '../components/home/Hiring'
import Intro from '../components/home/Intro'
import Sponsors from '../components/home/Sponsors'
import Page from '../components/utility/Page'
import About from './../components/home/About'

export default function Home() {
  return (
    <Page
      fullTitle="Project Tech"

    >
      {/* <Hiring /> */}
      <Hero />
      <Intro />
      <About />
      <Sponsors />
      <CTA />
    </Page>
  )
}

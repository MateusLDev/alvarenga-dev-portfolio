import Card from '@/components/card'
import AboutMe from '@/components/aboutMe/'

import Hero from '@/components/hero'
import NavBar from '@/components/navbar'
import Carrer from '@/components/carrer/page'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-background-primary h-dvh">
      <NavBar />

      <div className="mt-36">
        <div className="container mx-auto">
          <Hero />
          <AboutMe />
          <Carrer />
        </div>

        <Footer />
      </div>
    </div>
  )
}

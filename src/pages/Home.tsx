import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import TypographySection from '../components/TypographySection'
import LogosSection from '../components/LogosSection'

export default function Home() {
  return (
    <div className="min-h-screen p-6 lg:p-12 max-w-7xl mx-auto">
      <Hero />

      <section id="second" className="mt-12">
        <div className="h-48 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center">
          Segunda seção (placeholder)
        </div>
      </section>

      <section id="carousel" className="mt-12">
        <Carousel />
      </section>

      <section id="typography" className="mt-12">
        <TypographySection />
      </section>

      <section id="logos" className="mt-12">
        <LogosSection />
      </section>
    </div>
  )
}

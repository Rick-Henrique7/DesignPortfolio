import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import TypographySection from '../components/TypographySection'
import { BentoGridDemo } from '../components/BentoGridDemo'

export default function Home() {
  return (
    <div className="min-h-screen p-6 lg:p-12 max-w-7xl mx-auto">
      <Hero />

      <section id="second" className="mt-12 px-2 sm:px-0">
       
      </section>

      <section id="brand-system" className="mt-12">
        <BentoGridDemo />
      </section>

      <section id="carousel" className="mt-12">
        <Carousel />
      </section>

      <section id="typography" className="mt-12">
        <TypographySection />
      </section>

      <section id="contact">
        <div className="w-full h-[80px] bg-[#c1e2f3] mt-10 rounded-xl text-center p-4 text-black">
          <h1><a href="https://www.instagram.com/blucreative.lab?igsh=M3RnYzZ2eWhxMWcw&utm_source=qr">Instagram: blucreative.lab</a></h1>
          <h1>
            Email:{' '}
            <a href="mailto:mandaabreu1935@gmail.com?subject=Olá Gostaria de solicitar um orçamento">
              mandaabreu1935@gmail.com
            </a>
          </h1>
        </div>
      </section>
    </div>
  )
}

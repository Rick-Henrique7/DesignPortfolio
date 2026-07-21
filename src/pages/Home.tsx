import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import TypographySection from '../components/TypographySection'
import LogosSection from '../components/LogosSection'
import { ThreeDCardDemo } from '../components/ui/3d-card'

export default function Home() {
  return (
    <div className="min-h-screen p-6 lg:p-12 max-w-7xl mx-auto">
      <Hero />

      <section id="second" className="mt-12 px-2 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 border-2 border-dashed pt-6 sm:pt-10 pb-6 sm:pb-10 rounded-xl place-items-center">
          <ThreeDCardDemo
            image="/src/assets/aumigo/aumigo-post-insta.jpeg"
            title="Brand Identity"
            description="Estratégia visual completa para sua marca "
          />
          <ThreeDCardDemo
            image="/src/assets/aumigo/aumigo-folheto.jpeg"
            title="Social Media Design"
            description="Design criativo para engajar seu público nas redes sociais"
          />
          <ThreeDCardDemo
            image="/src/assets/aumigo/aumigo-logo.jpeg"
            title="Logo Design"
            description="Marcas únicas e memoráveis que contam a sua história"
          />
          <ThreeDCardDemo
            image="/src/assets/aumigo/aumigo-logotipo.jpeg"
            title="Visual Identity"
            description="Identidade visual coesa para fortalecer seu posicionamento"
          />
          <ThreeDCardDemo
            image="/src/assets/aumigo/aumigo-tela.jpeg"
            title="Mockup Presentation"
            description="Apresentações realistas para impressionar seus clientes"
          />
          <ThreeDCardDemo
            image="/src/assets/aumigo/aumigo-camiseta.jpeg"
            title="Brand Applications"
            description="Aplicações práticas da sua marca em produtos e materiais"
          />
        </div>
      </section>

      <section id="carousel" className="mt-12">
        <Carousel />
      </section>

      <section id="typography" className="mt-12">
        <TypographySection />
      </section>

      
    </div>
  )
}

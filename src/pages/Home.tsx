import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import TypographySection from '../components/TypographySection'
import { BentoGridDemo } from '../components/BentoGridDemo'
import { RadialBackground } from '../components/ui/radial-background'

export default function Home() {
  return (
    <div className="min-h-screen p-6 lg:p-12 max-w-7xl mx-auto">
      <Hero />

      <section id="second" className="mt-12 px-2 sm:px-0">
        <div className="relative rounded-3xl border border-white/10 p-6 shadow-2xl shadow-black/20 overflow-hidden">
          <RadialBackground />
          <div className="relative z-10 mb-6 text-center ">
            <h1 className="text-sm uppercase tracking-[0.3em] text-slate-500 ">Sobre mim</h1>
            <h2 className="mt-2 text-3xl font-semibold text-gray-800">Tecnologias que transformam ideias</h2>
            <p className="text-gray-700 mt-8 w-3/4 mx-auto leading-relaxed text-lg"> Oi! Sou uma criativa movida por curiosidade, sensibilidade e pela constante busca de transformar ideias em experiências visuais memoráveis. Para mim, o design vai muito além da estética: é a ponte entre a funcionalidade e a emoção, o canal que dá voz a histórias e o cuidado em cada detalhe que transforma o simples em extraordinário.

              Tenho um olhar atento ao mundo ao meu redor — apaixonada por explorar novas tendências, brincar com combinações de cores, testar tipografias e entender como o impacto visual transforma a forma como as pessoas se conectam com marcas e produtos. Adoro todo o processo criativo, desde o caos inicial das referências até o refinamento final de um projeto.

              Estou sempre em busca de novos desafios, aprendizados e oportunidades para criar coisas com propósito, personalidade e um toque de originalidade.</p>
          </div>

        </div>
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
        <div className="w-full bg-[#c1e2f3] mt-10 rounded-xl text-center p-4 sm:p-6 text-black flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <a
            href="https://www.instagram.com/blucreative.lab?igsh=M3RnYzZ2eWhxMWcw&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <InstagramIcon fontSize="large" />
            <span className="text-lg font-medium">blucreative.lab</span>
          </a>
          <a
            href="mailto:mandaabreu1935@gmail.com?subject=Olá Gostaria de solicitar um orçamento"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <EmailIcon fontSize="large" />
            <span className="text-lg font-medium">mandaabreu1935@gmail.com</span>
          </a>
        </div>
      </section>
    </div>
  )
}
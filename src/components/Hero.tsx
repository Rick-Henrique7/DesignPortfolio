import React from 'react'
import GradientText from './GradientText'

export default function Hero() {
  return (
    <section aria-label="hero" className="w-full">
    <div className="grid grid-cols-1 mb-4 gap-6">
        <div className="bg-card-bg rounded-2xl p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[140px] sm:min-h-[120px] md:min-h-[140px]">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-normal tracking-tight text-text-primary flex items-center text-center" style={{ fontFamily: 'Emmeline, sans-serif' }}>
              <GradientText text="Amanda Abreu - Designer Gráfica" />
            </h1>
          </div>
    </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid grid-rows-2 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] gap-4 sm:gap-6">
            <div className="bg-card-bg rounded-2xl p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl italic text-text-primary text-center">Transforme suas ideias em realidade</h2>
            </div>
            <div className="bg-card-bg rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
              <img src="/src/assets/imagem-1.jpeg" alt="Amanda Abreu" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card-bg rounded-2xl flex items-end p-4 sm:p-6 min-h-[120px] sm:min-h-[140px]">
              <p className="text-text-primary text-base sm:text-lg font-normal">Criatividade e inovação caminham juntas para construir o futuro.</p>
            </div>
            <div className="bg-button-bg rounded-2xl p-4 sm:p-6 min-h-[120px] sm:min-h-[140px] flex items-end">
              <p className="text-text-primary text-base sm:text-lg font-bold tracking-tight">Entre em contato e descubra mais.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-card-bg rounded-2xl p-0 overflow-hidden h-full">
            <img src="/src/assets/imagem-2.jpeg" alt="Destaque" className="w-full h-full object-cover" />
          </div>

          <div className="bg-card-bg rounded-2xl p-4">
            <Musea />
          </div>

          
        </div>
      </div>
    </section>
  )
}

function Musea() {
  return (
    <nav aria-label="musea" className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text-primary">Musea</h3>
        <a href="#" className="text-sm text-text-primary">↗</a>
      </div>

      <ul className="space-y-3">
        <li>
          <a href="#elara" className="block p-3 rounded-md text-text-primary font-medium uppercase tracking-wider hover:bg-pattern/30">PROJECTS</a>
        </li>
        <li>
          <a href="#verve" className="block p-3 rounded-md text-text-primary font-medium uppercase tracking-wider hover:bg-pattern/30">INSTAGRAM</a>
        </li>
        <li>
          <a href="#zephyr" className="block p-3 rounded-md text-text-primary font-medium uppercase tracking-wider hover:bg-pattern/30">CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}
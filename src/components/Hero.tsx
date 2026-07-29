import React from 'react'
import GradientText from './GradientText'

export default function Hero() {
  return (
    <section aria-label="hero" className="w-full">
    <div className="grid grid-cols-1 mb-4 gap-6">
        <div className=" rounded-2xl p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[140px] sm:min-h-[120px] md:min-h-[140px] mb-10">
            <h1 className="flex-col text-5xl sm:text-xl md:text-8xl font-normal tracking-tight text-text-primary flex items-center text-center" style={{ fontFamily: 'Emmeline, sans-serif' }}>
              <h1 className="text-7xl sm:text-7xl md:text-9xl ">Amanda Abreu <br></br> Designer Gráfica </h1>
    
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-playwrite text-text-primary" style={{ wordSpacing: '0.25em' }}>Crio identidades visuais que transformam ideias em marcas memoráveis</p>
            </h1>
          </div>
    </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid grid-rows-2 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] gap-4 sm:gap-6">
            <div className="bg-card-bg rounded-2xl p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl italic text-text-primary text-center">Transforme suas ideias em realidade</h2>
            </div>
            <div className="bg-red rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
              <img src="/src/assets/imagem-1.jpeg" alt="Amanda Abreu" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card-bg rounded-2xl p-0 overflow-hidden min-h-[120px] sm:min-h-[140px] relative">
              <img src="/src/assets/logo-iceberg.jpeg" alt="Iceberg Logo" className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <p className="absolute bottom-0 left-0 p-4 text-white text-base sm:text-lg font-normal font-playwrite z-10" style={{ wordSpacing: '0.25em' }}>Criatividade e inovação caminham juntas para construir o futuro.</p>
            </div>
            <div className="bg-[#27b3a0] rounded-2xl p-0 overflow-hidden min-h-[240px] sm:min-h-[140px] relative">
              <img src="/src/assets/amanda.jpeg" alt="Amanda Abreu" className="w-full h-full object-cover border-4 rounded-[100%] border-dashed border-black absolute inset-0 rotate-[60deg]" />
              {/* Vector - Top Right */}
              <img src="/src/assets/vetores/flowers-svgrepo-com.svg" alt="" className="absolute top-0 right-0 w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 m-4 object-contain pointer-events-none" />
              {/* Vector - Bottom Left */}
              <img src="/src/assets/vetores/flowers-svgrepo-com.svg" alt="" className="absolute bottom-0 left-0 w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 m-4 object-contain pointer-events-none" />
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
          <a href="#carousel" className="block p-3 rounded-md text-text-primary font-medium uppercase tracking-wider hover:bg-pattern/30">CARROSSEL</a>
        </li>
        <li>
          <a href="#brand-system" className="block p-3 rounded-md text-text-primary font-medium uppercase tracking-wider hover:bg-pattern/30">CRIAÇÃO DE MARCA</a>
        </li>
        <li>
          <a href="#contact" className="block p-3 rounded-md text-text-primary font-medium uppercase tracking-wider hover:bg-pattern/30">CONTATO</a>
        </li>
      </ul>
    </nav>
  )
}
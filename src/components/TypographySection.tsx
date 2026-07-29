import React from 'react'
import imagem12 from '@/assets/imagem-12.jpeg'
import imagem13 from '@/assets/imagem-13.jpeg'
import imagem14 from '@/assets/imagem-14.jpeg'
import imagem15 from '@/assets/imagem-15.jpeg'

export default function TypographySection() {
  // Dados dos projetos para manter o código limpo e fácil de dar manutenção
  const projects = [
    {
      id: 1,
      title: "Pins & Mídias Físicas",
      description: "Desenvolvimento de material promocional tátil para fixação de marca em eventos e pontos de contato diretos.",
      image: imagem12,
      alt: "Pins personalizados Blu Creative Lab"
    },
    {
      id: 2,
      title: "Tote Bags & Identidade Têxtil",
      description: "Aplicação da tipografia em ecobags, trazendo a marca para o dia a dia do cliente de forma orgânica e sustentável.",
      image: imagem13,
      alt: "Sacola de pano Lumi Blu"
    },
    {
      id: 3,
      title: "Logotipo Versão Dark",
      description: "Variação do símbolo principal em fundo contrastante, otimizado para telas, ícones de aplicativo e redes sociais.",
      image: imagem14,
      alt: "Logo Lumi Blu Studios em fundo escuro"
    },
    {
      id: 4,
      title: "Tipografia & Paleta Editorial",
      description: "Composição de marca em tons pastéis e terrosos, focada em passar elegância, clareza e um visual minimalista.",
      image: imagem15,
      alt: "Logo Lumi Blu Studios em fundo bege"
    }
  ]

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12 space-y-16 sm:space-y-24">
      {projects.map((project, index) => {
        // Verifica se o índice é ímpar para inverter a ordem (imagem à direita)
        const isEven = index % 2 === 0;

        return (
          <div 
            key={project.id} 
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
              !isEven ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Lado da Foto */}
            <div className="w-full md:w-1/2">
              <div className="h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100/80 bg-white">
                <img 
                  src={project.image} 
                  alt={project.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Lado do Texto */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-3 px-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                0{index + 1} / Projeto
              </span>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  )
}
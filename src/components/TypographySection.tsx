import React from 'react'

export default function TypographySection() {
  return (
    <div className="rounded-2xl border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4 flex justify-center mb-10">Tipografias & Logotipos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="h-48 sm:h-64 rounded overflow-hidden">
          <img src="/src/assets/imagem-12.jpeg" alt="Tipografia 1" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 sm:h-64 rounded overflow-hidden">
          <img src="/src/assets/imagem-13.jpeg" alt="Tipografia 2" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 sm:h-64 rounded overflow-hidden">
          <img src="/src/assets/imagem-14.jpeg" alt="Tipografia 3" className="w-full h-full object-cover" />
        </div>
        <div className="h-48 sm:h-64 rounded overflow-hidden">
          <img src="/src/assets/imagem-15.jpeg" alt="Tipografia 4" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

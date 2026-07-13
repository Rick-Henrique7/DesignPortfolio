import React from 'react'

export default function LogosSection() {
  return (
    <div className="rounded-2xl border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4">Logotipos</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-28 rounded overflow-hidden">
          <img src="/src/assets/imagem-14.jpeg" alt="Logotipo 1" className="w-full h-full object-cover" />
        </div>
        <div className="h-28 rounded overflow-hidden">
          <img src="/src/assets/imagem-15.jpeg" alt="Logotipo 2" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

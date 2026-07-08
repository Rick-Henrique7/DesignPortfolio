import React from 'react'

export default function TypographySection() {
  return (
    <div className="rounded-2xl border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4">Tipografias</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="h-24 bg-gray-50 rounded" />
        <div className="h-24 bg-gray-50 rounded" />
        <div className="h-24 bg-gray-50 rounded" />
        <div className="h-24 bg-gray-50 rounded" />
      </div>
    </div>
  )
}

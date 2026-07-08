import React from 'react'

export default function LogosSection() {
  return (
    <div className="rounded-2xl border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4">Logotipos</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-20 bg-gray-50 rounded" />
        <div className="h-20 bg-gray-50 rounded" />
        <div className="h-20 bg-gray-50 rounded" />
      </div>
    </div>
  )
}

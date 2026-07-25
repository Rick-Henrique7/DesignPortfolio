import React from 'react'
import Home from './pages/Home'
import Waves from './components/Waves'

export default function App() {
  return (
    <>
      <Waves
        lineColor="#c1e2f3"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <div className="relative z-10">
        <Home />
      </div>
    </>
  )
}

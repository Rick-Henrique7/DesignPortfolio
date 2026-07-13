import React from 'react'
import Home from './pages/Home'
import { StarfieldBackground } from './components/StarfieldBackground'

export default function App() {
  return (
    <StarfieldBackground starColor="#aaccff" speed={0.3}>
      <Home />
    </StarfieldBackground>
  )
}

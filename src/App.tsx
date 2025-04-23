import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import Slider from './Componets/Slider'
import ProductionHouse from './Componets/ProductionHouse'
function App() {
  const [] = useState(0)
  return (
    <div className='w-[100%] h-[100vh] bg-black text-white'>
      <Header />

      <Slider/>
      <ProductionHouse/>
    </div>
  )
}

export default App

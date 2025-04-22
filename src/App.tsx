import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
function App() {
  const [] = useState(0)
  return (
    <div className='w-[100%] h-[100vh] bg-black text-white'>
      <Header />
    </div>
  )
}

export default App

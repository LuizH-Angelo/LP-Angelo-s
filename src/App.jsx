import { useState } from 'react'
import './App.css'  
import NavBar from './components/NavBar'
import QuemSomos from './components/QuemSomos'
import Profissionais from './components/Profissionais'
import Planos from './components/Planos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <QuemSomos/>
      <Profissionais/>
      <Planos/>
    </>
  )
}

export default App
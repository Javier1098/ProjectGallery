import { useState } from 'react'
import './App.css'
import { Casquito1 } from './Components/Casquito1'
import { Casquito2 } from './Components/Casquito2'
import { Casquito3 } from './Components/Casquito3'
import { Casquito4 } from './Components/Casquito4'
import { Casquito5 } from './Components/Casquito5'
import { Casquito6 } from './Components/Casquito6'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Casquito1 />
      <Casquito2 />
      <Casquito3 />
      <Casquito4 />
      <Casquito5 />
      <Casquito6 />
    </>
  )
}

export default App

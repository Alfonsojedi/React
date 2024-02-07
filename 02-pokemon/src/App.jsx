import { useState } from 'react'
import './index.css'
import PokeNav from './components/PokeNav'
import Reacting from './components/Reacting'
import PokeCard from './components/PokeCard'
import CardGrid from './components/CardGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PokeNav></PokeNav>
      <main>
        <CardGrid></CardGrid>
      </main>
    </>
  )
}

export default App

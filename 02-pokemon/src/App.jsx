import { useState } from 'react'
import './index.css'
import PokeNav from './components/PokeNav'
import Reacting from './components/Reacting'
import PokeCard from './components/PokeCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Reacting></Reacting>
      <main>
        <PokeCard></PokeCard>
      </main>
    </>
  )
}

export default App

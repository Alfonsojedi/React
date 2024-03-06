import { useEffect, useState } from 'react'
import './index.css'
import PokeNav from './components/PokeNav'
import Reacting from './components/Reacting'
import PokeCard from './components/PokeCard'
import CardGrid from './components/CardGrid'
import PokeFaker from './components/PokeFaker'
import PokeFaker2 from './components/PokeFaker2'
import PokeFull from './components/PokeFull'

function App() {
  const [pokemon] = useState(PokeFaker2())
  /*
  useEffect(
    async() => {
      const response = await fetch(url)//use the url to get data from the API
      const result = await response.json()
      console.log(result)
    }
  )
  */
  
  return (
    <>
      <PokeNav></PokeNav>
      <main>
        <PokeFull pokemon={pokemon}></PokeFull>
        <CardGrid></CardGrid>
        <CardGrid></CardGrid>
      </main>
    </>
  )
}

export default App

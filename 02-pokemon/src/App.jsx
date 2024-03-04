import { useEffect, useState } from 'react'
import './index.css'
import PokeNav from './components/PokeNav'
import Reacting from './components/Reacting'
import PokeCard from './components/PokeCard'
import CardGrid from './components/CardGrid'
import PokeFaker from './components/PokeFaker'

function App() {
  const [count, setCount] = useState(0)
  const url = "https://pokeapi.co/api/v2/pokemon/1"
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
        <CardGrid></CardGrid>
        <CardGrid></CardGrid>
      </main>
    </>
  )
}

export default App

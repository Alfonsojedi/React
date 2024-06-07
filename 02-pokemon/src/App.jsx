import { useEffect, useState } from 'react'
import './index.css'
import PokeNav from './components/PokeNav'
import Reacting from './components/Reacting'
import PokeCard from './components/PokeCard'
import CardGrid from './components/CardGrid'
import PokeFull from './components/PokeFull'

const response = await fetch("https://pokeapi.co/api/v2/pokemon/3");
const result = await response.json()
console.log(result)

function App() {
  let pokemon = result
  let pokemons = [result,result,result]
  
  return (
    <>
      <PokeNav></PokeNav>
      <main>
        <PokeFull pokemon={pokemon}></PokeFull>
        <CardGrid pokemons={pokemons}></CardGrid>
        <CardGrid pokemons={pokemons}></CardGrid>
      </main>
    </>
  )
}

export default App

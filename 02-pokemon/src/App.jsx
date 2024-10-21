import { useEffect, useState } from 'react'
import './index.css'
import PokeNav from './components/PokeNav'
import Reacting from './components/Reacting'
import PokeCard from './components/PokeCard'
import CardGrid from './components/CardGrid'
import PokeFull from './components/PokeFull'

const response = await fetch("https://pokeapi.co/api/v2/pokemon/3");
const result = await response.json()
/*
async function fetchPoke(id){
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
  return await response.json()
}
const result = fetchPoke(3);
console.log(result)
*/

function App() {
  let pokemon = result
  let pokemons = [result,result,result,result]
  
  return (
    <>
      <PokeNav></PokeNav>
      <main>
        <PokeFull pokemon={pokemon}></PokeFull>
        <CardGrid pokemons={pokemons}></CardGrid>
      </main>
    </>
  )
}

export default App

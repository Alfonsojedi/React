import { useEffect, useState } from 'react'
import './index.css'
import PokeNav from './components/PokeNav'
import Reacting from './components/Reacting'
import PokeCard from './components/PokeCard'
import CardGrid from './components/CardGrid'
import PokeFull from './components/PokeFull'

async function Pokemon(url){//await only works on async functions
  let response = await fetch(url);//use the url to get data from the API
  let result = await response.json()//Convert the data into usable JSON
  return result
}
async function PokemonRegion(region){
  //Saltar paso A si tienes el número
  //region can be string and it works too
  let response = await fetch("https://pokeapi.co/api/v2/region/"+region);//use the url to get data from the API
  let result = await response.json()

  //En gen 9,10 u 11+ este code daría error
  response = await fetch(result.main_generation.url)
  result = await response.json()
  let pokeurls = [];
  result.pokemon_species.map(pokeobject => {
    pokeurls.push(pokeobject.url.replace('-species',''))
  })
  return pokeurls
}

let pokelist=[]
try{
  const urls = await PokemonRegion(1)
  pokelist = await Promise.all(urls.map(async url => await Pokemon(url)))
  console.log(pokelist)
}catch(error){
  console.log(error)
}
function App() {
  const [regiones, getRegiones] = useState(["0","1","2"])
  let pokemon = pokelist[0]
  let pokemons = pokelist
  
  return (
    <>
      <header>
        <PokeNav></PokeNav>
      </header>
      <main>
        <PokeFull pokemon={pokemon}></PokeFull>
      </main>
      <CardGrid pokemons={pokemons}></CardGrid>
    </>
  )
}

export default App

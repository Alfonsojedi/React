import { useEffect, useState } from 'react'
import './index.css'
import PokeNav from './components/PokeNav'
import CardGrid from './components/CardGrid'
import PokeFull from './components/PokeFull'
import {fetchAPI,pokeRegion,start} from './utils/fn.js'
/*
async function fetchAPI(url){
  return (await fetch(url)).json();
}
async function PokeRegion(region){
  //Saltar paso A si tienes el número
  //region can be string and it works too
  let result = await fetchAPI("https://pokeapi.co/api/v2/region/"+region);//use the url to get data from the API
  //En gen 9,10 u 11+ este code daría error
  result = await fetchAPI(result.main_generation.url)
  let pokeurls = [];
  result.pokemon_species.map(url => {
    pokeurls.push(url.url.replace('-species',''))
  })
  return pokeurls
}
*/
let pokelist = await start()
function App() {
  const [regiones, setRegiones] = useState(["Kanto","Jotho","Hoenn"])
  //setRegiones(regions)
  let pokemons = pokelist
  let pokemon = pokelist[0]
  return (
    <>
      <header>
        <PokeNav regiones={regiones}></PokeNav>
      </header>
      <main>
        <PokeFull pokemon={pokemon}></PokeFull>
      </main>
      <CardGrid pokemons={pokemons}></CardGrid>
    </>
  )
}

export default App
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
  console.log("ye")

}catch(error){
  console.log(error)
}
//Unused
/*
async function regionsFetch(){
  let response = await fetch("https://pokeapi.co/api/v2/region");
  let regions = await response.json();
  let regiones = [];
  regions.results.foreach(region => {
    regiones.push(region.name);
  })
  return regiones;
}
async function getEvos(id){
    let cadena =await getChain(id)
    return evoMaker(cadena.chain)
}
async function getChain(id) {
    let response
    let result
    //Fetching the chain
    response = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + id);
    result = await response.json();
    id = result.evolution_chain.url.slice(42, result.evolution_chain.url.length - 1)

    //Fetching the Pókemons involved
    response = await fetch("https://pokeapi.co/api/v2/evolution-chain/" + id);
    result = await response.json();
    return result;
}
function evoMaker(cadena){
  let evos = []
  evos.push(cadena.species.name)
  //Bucles foreach... HACER Función loop aquí

  cadena.evolves_to.map(evo => {
    evos.push(evo.species.name)
    evo.evolves_to.map(evo2 => {
      evos.push(evo2.species.name)
    })
  })
  console.log(evos)
  return evos
}
*/
function App() {
  const [regiones, getRegiones] = useState(["0","1","2"])
  let pokemon = pokelist[0]
  let pokemons = pokelist
  
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

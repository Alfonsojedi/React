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

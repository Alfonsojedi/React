import { useState } from 'react'
import PokeCard from './PokeCard'

export function CardGrid({pokemons}){
   return(
      <div className='row px-3'>{pokemons.map(poke => {
         return <PokeCard key={poke.id} pokemon={poke}></PokeCard>
      })}</div>
   )
}

export default CardGrid

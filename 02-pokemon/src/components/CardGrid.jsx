//Usar este componente para reducir el App.jsx
import { useState } from 'react'
import PokeCard from './PokeCard'

export function CardGrid ({pokemons}){
    try{
        pokemon[1]
    }
    catch{
        return(
            <div className='row px-5 pt-1'>
                <PokeCard pokemon={pokemons[0]}></PokeCard>
            </div>
        )
    }
    try{
        pokemons[2]
    }
    catch{
        return(
            <div className='row px-5 pt-1'>
                <PokeCard pokemon={pokemons[0]}></PokeCard>
                <PokeCard pokemon={pokemons[1]}></PokeCard>
            </div>
        )
    }

    return(
        <div className='row px-5 pt-1'>
            <PokeCard pokemon={pokemons[0]}></PokeCard>
            <PokeCard pokemon={pokemons[1]}></PokeCard>
            <PokeCard pokemon={pokemons[2]}></PokeCard>
        </div>
    )
}

export default CardGrid
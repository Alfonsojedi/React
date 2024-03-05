//Usar este componente para reducir el App.jsx
import { useState } from 'react'
import PokeCard from './PokeCard'
import PokeFaker from './PokeFaker'
import PokeFaker2 from './PokeFaker2'

export function CardGrid (){

    return(
        <div className='row px-5 pt-1'>
            <PokeCard pokemon={PokeFaker()}></PokeCard>
            <PokeCard pokemon={PokeFaker2()}></PokeCard>
            <PokeCard pokemon={PokeFaker()}></PokeCard>
        </div>
    )
}

export default CardGrid
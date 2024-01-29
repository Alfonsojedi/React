//Usar este componente para reducir el App.jsx
import { useState } from 'react'
import PokeCard from './PokeCard'

export function CardGrid (){
    return(
        <div className='row px-5 pt-1'>
            <PokeCard></PokeCard>
            <PokeCard></PokeCard>
            <PokeCard></PokeCard>
        </div>
    )
}

export default CardGrid
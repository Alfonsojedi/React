//Usar este componente para reducir el App.jsx
import { useState } from 'react'
import PokeCard from './PokeCard'

export function CardGrid (){
    const pokemon1 = {
        name: "Charmander",
        hp: "39",
        atk: "52",
        dfs: "43",
        spatk: "60",
        spdfs: "50",
        spd: "65"
    }
    const pokemon2 = {
        name: "Charmeleon",
        hp: "58",
        atk: "64",
        dfs: "58",
        spatk: "80",
        spdfs: "65",
        spd: "80"
    }
    const pokemon3 = {
        name: "Charizard",
        hp: "78",
        atk: "84",
        dfs: "78",
        spatk: "109",
        spdfs: "85",
        spd: "100"
    }
    return(
        <div className='row px-5 pt-1'>
            <PokeCard pokemon={pokemon1}></PokeCard>
            <PokeCard pokemon={pokemon2}></PokeCard>
            <PokeCard pokemon={pokemon3}></PokeCard>
        </div>
    )
}

export default CardGrid
import { useState } from 'react'
import ProgressBar from './ProgressBar'

export function PokeCard(){
  const pokemon = {
    name: "Charizard",
    hp: "80",
    atk: "110",
    dfs: "70",
    spatk: "100",
    spdfs: "65",
    spd: "105"
  }
  return(
    <div className='col-4 p-2'>
        <div className="card">
            <div className='card-header'>
            <div className='row'>
                <div className='col type fire'>
                    Fire
                </div>
                <div className='col type flying'>
                    Flying
                </div>
            </div>
            </div>
            <div className='card-main'>
            <h5 className='card-title'>{pokemon.name}</h5>
            <div className='p-1'>
                <ProgressBar amount={pokemon.hp} stat={"HP"}></ProgressBar>
                <ProgressBar amount={pokemon.atk} stat={"Atk"}></ProgressBar>
                <ProgressBar amount={pokemon.dfs} stat={"Dfs"}></ProgressBar>
                <ProgressBar amount={pokemon.spatk} stat={"SpAtk"}></ProgressBar>
                <ProgressBar amount={pokemon.spdfs} stat={"SpDfs"}></ProgressBar>
                <ProgressBar amount={pokemon.spd} stat={"Spd"}></ProgressBar>
            </div>
            <a href="#" class="btn btn-primary">See {pokemon.name}</a>
            </div>

        </div>
    </div>
  )
}
export default PokeCard
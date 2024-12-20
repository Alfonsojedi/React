import { useState } from 'react'
import Type from './Type'
import Stater from './Stater'
import Weighter from './Weighter'

export function PokeCard({pokemon}){
  const pokeid=(pokemon.id>99?(pokemon.id>999?pokemon.id:"0"+pokemon.id):(pokemon.id>9?"00"+pokemon.id:"000"+pokemon.id))
  let color1=pokemon.types[0]["type"]["name"]
  let color2=(pokemon.types[1] ? pokemon.types[1]["type"]["name"]:color1)
  return(
    <div className='col-4 my-1 px-3'>
      <div className='card'>
        <div className={"card-header "+color1+"card"}>
          <div className='row'>
            {pokemon.types.map(element => {
              return <Type key={element["type"]["name"]} type={element["type"]["name"]}></Type>
            })}
          </div>
          <div className='row'>
            <img className='w-100' src={pokemon.sprites.front_default}></img>
            <Weighter height={pokemon.height} weight={pokemon.weight}></Weighter>
          </div>
        </div>
        <div className={"card-main "+color2+"card"}>
          <h5 className='card-title ps-1 pt-1'>{pokemon.name.toUpperCase()}:</h5>
          <Stater stats={pokemon.stats}></Stater>
        </div>
      </div>
    </div>
  )
}
export default PokeCard

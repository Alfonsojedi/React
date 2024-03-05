import { useState } from 'react'
import ProgressBar from './ProgressBar'
import Type from './Type'

export function PokeCard({pokemon}){
  try{
    pokemon
}catch{
    return(<></>)
}
const pokeid= (pokemon.id>99?(pokemon.id>999?pokemon.id:"0"+pokemon.id):(pokemon.id>9?"00"+pokemon.id:"000"+pokemon.id))
let type1=false
let skill1=false
let skill2=false
let color1=pokemon.types[0]["type"]["name"]
let color2="normal"
let total=0
for (let i=0;i<6;i++){
    total+=pokemon.stats[i]["base_stat"]
}
try{
    color2= pokemon.types[1]["type"]["name"]
}catch{
    
}
try{
    pokemon.types[1]["type"]["name"]
    type1=true
}catch{

}
try{
    pokemon.types[1]["type"]["name"]
    skill1=true
    pokemon.types[2]["type"]["name"]
    skill2=true
}catch{
    
}
  return(
    <div className='col-4 p-2'>
      <div className='card'>
        <div className={"card-header "+color1+"card"}>
          <div className='row'>
            <Type type={pokemon.types[0]["type"]["name"]}></Type>
            {type1 ?
            <Type type={pokemon.types[1]["type"]["name"]}></Type>:<></>}
          </div>
          <div className='row'>
          <img className='w-100' src={pokemon.sprites.front_default}></img>
          <div className='row aling center'>
              <div className="col-12 col-md-5 mb-1">Altura: <span className="kindatrans">{pokemon.height/10}</span>m</div>
              <div className="col-12 col-md-5 mb-1">Peso: <span className="kindatrans">{pokemon.weight/10}</span>kg</div>
          </div>
          </div>
        </div>
        <div className={"card-main "+color2+"card"}>
          <h5 className='card-title ps-1 pt-1'>{pokemon.name}</h5>
          <div className='p-1'>
            <ProgressBar amount={pokemon.stats[0]["base_stat"]} stat={"HP"}></ProgressBar>
            <ProgressBar amount={pokemon.stats[1]["base_stat"]} stat={"Atk"}></ProgressBar>
            <ProgressBar amount={pokemon.stats[2]["base_stat"]} stat={"Dfs"}></ProgressBar>
            <ProgressBar amount={pokemon.stats[3]["base_stat"]} stat={"SpAtk"}></ProgressBar>
            <ProgressBar amount={pokemon.stats[4]["base_stat"]} stat={"SpDfs"}></ProgressBar>
            <ProgressBar amount={pokemon.stats[5]["base_stat"]} stat={"Spd"}></ProgressBar>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PokeCard
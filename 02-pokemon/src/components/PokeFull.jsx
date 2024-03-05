import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Type from "./Type";

export function PokeFull({pokemon}){
    //Checkear en un bucle si pokemon.stats[1] existe, si no, crear otro return
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
        <div className='row m-2 aling center'>
            <div className='col-10 col-md-9'>
                <div className='card'>
                    <div className={"card-header "+color1+"card"}>
                        <div className="row mt-1">
                            <div className="col-6 icecard radius aling center">
                                <img className='w-100' src={pokemon.sprites.front_default}></img>
                                <div className='row'>
                                <Type type={pokemon.types[0]["type"]["name"]}></Type>
                                {type1 ?
                                <Type type={pokemon.types[1]["type"]["name"]}></Type>:<></>}
                            </div>
                        </div>
                        <div className="col-6">
                            <p>Altura: <span className="kindatrans">{pokemon.height/10}</span>m</p>
                            <p>Peso: <span className="kindatrans">{pokemon.weight/10}</span>kg</p>
                            <ProgressBar amount={pokemon.stats[0]["base_stat"]} stat={"HP"}></ProgressBar>
                        <ProgressBar amount={pokemon.stats[1]["base_stat"]} stat={"Atk"}></ProgressBar>
                        <ProgressBar amount={pokemon.stats[2]["base_stat"]} stat={"Dfs"}></ProgressBar>
                        <ProgressBar amount={pokemon.stats[3]["base_stat"]} stat={"SpAtk"}></ProgressBar>
                        <ProgressBar amount={pokemon.stats[4]["base_stat"]} stat={"SpDfs"}></ProgressBar>
                        <ProgressBar amount={pokemon.stats[5]["base_stat"]} stat={"Spd"}></ProgressBar>
                            <p>Habilidades:</p>
                            <ol>
                                <li>{pokemon.abilities[0]["ability"]["name"]}</li>
                                {skill1 ?
                                <li>{pokemon.abilities[1]["ability"]["name"]}</li>:<></>}
                                {skill2 ?
                                <li>{pokemon.abilities[2]["ability"]["name"]}</li>:<></>}
                            </ol>
                            <p>Zona de captura:</p>
                            <p>¿Cadena evolutiva?</p>
                        </div>
                    </div>
                    </div>
                    <div className={"card-main "+color2+"card"}>
                        <h5 className='card-title'>Nº{pokeid}: {pokemon.species.name.toUpperCase()}</h5>
                        <div className='p-1'>
                            <p>Descripción del pokémon</p>
                            <p>¿Cadena evolutiva?</p>
                            <p>¿Lista de movimientos del pokemon?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeFull
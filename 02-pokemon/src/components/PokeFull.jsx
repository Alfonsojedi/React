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
                    <div className="card-header bg-danger">
                        <div className="row mt-1">
                            <div className="col-5">
                                <div className="icecard radius aling center p-1">
                                <img className='w-100' src={pokemon.sprites.front_default}></img>
                                <div className='row'>
                                <Type type={pokemon.types[0]["type"]["name"]}></Type>
                                {type1 ?
                                <Type type={pokemon.types[1]["type"]["name"]}></Type>:<></>}
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className={"radius p-1 "+color1+"card"}>
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
                            <p>Cadena evolutiva:</p>
                            <p className="kindatrans">Bulvasaur||Ivysaur||Venosaur</p>
                            <p className="kindatrans">Bulvasaur||Snorlax</p>
                            <p>Zona de captura:</p>
                            <p className="kindatrans">{pokemon.location_area_encounters}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={"card-main p-1 bg-danger"}>
                        <h5 className='card-title'>Nº{pokeid}: {pokemon.species.name.toUpperCase()}</h5>
                        <div className="row ps-3">
                            <div className={"border radius "+color2+"card p-1 col-9 col-md-10"}>
                                <p>Descripción:</p>
                                <p>Lista de movimientos:</p>
                                <p>Pound | level:1 | type:normal</p>
                            </div>
                            <div className="col-3 col-md-2">
                                <p>+</p>
                                <p>-</p>
                                <p className="kindatrans">Alfj</p>
                                <p>: : :</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeFull
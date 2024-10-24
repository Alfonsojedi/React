import { useState } from "react";
import Stater from "./Stater";
import Type from "./Type";
import { Weighter } from "./Weighter";

export function PokeFull({pokemon}){
    //Checkear en un bucle si pokemon.stats[1] existe, si no, crear otro return
    //fetch(v2/evolution-chain/{pokemonid})
    let evos = ["Bulvasaur","Ivysaur","Venosaur"]
    if(!pokemon){
        return(<></>)
    }
    const pokeid= (pokemon.id>99?(pokemon.id>999?pokemon.id:"0"+pokemon.id):(pokemon.id>9?"00"+pokemon.id:"000"+pokemon.id))
    let color1=pokemon.types[0]["type"]["name"]
    let color2
    let total=0
    for (let i=0;i<6;i++){
        total+=pokemon.stats[i]["base_stat"]
    }
    if(pokemon.types[1]){
        color2=pokemon.types[1]["type"]["name"]
    }else{
        color2=pokemon.types[0]["type"]["name"]
    }
    return(
        <div className='row m-2 aling center'>
            <div className='col-11'>
                <div className='card'>
                    <div className="card-header bg-danger">
                        <div className="row mt-1">
                            <div className="col-5">
                                <div className="watercard radius aling center p-1">
                                    <h4 className="aligntext ">{pokemon.species.name.toUpperCase()}</h4>
                                    <img className='w-100' src={pokemon.sprites.front_default}></img>
                                    <Weighter height={pokemon.height} weight={pokemon.weight}></Weighter>
                                </div>
                                <div className='row mt-2'>
                                    {pokemon.types.map(element => {
                                        return <Type type={element["type"]["name"]}></Type>
                                    })}
                                </div>
                            </div>
                            <div className="col-7">
                                <div className={"radius p-1 "+color1+"card"}>
                                    <h6>Habilidades:</h6>
                                    <ol>
                                        {pokemon.abilities.map(element =>{
                                            return <li>{element["ability"]["name"]}</li>
                                        })}
                                    </ol>
                                    <Stater stats={pokemon.stats}></Stater>
                                    <p>Estadísticas totales: {total} puntos</p>
                                    <h6>Cadena evolutiva:</h6>
                                    <p className="kindatrans">{evos.map(evo => {
                                        return <span className="ps-2 pe-2">evo</span>
                                    })}</p>
                                    <h6>Zona de captura:</h6>
                                    <p className="kindatrans">{pokemon.location_area_encounters}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"card-main p-1 bg-danger"}>
                        <div className="normalcard border radius col-12 col-md-9 col-xl-8 mb-2 ps-2">
                            <h4 className='card-title'>Nº{pokeid}: {pokemon.species.name.toUpperCase()}</h4>
                        </div>
                        <div className="row ps-3 right align">
                            <div className="col-2">
                                <h1 className="grey aligntext">●</h1>
                                <h1 className="grey aligntext">+</h1>
                                <p className="kindatrans aligntext">Alf's 4DS Ω</p>
                            </div>
                            <div className={"radius "+color2+"card p-1 col-7 col-md-8"}>
                                <p>Descripción:</p>
                                <p className="kindatrans p-1">{pokemon.name.toUpperCase()} should have a description here; sadly, I don't know where it's description is so don't expect this to work for now...</p>
                                <p>Lista de movimientos:</p>
                                <ul>
                                    {pokemon.moves.map(move => {
                                        return <li>{move["move"]["name"]+" | lvl: "+move["version_group_details"][0]["level_learned_at"]+" | de: "+move["version_group_details"][0]["move_learn_method"]["name"]}</li>
                                    })}
                                </ul>

                            </div>
                            <div className="col-3 col-md-2">
                                <h6 className="red"><button type="button" className="btn normal p-0 radius border">+</button> start</h6>
                                <h6 className="red"><button type="button" className="btn normal p-0 radius border">─</button> select</h6>
                                <button type="button" className="btn btn-danger radius border">O</button>
                                <span className="blue"> ·</span>

                            </div>
                        </div>
                        <div className="row aling right mt-1">
                            <div className="col-3 right">
                                <h1><b>▒▒</b></h1>      
                            </div>
                            <div className="col-5">
                                <audio controls className="bg-danger w-75 radius border">
                                    <source src={pokemon.cries.latest} type="audio/ogg"></source>
                                    Pokemon noises.
                                </audio>
                            </div>
                            <div className="col-3">
                                <h1><b>▒▒</b></h1>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeFull

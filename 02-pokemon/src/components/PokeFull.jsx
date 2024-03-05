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
        <div className='row m-2 aling center'>
            <div className='col-11'>
                <div className='card'>
                    <div className="card-header bg-danger">
                        <div className="row mt-1">
                            <div className="col-5">
                                <div className="icecard radius aling center p-1">
                                    <img className='w-100' src={pokemon.sprites.front_default}></img>
                                    <div className='row aling center'>
                                        <div className="col-5 mb-1">Altura: <span className="kindatrans">{pokemon.height/10}</span>m</div>
                                        <div className="col-5 mb-1">Peso: <span className="kindatrans">{pokemon.weight/10}</span>kg</div>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                        <Type type={pokemon.types[0]["type"]["name"]}></Type>
                                        {type1 ?
                                        <Type type={pokemon.types[1]["type"]["name"]}></Type>:<></>}
                                    </div>
                            </div>
                            <div className="col-7">
                                <div className={"radius p-1 "+color1+"card"}>
                                <h4>{pokemon.species.name.toUpperCase()}</h4>
                                <h6>Habilidades:</h6>
                                <ol>
                                    <li>{pokemon.abilities[0]["ability"]["name"]}</li>
                                    {skill1 ?
                                    <li>{pokemon.abilities[1]["ability"]["name"]}</li>:<></>}
                                    {skill2 ?
                                    <li>{pokemon.abilities[2]["ability"]["name"]}</li>:<></>}
                                </ol>
                                <ProgressBar amount={pokemon.stats[0]["base_stat"]} stat={"HP"}></ProgressBar>
                                <ProgressBar amount={pokemon.stats[1]["base_stat"]} stat={"Atk"}></ProgressBar>
                                <ProgressBar amount={pokemon.stats[2]["base_stat"]} stat={"Dfs"}></ProgressBar>
                                <ProgressBar amount={pokemon.stats[3]["base_stat"]} stat={"SpAtk"}></ProgressBar>
                                <ProgressBar amount={pokemon.stats[4]["base_stat"]} stat={"SpDfs"}></ProgressBar>
                                <ProgressBar amount={pokemon.stats[5]["base_stat"]} stat={"Spd"}></ProgressBar>
                                <p>Estadísticas totales: {total} puntos</p>
                                <h6>Cadena evolutiva:</h6>
                                <p className="kindatrans">Bulvasaur||Ivysaur||Venosaur</p>
                                <p className="kindatrans">Bulvasaur||Snorlax</p>
                                <h6>Zona de captura:</h6>
                                <p className="kindatrans">{pokemon.location_area_encounters}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"card-main p-1 bg-danger"}>
                        <div className="normalcard border radius col-12 col-md-9 col-xl-6 mb-2 ps-2">
                            <h4 className='card-title'>Nº{pokeid}: {pokemon.species.name.toUpperCase()}</h4>
                        </div>
                        <div className="row ps-3">
                            <div className={"radius "+color2+"card p-1 col-9 col-md-10"}>
                                <p>Descripción:</p>
                                <p className="kindatrans p-1">{pokemon.name.toUpperCase()} should have a description here; sadly, I don't know where it's description is so don't expect this to work for now...</p>
                                <p>Lista de movimientos:</p>
                                <ul>
                                    <li>{pokemon.moves[0]["move"]["name"]+" | level: "+pokemon.moves[0]["version_group_details"][0]["level_learned_at"]+" | obtainable: "+pokemon.moves[0]["version_group_details"][0]["move_learn_method"]["name"]}</li>
                                </ul>

                            </div>
                            <div className="col-3 col-md-2">
                                <h6 className="red"><span className="minib">+ </span> start</h6>
                                <h6 className="red"><span className="minib">─</span> select</h6>
                                <p className="kindatrans">Alf's</p>
                                <p>4DS</p>
                            </div>
                        </div>
                        <div className="row aling right">
                            <div className="col-3 right">
                                <h1><b>▒▒</b></h1>      
                            </div>
                            <div className="col-5">
                                <audio controls className="bg-danger w-75 mt-1 radius border">
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
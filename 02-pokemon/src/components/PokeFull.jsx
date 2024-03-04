import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Type from "./Type";

export function PokeFull({pokemon}){
    //Checkear en un bucle si pokemon.stats[1] existe, si no, crear otro return
    //Fix height and weight
    return(
        <div className='row m-2 aling center'>
            <div className='col-10 col-md-9'>
                <div className='card'>
                    <div className={"card-header "+pokemon.types[0]["type"]["name"]+"card"}>
                    <div className='row'>
                        <Type type={pokemon.types[0]["type"]["name"]}></Type>
                        <Type type={pokemon.types[1]["type"]["name"]}></Type>
                    </div>
                    <div className="row">
                        <div className="col-6 aling center">
                        <img className='w-100' src={pokemon.sprites.front_default}></img>
                        </div>
                        <div className="col-6">
                            <p>Height:{pokemon.height}dm</p>
                            <p>Weight:{pokemon.weight}hg</p>
                        </div>
                    </div>
                    </div>
                    <div className={"card-main "+pokemon.types[1]["type"]["name"]+"card"}>
                    <h5 className='card-title'>{pokemon.species.name}</h5>
                    <div className='p-1'>
                        <ProgressBar amount={pokemon.stats[0]["base_stat"]} stat={"HP"}></ProgressBar>
                        <ProgressBar amount={pokemon.stats[1]["base_stat"]} stat={"Atk"}></ProgressBar>
                        <ProgressBar amount={pokemon.stats[2]["base_stat"]} stat={"Dfs"}></ProgressBar>
                        <ProgressBar amount={pokemon.stats[3]["base_stat"]} stat={"SpAtk"}></ProgressBar>
                        <ProgressBar amount={pokemon.stats[4]["base_stat"]} stat={"SpDfs"}></ProgressBar>
                        <ProgressBar amount={pokemon.stats[5]["base_stat"]} stat={"Spd"}></ProgressBar>
                    </div>
                        <a href="#" class="btn btn-primary ms-2 mb-2">See {pokemon.species.name}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeFull
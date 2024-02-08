import { useState } from 'react'

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
  const styleHP = {
    width: eval(100*pokemon.hp/255)+"%"
  }
  const styleAtk = {
    width: eval(100*pokemon.atk/255)+"%"
  }
  const styleDfs = {
    width: eval(100*pokemon.dfs/255)+"%"
  }
  const styleSpAtk = {
    width: eval(100*pokemon.spatk/255)+"%"
  }
  const styleSpDfs = {
    width: eval(100*pokemon.spdfs/255)+"%"
  }
  const styleSpd = {
    width: eval(100*pokemon.spd/255)+"%"
  }
  return(
    <div className='col-4 p-2'>
        <div className="card">
            <div class="card-header">
            <div className='row'>
                <div className='col type fire'>
                    Fire
                </div>
                <div className='col type flying'>
                    Flying
                </div>
            </div>
            </div>
            <div class="card-main">
            <h5 class="card-title">{pokemon.name}</h5>
            <div className='p-1'>
                <div class="row">
                    <div className='col-4 col-md-3 mini'>Hp</div>
                    <div class="col-8 col-md-9">
                        <div class="progress" role="progressbar" aria-label="HP" aria-valuenow="100" aria-valuemin="0" aria-valuemax="255">
                            <div className='progress-bar fairy' style={styleHP}>{pokemon.hp}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div className='col-4 col-md-3 mini'>Atk</div>
                    <div class="col-8 col-md-9">
                        <div class="progress" role="progressbar" aria-label="HP" aria-valuenow="100" aria-valuemin="0" aria-valuemax="255">
                            <div className='progress-bar fire' style={styleAtk}>{pokemon.atk}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div className='col-4 col-md-3 mini'>Dfs</div>
                    <div class="col-8 col-md-9">
                        <div class="progress" role="progressbar" aria-label="HP" aria-valuenow="100" aria-valuemin="0" aria-valuemax="255">
                            <div className='progress-bar flying' style={styleDfs}>{pokemon.dfs}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div className='col-4 col-md-3 mini'>SpAtk</div>
                    <div class="col-8 col-md-9">
                        <div class="progress" role="progressbar" aria-label="HP" aria-valuenow="100" aria-valuemin="0" aria-valuemax="255">
                            <div className='progress-bar fighting' style={styleSpAtk}>{pokemon.spatk}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div className='col-4 col-md-3 mini'>SpDfs</div>
                    <div class="col-8 col-md-9">
                        <div class="progress" role="progressbar" aria-label="HP" aria-valuenow="100" aria-valuemin="0" aria-valuemax="255">
                            <div className='progress-bar water' style={styleSpDfs}>{pokemon.spdfs}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div className='col-4 col-md-3 mini'>Spd</div>
                    <div class="col-8 col-md-9">
                        <div class="progress" role="progressbar" aria-label="HP" aria-valuenow="100" aria-valuemin="0" aria-valuemax="255">
                            <div className='progress-bar bug' style={styleSpd}>{pokemon.spd}</div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="btn btn-primary">See {pokemon.name}</a>
            </div>

        </div>
    </div>
  )
}
export default PokeCard
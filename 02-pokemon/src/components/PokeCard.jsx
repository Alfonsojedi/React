import { useState } from 'react'

export function PokeCard(){

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
            <h5 class="card-title">Nº6 Charizard</h5>
            <p class="card-text">Charizards are orange dragon-like Pokémon that have two wings, that are blue on the front, and orange on the back. Its belly and soles are cream-colored, while their eyes are light blue. The video games say that Charizard's wings can bring it to 4,600 feet in the sky.</p>
            <a href="#" class="btn btn-primary">See Charizard</a>
            </div>

        </div>
    </div>
  )
}
export default PokeCard
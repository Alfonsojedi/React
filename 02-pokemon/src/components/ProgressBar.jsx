import { useState } from 'react'

export function ProgressBar(stat){
    return(
        <div class="row">
            <div class="col-3">{stat}</div>
            <div class="col-9">
                <div class="progress" role="progressbar" aria-label={stat} aria-valuenow="100" aria-valuemin="0" aria-valuemax="255">
                    <div className='progress-bar fairy' style={styleHP}>{pokemon.hp}</div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
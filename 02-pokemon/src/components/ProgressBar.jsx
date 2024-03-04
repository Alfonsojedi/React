import { useState } from 'react'

export function ProgressBar({amount,stat}){
    
    const styleAmount = {
        width: eval(100*amount/255)+"%",
        background: (amount<90 ? (amount<60 ? "#DD2200":"#DDAA00"):(amount<150 ?"#AADD00":"#22DD00"))
    }
    return(
        <div class="row mb-1 align">
            <div className='col-4 col-md-3 ministat'>{stat}</div>
            <div class="col-8 col-md-9">
                <div className='progress trans' role="progressbar" aria-label={stat} aria-valuenow="100" aria-valuemin="0" aria-valuemax="255">
                    <div className='progress-bar' style={styleAmount}>{amount}</div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
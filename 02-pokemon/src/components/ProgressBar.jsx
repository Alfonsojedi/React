import { useState } from 'react'

export function ProgressBar({amount,stat}){
    const styleAmount = {
        width: eval(100*amount/255)+"%",
        background: (amount<90 ? (amount<60 ? "#D20":"#DA0"):(amount<150 ?"#AD0":"#2D0"))
    }
    return(
        <div class="row mb-1 align">
            <div className='col-4 col-md-3 ministat'>{stat}</div>
            <div className="col-8 col-md-9">
                <div className='progress trans' role="progressbar" aria-label={stat} aria-valuenow="100" aria-valuemin="0" aria-valuemax="255">
                    <div className='progress-bar bold' style={styleAmount}>{amount}</div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar

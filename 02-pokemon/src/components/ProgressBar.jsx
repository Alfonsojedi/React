import { useState } from 'react'

export function ProgressBar({amount,stat}){
    
    const styleAmount = {
        width: eval(100*amount/255)+"%",
        background: (amount>100 ? "#00CC00":"#CC8800")
    }
    return(
        <div class="row mb-1">
            <div className='col-4 col-md-3 mini'>{stat}</div>
            <div class="col-8 col-md-9">
                <div class="progress" role="progressbar" aria-label={stat} aria-valuenow="100" aria-valuemin="0" aria-valuemax="255">
                    <div className='progress-bar' style={styleAmount}>{amount}</div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
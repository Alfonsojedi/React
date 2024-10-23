import { useState } from "react";

export function Weighter ({height,weight}){
    return(
        <div className='row aling center'>
            <div className="col-12 col-md-5 mb-1">Altura: <span className="kindatrans">{height/10}</span>m</div>
            <div className="col-12 col-md-5 mb-1">Peso: <span className="kindatrans">{weight/10}</span>kg</div>
        </div>
    )

}

export default Weighter;
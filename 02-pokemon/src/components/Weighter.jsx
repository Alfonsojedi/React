import { useState } from "react";

export function Weighter ({height,weight}){
    return(
        <div className='row align center mb-1'>
            <div className="col-12 col-md-5">Altura: <span className="kindatrans">{height/10}</span>m</div>
            <div className="col-12 col-md-5">Peso: <span className="kindatrans">{weight/10}</span>kg</div>
        </div>
    )

}

export default Weighter;

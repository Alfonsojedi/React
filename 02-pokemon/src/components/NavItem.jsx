import { useState } from 'react'

export function PokeNav({region}){

  return(
    <li className="nav-item">
        <a className="nav-link" href="#">{region}</a>
    </li>
  )
}
export default PokeNav

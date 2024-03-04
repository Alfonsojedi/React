import { useState } from 'react'

export function PokeNav({region}){

  return(
    <li class="nav-item">
        <a class="nav-link" href="#">{region}</a>
    </li>
  )
}
export default PokeNav
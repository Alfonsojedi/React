import { useState } from 'react'
import NavItem from './NavItem'

/*
async function regionsFetch(){
  let response = await fetch("https://pokeapi.co/api/v2/region");
  let regions = await response.json();
  let regiones = [];
  regions.results.foeach(region => {
    regiones.push(region.name);
  })
  return regiones;
}
*/

export function PokeNav(){
  //const regiones = regionsFetch();
  const regiones=["Kanto","Johto","Hoenn","Sinnoh","Unova","Kalos","Alola","Galar","Paldea]
  return(
    <nav className="navbar navbar-expand-sm bg-danger">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {regiones.map(region =>{
              return <NavItem region={region}></NavItem>
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default PokeNav

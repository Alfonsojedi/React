import { useState } from 'react'
import NavItem from './NavItem'

export function PokeNav(){
  const regiones = ["Kanto","2","Prueba"];
  return(
    <nav className="navbar navbar-expand-sm bg-danger">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {regiones.map(region => {
              return <NavItem key={region} region={region}></NavItem>
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default PokeNav

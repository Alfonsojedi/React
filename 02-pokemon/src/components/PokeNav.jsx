import { useState } from 'react'
import NavItem from './NavItem'

export function PokeNav(){

  return(
    <nav className="navbar navbar-expand-sm bg-danger">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <NavItem region={"Kanto"}></NavItem>
            <NavItem region={"Johto"}></NavItem>
            <NavItem region={"Hoenn"}></NavItem>
            <NavItem region={"Sinnoh"}></NavItem>
            <NavItem region={"Unova"}></NavItem>
            <NavItem region={"Kalos"}></NavItem>
            <NavItem region={"Alola"}></NavItem>
            <NavItem region={"Galar"}></NavItem>
            <NavItem region={"Paldea"}></NavItem>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default PokeNav

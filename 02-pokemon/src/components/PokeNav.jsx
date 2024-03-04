import { useState } from 'react'
import NavItem from './NavItem'

export function PokeNav(){

  return(
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
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
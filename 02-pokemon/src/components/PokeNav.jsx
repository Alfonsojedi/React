import { useState } from 'react'

function PokeNav(){

  return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kanto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Johto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hoenn</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sinnoh</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Unova</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Alola</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Galar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Paldea</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default PokeNav
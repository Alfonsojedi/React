import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <div class="card-header">
          <div className='row'>
            <div className='col type fire'>
              Fire
            </div>
            <div className='col type flying'>
              Flying
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Charizard</h5>
          <p class="card-text">Pokemon que tiene una descripción pero me da pereza</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>

      </div>
    </>
  )
}

export default App

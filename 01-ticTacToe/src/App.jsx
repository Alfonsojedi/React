import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Square} from './components/Square.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return <Grid/>;

}

export default App

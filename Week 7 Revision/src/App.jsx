import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Landing from './Landing'
import Dashbaord from './Dashbaord'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>

    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </nav>

      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/dashboard' element={<Dashbaord />}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  
  return (
    <header className="Navbar container mb">
      <h1>Home</h1>
      {isVisible 
        ? <button className='Navbar btn' onClick={() => setIsVisible(previous => !previous)}>Log in</button>
        : <span>Ivona</span>
      }
    </header>
  ) 
}

export default Navbar
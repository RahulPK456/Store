import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
  
       <header className='header-top' >
      
      <Link to='/' style={{textDecoration:"none"}}>
        <h2 className='heading' style={{textDecoration:'none',color:'white',left:"10px"}}>Spaceroow Store</h2>
        </Link>
        <Link to='/returned' style={{textDecoration:'none'}} >
          <button className='btn'>Return</button>
       </Link>
        
       </header>
       
  )
}

export default Header
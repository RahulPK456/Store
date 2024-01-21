import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className='footer'>
        &copy;<p className='p'>spaceroow {new Date().getFullYear()}</p>

    </footer>
  )
}

export default Footer
import React from 'react'
import './Global.css'

const Header = () => {
  return (
    <div className='container-global'>
      <div className='header'>
        <h1 className='signature'>Idées d'antan</h1>
        {/* <img src='#' alt='logo' className='logo' /> */}
        <nav className='nav'>
          <ul>
            <li className='links-nav'><a href='#'>contact</a></li>
            <li className='links-nav'><a href='#'>newsletter</a></li>
          </ul>
        </nav>
      </div>
      <div className='submenu'>
        <h3 className='signature'>Notre catalogue</h3>
        <nav className='nav'>
          <ul>
            <li className='links-nav'><a href='#'>livres</a></li>
            <li className='links-nav'><a href='#'>revues</a></li>
          </ul>
        </nav>
      </div>
    </div>

  )
}

export default Header

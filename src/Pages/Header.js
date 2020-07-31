import React from 'react'
import { Link } from 'react-router-dom'
import './GlobalDantan.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='container-global'>
      <div className='header'>
        <Link to='/' className='signature'><h1 className='link'>Idées d'antan</h1></Link>
        {/* <img src='#' alt='logo' className='logo' /> */}
        <nav className='nav'>
          <ul>
            <li className='links-nav'>
              <Link to='/'><FontAwesomeIcon icon={faPenSquare} className='icon' /></Link>
              <br />
              <span className='icon-txt'>contact</span>
            </li>
            <li className='links-nav'>
              <Link to='/'><FontAwesomeIcon icon={faEnvelope} className='icon' />
                <br /><span className='icon-txt'>newsletter</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='submenu'>
        <h3 className='signature'>Notre catalogue</h3>
        <nav className='nav'>
          <ul>
            <li className='links-nav'><Link to='/Livres' className='links-nav'>livres </Link></li>
            <li className='links-nav'><Link to='/Revues' className='links-nav'>revues </Link></li>
          </ul>
        </nav>
      </div>
    </div>

  )
}

export default Header

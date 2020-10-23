import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './GlobalDantan.css'

const Header = () => {
  return (
    <div className='container-global'>
      <div className='header'>
        <Link to='/' className='signature'><h1 className='link'>Idées d'antan</h1></Link>
        {/* <img src='#' alt='logo' className='logo' /> */}
        <nav className='nav'>
          <ul>
            <li className='links-nav'>
              <Link to='/'><FontAwesomeIcon icon={faPenSquare} className='icon' />
                <br /><span className='icon-txt'>contact</span>
              </Link>
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
        <a href='#'><h3 className='catalogue-tag'>Notre catalogue</h3></a>
        {/* <CatalogueMenu /> */}
        <nav className='nav'>
          <ul>
            <li><Link to='/livre' className='links-nav'>livres </Link></li>
            <li><Link to='/revue' className='links-nav'>revues </Link></li>
          </ul>
        </nav>
      </div>
    </div>

  )
}

export default Header

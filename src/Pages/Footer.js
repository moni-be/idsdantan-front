import React from 'react'
import { Link } from 'react-router-dom'

import './GlobalDantan.css'

const Footer = () => {
  return (
    <div className='container-global'>
      <div className='footer'>
        <ul>
          <li>&copy; Idées d'antan</li>
          <li><Link to='/mentions-legales'>Mentions légales</Link></li>
          <li><Link to='nous-joindre'>Nous joindre</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

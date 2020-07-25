import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='container-global'>
      <div className='header'>
        <img src='#' alt='logo' className='logo' />
        <nav className='nav'>
          <ul>
            <li><a href='#'>contact</a></li>
            <li><a href='#'>newsletter</a></li>
          </ul>
        </nav>
      </div>
      <div className='submenu'>
        <h3>Idées d'antan</h3>
        <nav className='nav'>
          <ul>
            <li><a href='#'>livres</a></li>
            <li><a href='#'>revues</a></li>
          </ul>
        </nav>
      </div>
      <section className='section1'>
        <h2>Soutilte</h2>
      </section>
      <div className='footer'>
        <ul>
          <li>&copy; Idées d'antan</li>
          <li>Mentions légales</li>
          <li>Nous joindre</li>
        </ul>
      </div>

    </div>

  )
}

export default Home

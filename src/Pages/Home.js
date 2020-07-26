import React from 'react'
import './Home.css'

const Home = () => {
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

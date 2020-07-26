import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

import '../Global.css'
import './Livre.css'

const Livre = () => {
  return (
    <div className='container-global'>
      <Header />
      <div className='container-livres'>
        <h1 className='title'>Livres</h1>
        <div className='container-vignettes'>
          <figure className='vignette'>
            <Link to='/Page Produit'><img src='#' /></Link>
            <figcaption className='texte'>
              <h3>Title</h3>
              <p className='description'>description</p>
            </figcaption>
          </figure>
          <figure className='vignette'>
            <img src='#' />
            <figcaption>
              <h3>Title</h3>
              <p>description</p>
            </figcaption>
          </figure>
          <figure className='vignette'>
            <img src='#' />
            <figcaption>
              <h3>Title</h3>
              <p>description</p>
            </figcaption>
          </figure>
          <figure className='vignette'>
            <img src='#' />
            <figcaption>
              <h3>Title</h3>
              <p>description</p>
            </figcaption>
          </figure>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Livre

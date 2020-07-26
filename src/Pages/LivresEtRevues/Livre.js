import React, { useState } from 'react'
import axios from 'axios'
import ModelCard from './ModelCard'
import Header from '../Header'
import Footer from '../Footer'

import '../Global.css'
import './Livre.css'

const Livre = () => {
  const [livres, setLivres] = useState([])

  const fetchLivre = (livreId = 1) => {
    axios.get(`http://localhost:4000/livres/${livreId}`)
      .then(res => setLivres(res.data))
  }

  return (
    <div className='container-global'>
      <Header />
      <div className='container-livres'>
        <h1 className='title'>Livres</h1>
        <div className='container-vignettes'>
          {livres.map((livre, key) => {
            return <ModelCard  isLivre={0} livre={livre} key={key} />
          })}
          {/* <figure className='vignette'>
              <Link to='/Page Produit'>
                  <img src='#' />
                </Link>
              <figcaption className='texte'>
                <h3>{livre.title}</h3>
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
          </figure> */}
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Livre

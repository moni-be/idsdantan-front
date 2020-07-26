import React from 'react'
import { Link } from 'react-router-dom'

import './Livre.css'

const ModelCard = (props) => {
  const { livre } = props
  return (
    <figure className='vignette'>
      <Link to='/Page Produit'>
        <img src='#' alt='' />
      </Link>
      <figcaption className='texte'>
        <h3>{livre.title}</h3>
        <p className='description'>{livre.description}</p>
      </figcaption>
    </figure>
  )
}

export default ModelCard

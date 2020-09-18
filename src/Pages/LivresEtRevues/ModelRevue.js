import React from 'react'
import { Link } from 'react-router-dom'

import './Livre&Revue.css'

const ModelRevue = (props) => {
  const { revue } = props
  if (props.revue) {
    return (
      <>
        <figure className='vignette'>
          <Link to={`/ma-revue/${revue.id}`}>
            <img src={`/assets/revues/${revue.image_name}`} className='photo' alt={revue.title} />
          </Link>
          <figcaption className='texte'>
            <h3>{revue.title} - {revue.number}</h3>
            <h5>{revue.price}€</h5>
          </figcaption>
        </figure>
      </>
    )
  }
}

export default ModelRevue

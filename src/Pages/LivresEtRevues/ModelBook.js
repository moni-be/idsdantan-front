import React from 'react'
import { Link } from 'react-router-dom'

import './Livre&Revue.css'

const ModelBook = (props) => {
  const { book } = props
  if (props.book) {
    return (
      <>
        <figure className='vignette'>
          <Link to={`/mon-livre/${book.id}`}>
            <img src={`/assets/books/${book.image_name}`} className='photo' alt={book.title} />
          </Link>
          <figcaption className='texte'>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <h5>{book.price}€</h5>
            {/* <p className='description'>{book.description}</p> */}
          </figcaption>
        </figure>
      </>
    )
  }
}

export default ModelBook

import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

import './Livre&Revue.css'

const ModelBook = (props) => {
  const { book } = props

const handleChange = () => {
  alert('Hello')
}

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
            <h5>Prix : {book.price}&euro;</h5>
            {/* <p className='description'>{book.description}</p> */}
            <Link to={`/mon-livre/${book.id}`}>
              <FontAwesomeIcon icon={faBookmark} className='icon-buy' onClick={handleChange} />
              <span className='icon-txt' onClick={handleChange}>Je réserve</span>
            </Link>
          </figcaption>
        </figure>
      </>
    )
  }
}

export default ModelBook

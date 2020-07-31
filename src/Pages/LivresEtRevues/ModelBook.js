import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../Assets/books/comment-je-vois-le-monde.png'

import './Livre&Revue.css'

const ModelBook = (props) => {
  const { book } = props
  if (props.book) {
    return (
      <>
        <figure className='vignette'>
          <Link to='/mon-livre'>
            {/* <img src={image && `./Assets/books/${book.image_name}`  */}
            <img src={image} className='photo' alt={book.title} />
            {console.log(image)}
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

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import image from '../../Assets/books/comment-je-vois-le-monde.png'

import '../GlobalDantan.css'
import './Livre&Revue.css'
import './PageProd.css'

const PageBook = (props) => {
  const [oneBook, setOneBook] = useState([])

  useEffect(() => {
    showOneProduct()
  })

  const showOneProduct = () => {
    axios.get(`http://localhost:4000/livres/id/${oneBook}`)
      .then(res => setOneBook(res.data))
  }

  return (
    <div className='container-global'>
      <Header />
      <>
        <figure className='vignette'>
          <figcaption className='texte'>
            <img src={image} className='photo' alt={oneBook.title} />
            <h3>{oneBook.title}</h3>
            <h4>{oneBook.author}</h4>
            <h5>{oneBook.price}€</h5>
            <p className='description'>{oneBook.description}</p>
          </figcaption>
        </figure>
      </>
      <Footer />
    </div>

  )
}

export default PageBook

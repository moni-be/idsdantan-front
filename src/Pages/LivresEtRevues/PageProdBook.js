import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
// import ModelProduct from './ModelProduct'
import image from '../../Assets/books/comment-je-vois-le-monde.png'

import '../GlobalDantan.css'
import './ModelProd.css'

const PageBook = (props) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    showOneProduct()
  })

  const showOneProduct = () => {
    axios.get(`http://localhost:4000/mon-livre/id/${product}`)
      .then(res => console.log(res) && setProduct(res.data))
  }

  return (
    <div className='container-global'>
      <Header />
      <div className='container-produit'>
        <div className='fiche-prod'>
          <img src={image} className='photo' alt='#' />
        </div>
        <div className='infos-prod'>
          <h3>{product.title}Titre</h3>
          <ul>
            <li>{product.autor}Auteur</li>
            <li>{product.price}Prix</li>
            <li>{product.category_name}Description</li>
          </ul>
          <p className='description'>{product.description}</p>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default PageBook

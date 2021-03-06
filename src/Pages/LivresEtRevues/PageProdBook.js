import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import '../GlobalDantan.css'
import './ModelProd.css'

const PageProdBook = (props) => {
  const { bookId } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    showOneProduct()
  }, [])

  const showOneProduct = () => {
    axios.get(`http://localhost:4000/mon-livre/${bookId}`)
      .then(res => setProduct(res.data))
  }

  return (
    <div className='container-global'>
      <Header />
      <div className='container-produit'>
        <div className='fiche-prod'>
          <img src={`/assets/books/${product.image_name}`} className='photo' alt={`${product.image_name}`} />
        </div>
        <div className='infos-prod'>
          <h3>{product.title}</h3>
          <ul>
            <li>{product.autor}</li>
            <li>{product.category}</li>
            <p className='description'>{product.description}</p>
            <li className='price'>{product.price}&euro;</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default PageProdBook

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import ModelProduct from './ModelProduct'

import '../GlobalDantan.css'
import './PageProd.css'

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
        {product.map((product, key) => {
          return <ModelProduct isProduct={0} product={product} key={key} />
        })}
      </div>
      <Footer />
    </div>

  )
}

export default PageBook

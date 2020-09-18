import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import '../GlobalDantan.css'
import './ModelProd.css'

const PageProdRevue = (props) => {
  const { revueId } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    showOneProduct()
  }, [])

  const showOneProduct = () => {
    axios.get(`http://localhost:4000/ma-revue/${revueId}`)
      .then(res => setProduct(res.data))
  }
  return (
    <div className='container-global'>
      <Header />
      <div className='container-produit'>
        <div className='fiche-prod'>
          <img src={`/assets/revues/${product.image_name}`} className='photo-revue' alt={`${product.title}`} />
        </div>
        <div className='infos-prod'>
          <h3>{product.title}Titre</h3>
          <ul>
            <li>{product.number}Number</li>
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

export default PageProdRevue

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
          <h3>{product.title}</h3>
          <ul>
            <li>Numéro : {product.number}</li>
            <li>{product.category_name}</li>
            <p className='description'>{product.description}</p>
            <li className='price'>{product.price}&euro;</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default PageProdRevue

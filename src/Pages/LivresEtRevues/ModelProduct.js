import React from 'react'
import image from '../../Assets/books/comment-je-vois-le-monde.png'

import './PageProd.css'

const ModelProduct = (props) => {
  const { product } = props
  if (props.product) {
    return (
      <div className='container-produit'>
        <div className='fiche-prod'>
          <img src={image} className='photo' alt={product.title} />
        </div>
        <div className='infos-prod'>
          <h3>{product.title}</h3>
          <ul>
            <li>{product.autor}</li>
            <li>{product.price}</li>
            <li>{product.category_name}</li>
          </ul>
          <p className='description'>{product.description}</p>
        </div>
      </div>
    )
  }
}

export default ModelProduct

import React from 'react'
import image from '../../Assets/books/comment-je-vois-le-monde.png'

import './ModelProd.css'

const ModelProduct = (props) => {
  const { product } = props
  if (props.product) {
    return (
      <div className='container-produit'>
        {/*  <div className='fiche-prod'>
          <img src={image} className='photo' alt={product.title} />
        </div>
        <div className='infos-prod'>
          <h3>{product.title}Couocu</h3>
          <ul>
            <li>{product.autor}Couocu</li>
            <li>{product.price}Couocu</li>
            <li>{product.category_name}Couocu</li>
          </ul>
          <p className='description'>{product.description}</p>
        </div> */}
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

    )
  }
}

export default ModelProduct

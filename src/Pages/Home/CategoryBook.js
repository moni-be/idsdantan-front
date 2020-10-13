import React from 'react'
import { Link } from 'react-router-dom'
import './../GlobalDantan.css'

const CategoryBook = (props) => {
  const { category } = props
  if (props.category) {
    return (
    /*   <Link to={`/categorie-livre/${category}`} className='links-nav'>
        <span>{category.name}</span>
      </Link> */
      <span>{category.name}</span>
    )
  }
}

export default CategoryBook

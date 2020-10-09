import React from 'react'
import './../GlobalDantan.css'

const CategoryBook = (props) => {
  const { category } = props
  if (props.category) {
    return (
      <span className='links-nav'>{category.name}</span>
    )
  }
}

export default CategoryBook

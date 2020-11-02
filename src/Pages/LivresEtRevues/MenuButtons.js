import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './MenuButtons.css'

function MenuButtons () {
  const [category, setCategory] = useState([])
  const [bookCategory, setBookCategory] = useState([])
  const [book, setBook] = useState([])

  useEffect(() => {
    showAllBooks()
  }, [])

  const showAllBooks = () => {
    axios.get(`http://localhost:4000/livre/${book}/categorie/${category.id}`)
      .then(res => setBook(res.data))
  }
  const handleCategory = (e) => {
    if (bookCategory === 0) {
      bookCategory = setBookCategory
    } else {
      bookCategory.filter(item => item.book.category_id)
    }
  }

  useEffect(() => {
    showAllCategory()
  }, [])

  const showAllCategory = () => {
    axios.get(`http://localhost:4000/livre/categorie/${category.id}`)
      .then(res => setCategory(res.data))
  }

  return (
    <div className='container-buttons'>
      {category.map((category, key) => {
        return (
          <div key={key}>
            <button key={category.id} handleCategory={category} onClick={handleCategory} className='menu-buttons'> {category.name}</button>
          </div>)
      })}
    </div>
  )
}

export default MenuButtons

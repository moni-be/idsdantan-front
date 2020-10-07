import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import axios from 'axios'
import ModelBook from './ModelBook.js'
import Header from '../Header'
import Footer from '../Footer'

import '../GlobalDantan.css'
import './Livre&Revue.css'

const Livre = () => {
  // const { categoryId } = useParams()
  const [book, setBook] = useState([])
  const [category, setCategory] = useState([])
  // const bookCategoryId = book.category_id

  useEffect(() => {
    showAllBooks()
  }, [])

  const showAllBooks = () => {
    axios.get(`http://localhost:4000/livre/${book}`)
      .then(res => setBook(res.data))
  }

  useEffect(() => {
    showAllCategory()
  }, [])

  const showAllCategory = () => {
    axios.get(`http://localhost:4000/livre/${category}/roman`)
      .then(res => setCategory(res.data))
  }
  /*
  if (category) {
    return (
      <div className='container-global'>
        <Header />
        <div className='container-livres'>
          <h1 className='title'>Livres</h1>
          <div className='container-vignettes'>
            {book.map((book, key) => {
              return <ModelBook isCategory={0} category={category} key={key} />
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
  } else { */
  return (
    <div className='container-global'>
      <Header />
      <div className='container-livres'>
        <h1 className='title'>Livres</h1>
        <div className='container-vignettes'>
          {book.map((book, key) => {
            return <ModelBook isBook={0} book={book} key={key} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
// }

export default Livre

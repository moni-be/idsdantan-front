import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import axios from 'axios'
import ModelBook from './ModelBook.js'
import Header from '../Header'
import Footer from '../Footer'
import MenuButton from './MenuButton'

import '../GlobalDantan.css'
import './Livre&Revue.css'

const Livre = () => {
  const [book, setBook] = useState([])
  // const { categoryId } = useParams()
  const [bookCategory, setBookCategory] = useState([])
  const [category, setCategory] = useState(false)

  useEffect(() => {
    showAllBooks()
  }, [])

  /*  useEffect(() => {
    showBookCategory()
  },
  [bookCategory]) */

  const showAllBooks = () => {
    axios.get(`http://localhost:4000/livre/${book}`)
      .then(res => setBook(res.data), console.log(res => setBookCategory(res.data)))
  }

  /*  const showBookCategory = () => {
    axios.get(`http://localhost:4000/livre/categorie/${bookCategory}`)
      .then(
        console.log(res => setBookCategory(res.data))
      )
  } */

  const getByCategory = () => {
    bookCategory({ category: !setCategory }, () => {
      let bookTemp
      if (category) {
        bookTemp = book.filter(book => book.category_id)
      } else {
        bookTemp = setBook
      }
      bookCategory({ setBookCategory: bookTemp })
    })
  }

  return (
    <div className='container-global'>
      <Header />
      <div className='container-livres'>
        {/* <h1 className='title'>Livres</h1> */}
        <MenuButton onClick={getByCategory} />

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

export default Livre

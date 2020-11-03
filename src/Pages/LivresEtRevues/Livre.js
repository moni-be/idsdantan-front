import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import axios from 'axios'
import ModelBook from './ModelBook.js'
import Header from '../Header'
import Footer from '../Footer'
import MenuButton from './MenuButton'

import '../GlobalDantan.css'
import './Livre&Revue.css'

const Livre = (props) => {
  const [book, setBook] = useState([])
  // const { categoryId } = useParams()
  // const [bookCategory, setBookCategory] = useState([])

  useEffect(() => {
    showAllBooks()
  }, [])

  const showAllBooks = () => {
    axios.get(`http://localhost:4000/livre/${book}`)
      .then(res => setBook(res.data))
  }

  const handleCategory = (e) => {
    if (book === 0) {
      book.id = setBook
    } else {
      book.filter(book => book.category_id)
    }
  }

  /*   useEffect(() => {
    showBookCategory()
  }, [])

  const showBookCategory = () => {
    axios.get(`http://localhost:4000/livre/categorie/${categoryId}`)
      .then(res => setBookCategory(res.data))
  } */

  return (
    <div className='container-global'>
      <Header />
      <div className='container-livres'>
        {/* <h1 className='title'>Livres</h1> */}

        <MenuButton onClick={handleCategory} />

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

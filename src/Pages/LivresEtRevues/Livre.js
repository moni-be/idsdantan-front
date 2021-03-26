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

  useEffect(() => {
    setBookCategory()
  },
  [])

  const showAllBooks = () => {
    axios.get(`http://localhost:4000/livre/${book}`)
      .then(res => setBook(res.data), res => setBookCategory(res.data))
  }

  /*  const showBookCategory = () => {
    axios.get(`http://localhost:4000/livre/categorie/${bookCategory}`)
      .then(
        console.log(res => setBookCategory(res.data))
      )
  } */

  const getByCategory = (e) => {
    bookCategory({ category: !setCategory }, () => {
      let bookTemp = e.target.value
      if (category) {
        bookTemp = setBook
        console.log(bookTemp)
      } else {
        bookTemp = book.filter(book => {
          return book.category_name.indexOf(e.target.value) >= 0
        })
      }
      bookCategory({ setBookCategory: bookTemp })
    })
  }

  /*   const sample = () => {
    alert('Ajouter à mon panier')
  } */
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

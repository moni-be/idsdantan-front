import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ModelBook from './ModelBook.js'
import Header from '../Header'
import Footer from '../Footer'

import '../GlobalDantan.css'
import './Livre&Revue.css'

const Roman = () => {
  const [book, setBook] = useState([])

  useEffect(() => {
    showAllRoman()
  }, [])

  const showAllRoman = () => {
    axios.get(`http://localhost:4000/roman/${book}`)
      .then(res => setBook(res.data))
  }

  /*   const displayCatalogue = 'http://localhost:4000/roman'

  const showAllRoman = useCallback(() => {
    axios.get(`${displayCatalogue}/${roman}`)
      .then((res) => {
        setRoman(res.data)
      })
  }, [])

  useEffect(() => {
    showAllRoman()roman
roman
  }, [showAllRoman]) */

  return (
    <>
      <h1>Cocucucu</h1>
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
    </>
  )
}

export default Roman

/*
  const [conte, setConte] = useState([])
  const [roman, setRoman] = useState([])

    const handleDisplayCatalogue = (e) => {
    e.preventDefault()
    const catalogue = setCatalogue(true)
  }

  const showAllConte = useCallback(() => {
    axios.get(`${displayCatalogue}/${conte}`)
      .then((res) => {
        setConte(res.data)
      })
  }, [])

  useEffect(() => {
    showAllConte()
  }, [])

  const showAllRoman = useCallback(() => {
    axios.get(`${displayCatalogue}/${roman}`)
      .then((res) => {
        setRoman(res.data)
      })
  }, [])

  useEffect(() => {
    showAllRoman()
  }, [])
*/

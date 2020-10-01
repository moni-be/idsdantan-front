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
    showAllRoman()
  }, [showAllRoman]) */

  return (
    <div className='container-global'>
      <Header />
      <div className='container-livres'>
        <h1 className='title'>Livres</h1>
        <div className='container-vignettes'>
          {book.map((roman, key) => {
            return <ModelBook isBook={0} roman={roman} key={key} />
          })}
        </div>
      </div>
      <Footer />
    </div>
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

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ModelBook from './ModelBook.js'
import Header from '../Header'
import Footer from '../Footer'

import '../GlobalDantan.css'
import './Livre&Revue.css'

import './../GlobalDantan.css'

const Roman = () => {
  const [roman, setRoman] = useState([])

  useEffect(() => {
    showAllBooks()
  }, [])

  const showAllBooks = () => {
    axios.get(`http://localhost:4000/${roman}`)
      .then(res => setRoman(res.data))
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
          {roman.map((roman, key) => {
            return <ModelBook isRoman={0} roman={roman} key={key} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Roman

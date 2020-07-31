import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ModelRevue from './ModelRevue.js'
import Header from '../Header'
import Footer from '../Footer'

import '../GlobalDantan.css'
import './Livre.css'

const Revue = () => {
  const [revue, setRevue] = useState([])

  useEffect(() => {
    showAllRevues()
  }, [])

  const showAllRevues = () => {
    axios.get(`http://localhost:4000/revues/${revue}`)
      .then(res => setRevue(res.data))
  }

  return (
    <div className='container-global'>
      <Header />
      <div className='container-livres'>
        <h1 className='title'>Livres</h1>
        <div className='container-vignettes'>
          {revue.map((revue, key) => {
            return <ModelRevue isRevue={0} revue={revue} key={key} />
          })}
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Revue

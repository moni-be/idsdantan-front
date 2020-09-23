import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './../GlobalDantan.css'

function CatalogueMenu ({ title, items = [], multiSelect = false }) {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)

  function handleOnClick(item){

  }

  return (
    <>
      <div className='dropdown'>
        <a href='#' onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}> <span className='catalogue'>Notre catalogue</span></a>
        {open && (
          <ul>
            <li><Link to='/livre/conte' className='links-nav'>Conte</Link></li>
            <li><Link to='/roman' className='links-nav'>Roman</Link></li>

          </ul>
        )}
      </div>
    </>
  )
}

export default CatalogueMenu

{ /* <li>Lettre</li>
    <li>Livre de référence</li>
    <li>Essai</li>
    <li>Nouvelle</li>
    <li>Pièce de théâtre</li>
    <li>Biographe</li>
    <li>Art Poétique</li>
    <li>La NRF</li>
    <li>LTM</li>
    <li>Scilicet</li>
    <li>Critique</li>
*/ }

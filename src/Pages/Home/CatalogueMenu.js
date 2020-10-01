import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './../GlobalDantan.css'

const CatalogueMenu = (props, { title, items = [], multiSelect = false }) => {
  const { book } = props
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  // const [selection, setSelection] = useState([])
  /*   function handleOnClick(item){

  } */
  if (props.book) {
    return (
      <div className='dropdown'>
        <a href='#' onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}> <span className='catalogue'>Notre catalogue</span></a>
        {open && (
          <ul>
            <li><Link to='/livre/conte' className='links-nav'>Conte</Link></li>
            <li><Link to={`/roman/${book.category_id}`} className='links-nav'>Roman</Link></li>

          </ul>
        )}
      </div>
    )
  }
}

export default CatalogueMenu

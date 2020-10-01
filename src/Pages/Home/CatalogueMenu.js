import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import onClickOutside from 'react-onclickoutside'

import './../GlobalDantan.css'

const CatalogueMenu = (props, { title, items = [], multiSelect = false }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  CatalogueMenu.handleClickOutside = () => setOpen(false)

  // const [selection, setSelection] = useState([])
  /*   function handleOnClick(item){

  } */
  return (
    <div className='dropdown'>
      <a href='#' onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}> <span className='catalogue'>Notre catalogue</span></a>
      {open && (
        <ul>
          <li><Link to='/livre/conte' className='links-nav'>Conte</Link></li>
          <li><Link to='/livre/roman' className='links-nav'>Roman</Link></li>

        </ul>
      )}
    </div>
  )
}

const onClickOutsideConfig = {
  handleClickOutside: () => CatalogueMenu.handleClickOutside
}

export default onClickOutside(CatalogueMenu, onClickOutsideConfig)

import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import onClickOutside from 'react-onclickoutside'

import './../GlobalDantan.css'

function CatalogueMenu (props, { title, items = [], multiSelect = false }) {
  const { categoryId } = useParams()
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState([])
  const toggle = () => setOpen(!open)
  CatalogueMenu.handleClickOutside = () => setOpen(false)

  // const [selection, setSelection] = useState([])
  /*   function handleOnClick(item){
  } */

  const handleChange = (e) => {
    setCategory({ category: categoryId })
  }

  return (
    <div className='dropdown'>
      <a href='#' onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}> <span className='catalogue'>Notre catalogue</span></a>
      {open && (
        <ul>
          <li>
            <NavLink to='/livre/conte' className='links-nav' onClick={handleChange}>Conte</NavLink>
          </li>
          <li>
            <NavLink to='/livre/roman' className='links-nav' onClick={handleChange}>Roman</NavLink>
          </li>
        </ul>
      )}
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => CatalogueMenu.handleClickOutside
}

export default onClickOutside(CatalogueMenu, clickOutsideConfig)

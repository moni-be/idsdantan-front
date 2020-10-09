import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import onClickOutside from 'react-onclickoutside'
import axios from 'axios'
import CategoryBook from './CategoryBook'

import './../GlobalDantan.css'

function CatalogueMenu (props) {
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

  useEffect(() => {
    showAllCategory()
  }, [])

  const showAllCategory = () => {
    axios.get(`http://localhost:4000/categorie-livre/${category}`)
      .then(res => setCategory(res.data))
  }

  return (
    <div className='dropdown'>
      <a href='#' onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}> <span className='catalogue'>Notre catalogue</span></a>
      {open && (
        <ul>
          <li>
            <CategoryBook onClick={handleChange} className='links-nav' />
          </li>

          {/*
                    {category.name}
            {category.map((category, key) => {
              return <CategoryBook isCategory={0} category={category} key={key} />
            })}

           <li>
            <NavLink to='/livre/conte' className='links-nav' onClick={handleChange}>Conte</NavLink>
          </li>
          <li>
            <NavLink to='/livre/roman' className='links-nav' onClick={handleChange}>Roman</NavLink>
          </li>
      */}
        </ul>
      )}
    </div>
  )
}

// export default CatalogueMenu

const clickOutsideConfig = {
  handleClickOutside: () => CatalogueMenu.handleClickOutside
}

export default onClickOutside(CatalogueMenu, clickOutsideConfig)

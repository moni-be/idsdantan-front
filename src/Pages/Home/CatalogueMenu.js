import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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

  useEffect(() => {
    showAllCategory()
  }, [])

  const showAllCategory = () => {
    axios.get(`http://localhost:4000/livre/categorie/${category.id}`)
      .then(res => setCategory(res.data))
  }

  return (
    <div className='dropdown'>
      <a href='#' onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}> <span className='catalogue'>Notre catalogue</span></a>
      {open && (
        <ul>
          {category.map((category, key) => {
            return <li key={key}>
              <span key={category.id} category={category}>{category.name}</span>
            </li>
          })}
        </ul>
      )}

      {/*

    const handleChange = (value) => {
      const currentIndex = category.indexOf(value)
      const newCategory = [...category]

      if (currentIndex === -1) {
        newCategory.push(value)
      } else {
        newCategory.splice(currentIndex, 1)
      }
      setCategory(newCategory)
    }
      <a href='#' onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}> <span className='catalogue'>Notre catalogue</span></a>
      {open && (
        <ul>
          <li> <NavLink to='/livre/conte' className='links-nav' onClick={handleOnChange}>Conte</NavLink>
          </li>
          <li> <NavLink to='/livre/roman' className='links-nav' onClick={handleOnChange}>Roman</NavLink>
          </li>

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

        </ul>
      )}
       */}
    </div>
  )
}

/* export default CatalogueMenu */

const clickOutsideConfig = {
  handleClickOutside: () => CatalogueMenu.handleClickOutside
}

export default onClickOutside(CatalogueMenu, clickOutsideConfig)

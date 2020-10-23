import React, { useState, useEffect } from 'react'
import onClickOutside from 'react-onclickoutside'
import axios from 'axios'
import './../GlobalDantan.css'

function CatalogueMenu () {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState([])
  const toggle = () => setOpen(!open)
  const [bookCategory, setBookCategory] = useState([])
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

  const handleCategory = (e) => {
    if (category.id === 0) {
      setBookCategory = bookCategory
    } else {
      setBookCategory.filter(item => item.book.category_id)
    }
  }

  return (
    <div className='dropdown'>
      <a href='#' onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}> <span className='catalogue'>Notre catalogue</span></a>
      {open && (
        <ul>
          {category.map((category, key) => {
            return <li key={key} onClick={handleCategory}>
              <span key={category.id} category={category}>{category.name} </span>
            </li>
          })}
        </ul>
      )}
    </div>
  )
}

/* export default CatalogueMenu */

const clickOutsideConfig = {
  handleClickOutside: () => CatalogueMenu.handleClickOutside
}

export default onClickOutside(CatalogueMenu, clickOutsideConfig)

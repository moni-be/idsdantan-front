import React from 'react'
import { Link } from 'react-router-dom'

import './../GlobalDantan.css'

const CatalogueMenu = () => {
  // const displayCatalogue = 'http://localhost:4000/livre'
  // const [catalogue, setCatalogue] = useState(false)
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
  return (
    <>
      <div className='dropdown'>
        <label className='catalogue'>Notre catalogue</label>
        <ul>
          <li><Link to='/livre/conte' className='links-nav'>Conte</Link></li>
          <li><Link to='/roman' className='links-nav'>Roman</Link></li>
          <li>Lettre</li>
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
        </ul>
      </div>
    </>
  )
}

export default CatalogueMenu

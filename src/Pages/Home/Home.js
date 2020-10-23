import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Banner from './Banner'

const Home = () => {
  return (
    <div className='container-global'>
      <Header />
      <Banner />
      {/* <div className='test'><p>TEST</p></div> */}
      <Footer />
    </div>

  )
}

export default Home

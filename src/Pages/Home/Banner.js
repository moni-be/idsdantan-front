import React from 'react'
import Video from '../Home/Video'
// import video from '../../Assets/8_BD_CLIP-34-guitares-classiques-.mp4'

import '../GlobalDantan.css'
import './Banner.css'

const Banner = () => {
  return (
    <div className='container-global'>
      <section className='section1'>
        <h2 className='subtitle'>Les évènements des livres !</h2>
        <h2 className='evenement'>La Nuit du Livre</h2>
        <div className='banner'>
          <Video />
        </div>
      </section>
    </div>

  )
}

export default Banner

import React from 'react'
import { Player, ControlBar } from 'video-react'
import 'video-react/dist/video-react.css'

const Video = (props) => {
  return (
    <Player autoPlay src='http://www.lanuitdulivre.com/wp-content/uploads/2019/03/8_BD_CLIP-34-guitares-classiques-.mp4'>
      <ControlBar autoHide={false} className='my-class' />
    </Player>
  )
}

export default Video

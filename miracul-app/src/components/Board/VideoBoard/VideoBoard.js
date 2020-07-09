import React from 'react'
import video from '../../../assets/videos/home-page.mp4'
import "./VideoBoard.css"

const videoBoard = () => (
  <div className="video-container">
    <video autoPlay muted playsInline loop  width="100%">
      <source src={video} type="video/mp4" ></source>
    </video>
    <div className="content">
      <p>About ecstase.</p>
    </div>
  </div>
)
export default videoBoard
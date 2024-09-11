import React from 'react'
import headImage from "../assets/images/desktop/image-header.jpg"
import aero from "../assets/images/icon-arrow-down.svg"
const Home = () => {
  return (
    <div className='home'>
    <h1 className='title'>WE ARE CREATIVES</h1>
    <img className='aero-image' src={aero} alt="" />
    <img className='head-image' src={headImage} alt="" />
    </div>
  )
}

export default Home
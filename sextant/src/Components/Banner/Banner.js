import React from 'react'
import "./Banner.css"

const Banner = (props) => {
  return (
    <div className='Banner'><h1 className='bannerTitle'>{props.title}</h1></div>
  )
}

export default Banner
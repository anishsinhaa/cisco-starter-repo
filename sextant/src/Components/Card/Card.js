import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'><h3 className='cardHeading'>{props.heading}</h3>{props.children}</div>
  )
}

export default Card
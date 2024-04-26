import React from 'react'

const Image = ({source, alt, styling}) => {
  return (
    <img src={source} alt={alt}  style={styling}/>
  )
}

export default Image
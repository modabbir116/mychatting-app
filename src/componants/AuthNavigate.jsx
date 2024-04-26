import React from 'react'
import { Link } from 'react-router-dom'

const AuthNavigate = ({style, text, link, linktext}) => {
  return (
    <p className={style}>
        {text}
        <Link to={link}>{linktext}</Link>
    </p>
  )
}

export default AuthNavigate
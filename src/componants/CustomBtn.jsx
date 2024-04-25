import React from 'react'
import { Button } from '@mui/material'

const CustomBtn = ({text, onClick, styling, variant, }) => {
  return (
    <Button onClick={onClick} className={styling} variant={variant}>{text}</Button>
  )
}

export default CustomBtn
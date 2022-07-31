import React from 'react'
import Button from '@mui/material/Button'

interface PropTypes {
  text: string
  variant: 'text' | 'contained' | 'outlined'
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined
  size?: 'small' | 'medium' | 'large' | undefined
  type?: 'button' | 'submit' | 'reset' | undefined
}

const ButtonStylized: React.FC<PropTypes> = ({
  text,
  variant,
  color,
  size,
  type
}) => {
  return (
    <Button variant={variant} color={color} size={size} type={type}>
      {text}
    </Button>
  )
}

export { ButtonStylized }

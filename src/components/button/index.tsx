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
}

const ButtonStylized: React.FC<PropTypes> = ({
  text,
  variant,
  color,
  size
}) => {
  return (
    <Button type="submit" variant={variant} color={color} size={size}>
      {text}
    </Button>
  )
}

export { ButtonStylized }

import React from 'react'
import { StyledButton } from './styles'

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

const Button: React.FC<PropTypes> = ({ text, variant, color, size, type }) => {
  return (
    <StyledButton variant={variant} color={color} size={size} type={type}>
      {text}
    </StyledButton>
  )
}

export { Button }

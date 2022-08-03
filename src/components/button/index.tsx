import React from 'react'
import Button from '@mui/material/Button'
import { DivButton } from './styles'

interface PropTypes {
  id?: string | undefined
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
  classes: any
}

const BasicButton: React.FC<PropTypes> = ({
  id,
  text,
  variant,
  color,
  size,
  classes
}) => {
  return (
    <DivButton>
      <Button
        type="submit"
        id={id}
        variant={variant}
        color={color}
        size={size}
        classes={classes}>
        {text}
      </Button>
    </DivButton>
  )
}

export { BasicButton }

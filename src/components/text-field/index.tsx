import * as React from 'react'
import { StyledTextField } from './styles'

interface PropTypes {
  id?: string
  name?: string
  label?: string
  variant?: 'outlined' | 'standard' | 'filled'
  value?: string
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  type?: 'name' | 'email' | 'job' | 'username' | 'password' | 'confirmPassword'
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  helperText?: any
  error?: any
}

const BasicTextFields: React.FC<PropTypes> = ({
  id,
  name,
  label,
  variant,
  value,
  type,
  onChange,
  color,
  helperText,
  error
}) => {
  return (
    <StyledTextField
      fullWidth
      margin="normal"
      id={id}
      name={name}
      variant={variant}
      label={label}
      value={value}
      type={type}
      onChange={onChange}
      color={color}
      helperText={helperText}
      error={error}
    />
  )
}

export default BasicTextFields

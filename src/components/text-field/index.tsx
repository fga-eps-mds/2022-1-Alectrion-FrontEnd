import * as React from 'react'
import { StyledTextField } from './styles'

interface PropTypes {
  id: string | undefined
  name: string
  label: 'Nome' | 'Cargo' | 'Email' | 'Username' | 'Senha' | 'Confirmar Senha'
  variant: 'outlined' | 'standard' | 'filled' | undefined
  value: string
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  type: 'name' | 'email' | 'job' | 'username' | 'password' | 'confirmPassword'
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const BasicTextFields: React.FC<PropTypes> = ({
  id,
  name,
  label,
  variant,
  value,
  type,
  onChange,
  color
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
    />
  )
}

export default BasicTextFields

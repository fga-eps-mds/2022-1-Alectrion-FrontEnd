import React from 'react'
import TextField from '@mui/material/TextField'

interface PropTypes {
  id: string | undefined
  name: string
  label: 'Nome' | 'Cargo' | 'Email' | 'Username' | 'Senha' | 'Confirmar Senha'
  variant: 'outlined' | 'standard' | 'filled' | undefined
  value: string
  type: 'nome' | 'email' | 'cargo' | 'username' | 'senha' | 'confirmarSenha'
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const BasicTextFields: React.FC<PropTypes> = ({
  id,
  name,
  label,
  variant,
  value,
  type,
  onChange
}) => {
  return (
    <TextField
      id={id}
      name={name}
      variant={variant}
      label={label}
      value={value}
      type={type}
      onChange={onChange}
    />
  )
}

export default BasicTextFields

import React from 'react'
import Input from '@mui/material/Input'
import { DivInput } from './styles'

interface PropTypes {
  id?: string
  name?: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  type: string
  value: any
}

const BasicInput: React.FC<PropTypes> = ({
  id,
  name,
  onChange,
  placeholder,
  type,
  value
}) => {
  return (
    <DivInput>
      <Input
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </DivInput>
  )
}

export default BasicInput

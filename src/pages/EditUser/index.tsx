import React from 'react'
import Form from '../../components/form'
import { DivForm } from './styles'
import { Typography } from '@mui/material'

export default function EditUser() {
  return (
    <DivForm>
      <Typography variant="h3">Edição de Usuário</Typography>
      <Form />
    </DivForm>
  )
}

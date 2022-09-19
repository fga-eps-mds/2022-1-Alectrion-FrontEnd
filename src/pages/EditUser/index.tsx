import React from 'react'
import Form from '../../components/edit-user-form'
import { DivForm } from './styles'
import { Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

export default function EditUser() {
  const { state } = useLocation()

  return (
    <DivForm>
      <Typography variant="h3">Edição de Usuário</Typography>
      <Form userId={state?.userId} />
    </DivForm>
  )
}

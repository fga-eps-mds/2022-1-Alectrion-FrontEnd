import React from 'react'
import Form from '../../components/edit-user-form'
import { DivForm } from './styles'
import { Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

interface locationProps {
  userId: string
}

export default function EditUser() {
  const { state } = useLocation()
  const { userId } = state as locationProps
  return (
    <DivForm>
      <Typography variant="h3">Edição de Usuário</Typography>
      <Form userId={userId} />
    </DivForm>
  )
}

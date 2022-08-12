import React from 'react'
import { StyledTextField, Container, FindContainer } from './styles'
import UserTables from '../../components/User-Tables'
import { Typography } from '@mui/material'
import { Button } from '../../components/button'
import { theme } from '../../styles/theme'

export default function ScreenUser() {
  return (
    <div>
      <Container>
        <Typography variant="h3">Usuários</Typography>
        <FindContainer>
          <StyledTextField
            size="small"
            id="username-input"
            label="Nome do usuário"
            data-testId="username-input"
            type="text"
            name="name"
            variant="outlined"
          />
          <div></div>
          <Button
            styledColor={theme.palette.background.paper}
            textColor="white">
            Cadastrar usuário
          </Button>
        </FindContainer>
        <div></div>
        <UserTables />
      </Container>
    </div>
  )
}

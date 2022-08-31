import {
  Container,
  FindContainer,
  BoxInput,
  ButtonFilters,
  ButtonCad
} from './style'
import * as React from 'react'
import { Typography, Input, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'

export default function ScreenEquipaments() {
  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black' }}>
        Consultar Equipamentos
      </Typography>
      <FindContainer>
        <BoxInput>
          <SearchIcon sx={{ marginBottom: '3px' }} />
          <Input sx={{ flex: 0.9 }} placeholder="N° Tombamento ou N° serie" />
        </BoxInput>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ButtonFilters variant="contained">
            Filtros
            <FilterListOutlinedIcon sx={{ ml: '70px', color: '#A1A5BC' }} />
          </ButtonFilters>
          <ButtonCad>Cadastrar Equipamento</ButtonCad>
        </Box>
      </FindContainer>
    </Container>
  )
}

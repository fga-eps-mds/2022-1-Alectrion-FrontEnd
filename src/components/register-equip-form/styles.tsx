import { styled as styledSystem } from '@mui/system'
import { Card, InputLabel, Select, TextField } from '@mui/material'
import styled from 'styled-components'

export const StyledCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    alignSelf: 'center'
  },
  boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
  maxWidth: '1200px',
  maxHeight: '626px',
  borderRadius: '10px',
  marginLeft: '160px',
  marginTop: '226px',
  backgroundColor: theme.palette.primary.light
}))

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 76px 76px 76px;
  row-gap: 39px;
  align-content: center;
`

export const StyledTextField = styledSystem(TextField)(({ theme }) => ({
  borderRadius: '15px',
  maxWidth: '324px',
  height: '40px',
  marginTop: '-7px',
  color: theme.palette.background.default,
  textShadow: '0 0px 1px rgba(0,0,0,1), 0 0px 1px rgba(0,0,0,1)'
}))

export const StyledSelect = styledSystem(Select)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '8.5px',
  borderRadius: '15px !important',
  color: '#666666',
  width: '324px',
  height: '40px',
  marginLeft: '16px',
  marginTop: '60px'
}))

export const StyledInputLabel = styledSystem(InputLabel)(({ theme }) => ({
  marginTop: '-7px',
  color: theme.palette.background.default,
  textShadow: '0 0px 1px rgba(0,0,0,1), 0 0px 1px rgba(0,0,0,1)'
}))

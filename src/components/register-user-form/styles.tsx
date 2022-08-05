import { styled as styledSystem } from '@mui/system'
import styled from 'styled-components'
import { TextField, Card, Select } from '@mui/material'

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 416px;
  row-gap: 24px;
  align-content: center;
`

export const StyledTextField = styledSystem(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px'
  },
  '& .MuiOutlinedInput-input': {
    backgroundColor: theme.palette.background.default,
    borderRadius: '15px !important'
  },
  maxWidth: '416px',
  height: '40px',
  '& .MuiFormLabel-root': {
    borderRadius: '15px'
  }
}))

export const StyledCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    alignSelf: 'center'
  },
  boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
  maxWidth: '460px',
  maxHeight: '680px',
  borderRadius: '10px',
  backgroundColor: theme.palette.primary.light
}))

export const StyledSelect = styledSystem(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    backgroundColor: theme.palette.background.default,
    padding: '8.5px',
    borderRadius: '15px !important'
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px'
  },
  maxWidth: '416px',
  height: '40px'
}))

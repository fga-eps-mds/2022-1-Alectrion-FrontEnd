import { styled as styledSystem } from '@mui/system'
import styled from 'styled-components'
import { TextField, Card } from '@mui/material'

export const FormStylized = styled.form`
  display: grid;
  grid-template-columns: 416px;
  row-gap: 24px;
  align-content: center;
`

export const TextFieldStylized = styledSystem(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px',
    borderColor: theme.palette.primary.gray
  },
  '& .MuiOutlinedInput-input': {
    backgroundColor: theme.palette.background.default,
    borderRadius: '15px',
    padding: '8.5px'
  },
  maxWidth: '416px',
  color: 'red',
  height: '40px',
  mixHeight: '100%',
  '& .MuiFormLabel-root': {
    Color: theme.palette.background.default
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

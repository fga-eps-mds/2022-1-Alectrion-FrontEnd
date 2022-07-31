import { styled as styledSystem } from '@mui/system'
import styled from 'styled-components'
import { TextField, Card } from '@mui/material'

export const FormStylized = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: space-evenly;
`

export const TextFieldStylized = styledSystem(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px',
    borderColor: theme.palette.primary.gray
  },
  '& .MuiOutlinedInput-input': {
    backgroundColor: theme.palette.background.default,
    borderRadius: '15px'
  },
  maxWidth: '416px',
  height: '40px',
  color: 'red',

  '& .MuiFormLabel-root': {
    Color: theme.palette.background.default
  }
}))

export const StyledCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    alignSelf: 'center'
  },
  maxWidth: '480px',
  maxHeight: '680px',
  borderRadius: '10px',
  backgroundColor: theme.palette.primary.light
}))

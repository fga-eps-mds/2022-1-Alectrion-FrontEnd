import styled from 'styled-components'
import { styled as styledSystem } from '@mui/system'
import { Card, InputLabel, Select, TextField } from '@mui/material'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`
export const StyledCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    alignSelf: 'center'
  },
  boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  maxWidth: '1200px',
  minWidth: '1099.97px',
  margin: 'auto',
  height: 'max-content', // Implica que o conteúdo não será quebrado.
  borderRadius: '10px'
}))

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  //gap: 3rem;
  //flex: 1;
  width: 100%;
  //padding: 2rem;
  padding: 32px;
`
export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: max-content;
  //gap: 2rem;
  gap: 32px;
`

export const StyledInputLabel = styledSystem(InputLabel)(({ theme }) => ({
  marginTop: '-7px'
}))

export const StyledSelect = styledSystem(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    backgroundColor: theme.palette.background.default,
    padding: '8.5px',
    borderRadius: '15px !important',
    color: '#666666'
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px'
  },
  backgroundColor: theme.palette.background.default,
  borderRadius: '15px !important',
  height: '40px',
  width: '324px'
}))

export const StyledTextField = styledSystem(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px !important'
  },
  '& .MuiOutlinedInput-input': {
    borderRadius: '15px !important',
    backgroundColor: theme.palette.background.default,
    height: '7.5px'
  },
  maxWidth: '324px',
  '& .MuiInputLabel-root': {
    marginTop: '-7px'
  }
}))

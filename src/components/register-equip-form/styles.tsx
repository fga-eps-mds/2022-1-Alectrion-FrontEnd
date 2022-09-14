import { styled as styledSystem } from '@mui/system'
import { Card, InputLabel, Select, TextField, Typography } from '@mui/material'
import styled from 'styled-components'

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
  width: '1200px',
  margin: 'auto',
  height: 'max-content'
}))

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: max-content;
  gap: 3rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 2rem;
  > button {
    min-width: 320px;
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 1;
  width: 100%;
  padding: 2rem;
`

export const StyledTextField = styledSystem(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px'
  },
  '& .MuiOutlinedInput-input': {
    backgroundColor: theme.palette.background.default,
    borderRadius: '15px !important',
    height: 12
  },
  '& .MuiFormLabel-root': {
    transform: 'none',
    position: 'relative',
    marginBottom: '4px',
    border: 'none',
    color: '#fff'
  }
}))

export const StyledDescTextField = styledSystem(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px !important'
  },
  '& .MuiOutlinedInput-input': {
    borderRadius: '15px !important',
    backgroundColor: theme.palette.background.default,
    height: '110px'
  },
  maxWidth: '1126px',
  '& .MuiFormControl-root': {
    marginTop: '-7px',
    color: theme.palette.background.default,
    textShadow: '0 0px 1px rgba(0,0,0,1), 0 0px 1px rgba(0,0,0,1)'
  },
  '& .MuiInputLabel-root': {
    marginTop: '40px',
    marginLeft: '40px'
  }
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
  width: '320px'
}))

export const StyledInputLabel = styledSystem(InputLabel)(({ theme }) => ({
  marginTop: '-7px'
}))

export const StyledTypography = styledSystem(Typography)(({ theme }) => ({
  textShadow: '0 0px 1px rgba(0,0,0,1), 0 0px 1px rgba(0,0,0,1)'
}))

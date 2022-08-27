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
  marginTop: '338px',
  backgroundColor: theme.palette.primary.light
}))

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 118px 118px 118px;
  row-gap: 35px;
  grid-row-gap: 75px;
  align-content: center;
`

export const StyledTextField = styledSystem(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px !important'
  },
  '& .MuiOutlinedInput-input': {
    borderRadius: '15px !important',
    backgroundColor: theme.palette.background.default,
    height: '10px'
  },
  width: '324px',
  '& .MuiFormControl-root': {
    marginTop: '-7px',
    color: theme.palette.background.default,
    textShadow: '0 0px 1px rgba(0,0,0,1), 0 0px 1px rgba(0,0,0,1)'
  }
}))

export const StyledSelect = styledSystem(Select)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '15px !important',
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

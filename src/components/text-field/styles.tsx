// import styled from 'styled-components'
import { styled as styledSystem } from '@mui/system'
import { TextField } from '@mui/material'

export const StyledTextField = styledSystem(TextField)(({ theme }) => ({
  maxWidth: '416px',
  height: '40px',
  marginTop: '0px',
  marginBottom: '0px',

  '& .MuiFormLabel-root': {
    Color: theme.palette.background.default
    // Color: '#FFF'
  },
  '& .MuiOutlinedInput-input': {
    backgroundColor: theme.palette.background.default,
    borderRadius: '15px',
    padding: '8.5px'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px',
    borderColor: theme.palette.primary.gray
  }
}))

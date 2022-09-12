import { styled as styledSystem } from '@mui/system'
import { TextField } from '@mui/material'

export const StylesTextField = styledSystem(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '15px',
  marginTop: '40px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px'
  },
  '& .MuiInputLabel-shrink': {
    marginTop: '-7px',
    color: theme.palette.background.default,
    textShadow: '0 0px 1px rgba(0,0,0,1), 0 0px 1px rgba(0,0,0,1)'
  }
}))

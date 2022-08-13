import { styled as styledSystem } from '@mui/system'
import { TextField } from '@mui/material'

export const StyledTextField = styledSystem(TextField)(({ theme }) => ({
  // maxWidth: '416px',
  // height: '40px',
  marginTop: '0px',
  marginBottom: '0px',

  '& .MuiFormLabel-root': {
    // Color: theme.palette.background.default,
    borderRadius: '15px'
  },
  '& .MuiOutlinedInput-input': {
    backgroundColor: theme.palette.background.default,
    borderRadius: '15px !important'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px'
    // borderColor: theme.palette.primary.gray
  },
  '& .MuiInputLabel-shrink': {
    marginTop: '-7px',
    color: theme.palette.background.default
    // textShadow: '0 0px 1px rgba(0,0,0,1), 0 0px 1px rgba(0,0,0,1)'
  }
}))

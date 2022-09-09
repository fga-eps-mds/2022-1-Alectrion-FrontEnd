import { styled as styledSystem } from '@mui/system'
import { Select } from '@mui/material'

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
  height: '40px',
  '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
    marginLeft: '2px'
  }
}))

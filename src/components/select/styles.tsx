import { styled as styledSystem } from '@mui/system'
// import styled from 'styled-components'
import { Select } from '@mui/material'

export const StyledSelect = styledSystem(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    backgroundColor: theme.palette.background.default,
    padding: '8.5px',
    borderRadius: '15px'
    // borderRadiusColor: '#3C4B54'
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '15px'
  },
  borderRadius: '15px',

  maxWidth: '416px',
  height: '40px'
}))

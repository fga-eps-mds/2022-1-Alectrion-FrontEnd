import { styled as styledSystem } from '@mui/system'
import { Button } from '@mui/material'

export const StyledButton = styledSystem(Button)(({ theme }) => ({
  maxWidth: '416px',
  height: '40px',
  borderRadius: '15px',
  boxShadow: '0 5px 10px rgba(0,0,0,0.45)'
}))

import { styled as styledSystem } from '@mui/system'
import { Button } from '@mui/material'

export const StyledButton = styledSystem(Button)(({ theme }) => ({
  maxWidth: '416px',
  borderRadius: '15px'
}))

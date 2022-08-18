import { styled as styledSystem } from '@mui/system'
import { Card } from '@mui/material'

export const StyledCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    alignSelf: 'center'
  },
  boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
  width: '1200px',
  height: '480px',
  borderRadius: '10px',
  left: '167px',
  top: '285px',
  backgroundColor: theme.palette.primary.light
}))

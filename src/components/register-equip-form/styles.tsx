import { styled as styledSystem } from '@mui/system'
import { Card } from '@mui/material'
import styled from 'styled-components'

export const StyledCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    alignSelf: 'center'
  },
  boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
  maxWidth: '1200px',
  maxHeight: '626px',
  borderRadius: '10px',
  marginLeft: '167px',
  marginTop: '285px',
  backgroundColor: theme.palette.primary.light
}))

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 324px;
  row-gap: 35px;
  align-content: center;
`

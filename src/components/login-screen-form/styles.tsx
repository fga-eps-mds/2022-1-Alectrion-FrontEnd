import { Card } from '@mui/material'
import styled from 'styled-components'
import { styled as styledSystem } from '@mui/system'

export const FormStyled = styled.form`
  display: grid;
  //grid-template-columns: 416px;
  //row-gap: 24px;
  align-content: center;
  width: 500px;
  height: 600px;
  align-self: center;
`

export const StyledCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    width: '500px',
    height: '600px',
    padding: '0px',
    paddingBottom: '0px'
  },
  borderRadius: '10px',

  backgroundColor: theme.palette.primary.light
}))

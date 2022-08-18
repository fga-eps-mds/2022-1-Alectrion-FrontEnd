import { Card } from '@mui/material'
import styled from 'styled-components'
import { styled as styledSystem } from '@mui/system'

export const FormStyled = styled.form`
  display: grid;
  row-gap: 26px;
  align-content: center;
  width: 500px;
  height: 600px;
  align-self: center;
  padding-right: 88px;
  padding-left: 88px;
`

export const StyledCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    width: '100%',
    height: '100%'
  },
  borderRadius: '10px',
  marginTop: '121px',
  marginBottom: '50px',
  // boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.3)',

  // backgroundColor: theme.palette.primary.light
  // backgroundColor: 'rgba(128, 128, 128, 0.3)'
  backgroundColor: '#3c4b54'
}))

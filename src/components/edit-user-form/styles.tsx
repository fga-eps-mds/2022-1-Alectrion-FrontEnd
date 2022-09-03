import styled from 'styled-components'
import { styled as styledSystem } from '@mui/system'
import { Card } from '@mui/material'

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 416px;
  row-gap: 24px;
  align-content: center;
  width: 416px;
  //height: 616px;
  align-self: center;
`
export const StyledCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    width: '416px',
    // height: '612,5px',
    padding: '0px',
    // paddingBottom: '0px',
    margin: '32px'
  },
  // marginTop: '283px',
  lignSelf: 'center',
  justifyContent: 'center',
  boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
  width: '480px',
  height: '612,5px',
  borderRadius: '10px',
  backgroundColor: theme.palette.primary.light
}))

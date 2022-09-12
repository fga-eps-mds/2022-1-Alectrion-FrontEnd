import styled from 'styled-components'
import { styled as styledSystem } from '@mui/system'
import { Card } from '@mui/material'
import Box from '@mui/material/Box'

export const FormStyled = styled.form`
  display: Gid;
  //column-gap: 66px;
  //width: 1104px;
  //padding: 0px;
`

export const StyledCard = styledSystem(Card)(({ theme }) => ({
  lignSelf: 'center',
  justifyContent: 'center',
  boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
  width: '1200px',
  height: '496px',
  borderRadius: '10px',
  backgroundColor: theme.palette.primary.light
}))

export const BiggestBox = styledSystem(Box)(({ theme }) => ({
  display: 'flex',
  columnGap: '66px',
  width: '1104px',
  padding: '0px'
}))

export const StyledBox = styledSystem(Box)(({ theme }) => ({
  width: '324px',
  display: 'grid',
  rowGap: '48px',
  gridTemplateColumns: '324px'
}))

export const DescriptionFieldBox = styledSystem(Box)(({ theme }) => ({
  // width: '1104px',
  // height: '96px'
}))

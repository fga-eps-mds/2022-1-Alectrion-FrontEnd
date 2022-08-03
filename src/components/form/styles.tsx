import styled from 'styled-components'
import { styled as styledSystem } from '@mui/system'
import { Card } from '@mui/material'

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 416px;
  row-gap: 24px;
  align-content: center;
`
export const StyledCard = styledSystem(Card)(({ theme }) => ({
  '& .MuiCardContent-root': {
    alignSelf: 'center'
    // padding: '32px'
  },
  boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
  maxWidth: '460px',
  maxHeight: '680px',
  borderRadius: '10px',
  backgroundColor: theme.palette.primary.light
}))

// export const FormStyled = styled.form`
//   margin: 251px 460px;
//   min-width: 480px;
//   min-height: 680px;
//   //max-width: '460px';
//   //max-height: '680px';
//   background-color: #3c4b54;
//   border-radius: 10px;
//   box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
//   align-items: center;
//   //align-self: center;
//   //display: flex;
//   //grid-template-columns: 416px;
//   //row-gap: 24px;
//   //align-content: normal;
// `
// // export const StyledCard = styledSystem(Card)(({ theme }) => ({
// //   '& .MuiCardContent-root': {
// //     // alignSelf: 'center'
// //   },
// //   display: 'flex',
// //   justifyContent: 'center'

// //   // boxShadow: '0 8px 10px rgba(0,0,0,0.45)',
// //   // maxWidth: '460px',
// //   // maxHeight: '680px'
// //   // backgroundColor: theme.palette.primary.light
// // }))

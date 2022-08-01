// import { styled as styledSystem } from '@mui/system'
// import { Button } from '@mui/material'

// export const StyledButton = styledSystem(Button)(({ theme }) => ({
//   maxWidth: '416px',
//   height: '40px',
//   borderRadius: '15px',
//   boxShadow: '0 5px 10px rgba(0,0,0,0.45)'
// }))

// export const StyledReturnButton = styledSystem(Button)(({ theme }) => ({
//   maxWidth: '416px',
//   height: '40px',
//   borderRadius: '15px',
//   backgroundColor: theme.palette.background.default,
//   boxShadow: '0 5px 10px rgba(0,0,0,0.45)'
// }))

import { Button, ButtonProps, css, styled } from '@mui/material'

export type Props = ButtonProps & {
  styledColor: string
  textColor?: string
}

export const StyledTestButton = styled(Button)<Props>(
  ({ theme, styledColor, textColor }) => css`
    background: ${styledColor};
    color: ${textColor};
  `
)

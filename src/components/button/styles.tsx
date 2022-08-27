import { Button, ButtonProps, css, styled } from '@mui/material'

export type Props = ButtonProps & {
  styledColor?: string
  textColor?: string
}

export const StyledTestButton = styled(Button)<Props>(
  ({ theme, styledColor, textColor }) => css`
    background: ${styledColor};
    color: ${textColor};
    border-radius: 15px;
    box-shadow: 0 6px 4px -4px black;
  `
)

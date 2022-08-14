import { Button, ButtonProps, css, styled } from '@mui/material'

export type Props = ButtonProps & {
  styledColor?: string
  textColor?: string
  marginTop?: string
  marginBottom?: string
}

export const StyledTestButton = styled(Button)<Props>(
  ({ theme, styledColor, textColor, marginTop, marginBottom }) => css`
    background: ${styledColor};
    color: ${textColor};
    border-radius: 15px;
    box-shadow: 0 6px 4px -4px black;
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
  `
)

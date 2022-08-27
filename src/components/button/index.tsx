import { ButtonProps } from '@mui/material'
import { Props, StyledTestButton } from './styles'

export type StyledButton = ButtonProps & Props

export const Button = (props: StyledButton) => {
  return <StyledTestButton {...props}>{props.children}</StyledTestButton>
}

import '@emotion/react'
import { ThemeOptions } from '@mui/material'
import { theme } from './src/styles/theme'

type DefaultTheme = typeof theme & ThemeOptions

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends DefaultTheme {}
}

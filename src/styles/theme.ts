import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5289B5',
      light: '#1F3541',
      dark: '#1F3541'
    },
    background: {
      default: '#FFF',
      paper: '#16878C'
    },
    grey: {
      '500': '#D9D9D9',
      '100': '#F6F6F6',
      '900': '#000000'
    },
    error: {
      main: '#FF0000'
    }
  }
})

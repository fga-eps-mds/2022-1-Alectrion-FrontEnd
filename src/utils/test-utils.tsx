import { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../styles/theme'
import { ToastContainer } from 'react-toastify'

interface PropTypes {
  children: ReactNode
}

const Providers = ({ children }: PropTypes) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      {children}
    </ThemeProvider>
  )
}

export default Providers

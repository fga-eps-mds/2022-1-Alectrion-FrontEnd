import { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../styles/theme'
import { ToastContainer } from 'react-toastify'
import { AppRoutes } from '../routes/routes'

interface PropTypes {
  children: ReactNode
}

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn()
}))

const Providers = ({ children }: PropTypes) => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <ToastContainer />
      {children}
    </ThemeProvider>
  )
}

export default Providers

import { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../styles/theme'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
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
      <ToastContainer />
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  )
}

export default Providers

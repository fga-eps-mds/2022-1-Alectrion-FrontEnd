import { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../styles/theme'
import { ToastContainer } from 'react-toastify'
import { MemoryRouter } from 'react-router-dom'
interface PropTypes {
  children: ReactNode
  location?: any
}

// function mockFunction() {
//   const original = require.requireActual('react-router-dom')
//   return {
//     ...original,
//     useLocation: jest.fn().mockReturnValue({
//       pathname: '/another-route',
//       search: '',
//       hash: '',
//       state: null,
//       key: '5nvxpbdafa'
//     })
//   }
// }
// jest.mock('react-router-dom', () => mockFunction())]

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn()
}))

const Providers = ({ children, location }: PropTypes) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <MemoryRouter initialEntries={[location]}>{children}</MemoryRouter>
    </ThemeProvider>
  )
}

export default Providers

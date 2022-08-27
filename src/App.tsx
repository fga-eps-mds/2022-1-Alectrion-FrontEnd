import { CssBaseline, ThemeProvider } from '@mui/material'
import { SignRoutes } from './routes/routes'
import { theme } from './styles/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { AuthProvider } from './contexts/auth'
import * as React from 'react'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <SignRoutes />
      </AuthProvider>
      <ToastContainer />
    </ThemeProvider>
  )
}
export default App

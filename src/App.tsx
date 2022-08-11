import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRoutes } from './routes/routes'
import { theme } from './styles/theme'
import { ToastContainer } from 'react-toastify'
import NavBar from './components/NavBar/index'

import 'react-toastify/dist/ReactToastify.min.css'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <CssBaseline />
      <AppRoutes />
      <ToastContainer />
    </ThemeProvider>
  )
}
export default App

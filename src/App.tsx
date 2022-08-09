import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRoutes } from './routes/routes'
import { theme } from './styles/theme'
import NavBar from './components/NavBar/index'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App

import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRoutes } from './routes/routes'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App

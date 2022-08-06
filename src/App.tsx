import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRoutes } from './routes/routes'
import { theme } from './styles/theme'
import BarraNavegacao from './components/barraNavegacao/index'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BarraNavegacao />
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App

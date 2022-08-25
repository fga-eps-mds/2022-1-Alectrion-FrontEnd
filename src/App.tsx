import { CssBaseline, ThemeProvider } from '@mui/material'
import { SignRoutes } from './routes/routes'
import { theme } from './styles/theme'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { AuthContext, AuthProvider } from './contexts/auth'
import * as React from 'react'

function App() {
  const { Logout } = React.useContext(AuthContext)

  React.useEffect(() => {
    let time: any

    window.onload = resetTimer
    document.onmousemove = resetTimer
    document.onkeydown = resetTimer

    if (time > 1500000) {
      toast.warn(
        'Você será desconectado por inatividade em 5 minutos, clique aqui para parar!',
        {
          position: 'top-right',
          autoClose: 5000000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined
        }
      )
    }

    function doSomething() {
      Logout()
    }

    function resetTimer() {
      clearTimeout(time)
      time = setTimeout(doSomething, 1800000)
    }
  })

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

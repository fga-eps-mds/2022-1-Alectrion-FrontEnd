import { CssBaseline, ThemeProvider } from '@mui/material'
import { SignRoutes } from './routes/routes'
import { theme } from './styles/theme'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { AuthProvider, AuthContext } from './contexts/auth'
import * as React from 'react'
import events from 'events'

function App() {
  const { Logout } = React.useContext(AuthContext)
  const events2 = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
  ];


  let timer: any

  const handleLogoutTimer = () => {
    timer = setTimeout(() => {
      resetTimer()
      Object.values(events2).forEach((item) => {
        window.removeEventListener(item, resetTimer)
      })
      toast.warn(
        'Você será desconectado por inatividade em 5 minutos, clique aqui para continuar logado!',
        {
          position: 'top-right',
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined
        }
      )
      setTimeout(() => {
        Logout()
   
      }, 10000)
    }, 5000)
  }

  const resetTimer = () => {
    if (timer) clearTimeout(timer)
  }

  React.useEffect(() => {
    Object.values(events2).forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer()
        handleLogoutTimer()
      })
    })
  }, [])

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

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom'
import UserLoginScreen from '../pages/user-login-screen'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import Home from '../pages/Home'
import UserRegister from '../pages/user-register'
import EditUser from '../pages/EditUser'

// import NavBar from '../components/NavBar'

type AuthRouteProps = {
  children: ReactNode
}

export const SignRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoutes>
              <Home />
            </AuthRoutes>
          }
        />
        <Route
          path="/user-register"
          element={
            <AuthRoutes>
              <UserRegister />
            </AuthRoutes>
          }
        />
        <Route
          path="/edit-user"
          element={
            <AuthRoutes>
              <EditUser />
            </AuthRoutes>
          }
        />
        <Route path="/login" element={<UserLoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export function AuthRoutes({ children }: AuthRouteProps): any {
  const { isAuthenticated } = useContext(AuthContext)
  const location = useLocation()
  console.log(isAuthenticated)

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" state={{ from: location }} />
  // }
  // return children
  return isAuthenticated === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  )
}

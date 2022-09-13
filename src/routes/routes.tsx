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
import { Task } from '../pages/task/index'
import UserRegister from '../pages/user-register'
import ScreenUser from '../pages/user-screen'
import EditUser from '../pages/EditUser'
import NavBar from '../components/NavBar'
import EquipmentEditScreen from '../pages/equipment-edit-screen'

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
              <NavBar />
              <Task />
            </AuthRoutes>
          }
        />
        <Route
          path="/user-register"
          element={
            <AuthRoutes>
              <NavBar />
              <UserRegister />
            </AuthRoutes>
          }
        />
        <Route
          path="/users"
          element={
            <AuthRoutes>
              <NavBar />
              <ScreenUser />
            </AuthRoutes>
          }
        />
        <Route
          path="/edit-user"
          element={
            <AuthRoutes>
              <NavBar />
              <EditUser />
            </AuthRoutes>
          }
        />
        <Route path="/login" element={<UserLoginScreen />} />
        <Route
          path="/edit-equipment"
          element={
            <AuthRoutes>
              <NavBar />
              <EquipmentEditScreen />
            </AuthRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export function AuthRoutes({ children }: AuthRouteProps): any {
  const { isAuthenticated } = useContext(AuthContext)
  const location = useLocation()
  return isAuthenticated === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  )
}

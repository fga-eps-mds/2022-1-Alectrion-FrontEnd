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
<<<<<<< HEAD
import ScreenEquipaments from '../pages/ScreenEquipaments'
=======
import OrderRegister from '../pages/order-service'
import { CircularProgress } from '@mui/material'
>>>>>>> 78824f635346f58cdde54f0ceef87f7560cc1981

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
        <Route
<<<<<<< HEAD
          path="/equipaments"
          element={
            <AuthRoutes>
              <NavBar />
              <ScreenEquipaments />
            </AuthRoutes>
          }
        />
        <Route
          path="/users"
          element={
            <AuthRoutes>
              <NavBar />
              <ScreenUser />
=======
          path="/create-order-service"
          element={
            <AuthRoutes>
              <NavBar />
              <OrderRegister />
>>>>>>> 78824f635346f58cdde54f0ceef87f7560cc1981
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
  return isAuthenticated === 'authenticated' ? (
    children
  ) : isAuthenticated === 'waiting' ? (
    <CircularProgress />
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  )
}

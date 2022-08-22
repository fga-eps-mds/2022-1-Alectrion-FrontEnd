import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Task } from '../pages/task'
import UserRegister from '../pages/user-register'
import EditUser from '../pages/EditUser'
import NavBar from '../components/NavBar'
import UserLoginScreen from '../pages/user-login-screen'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/user-login-screen" element={<UserLoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

// import { SignRoutes } from './sign-routes'
// import { OtherRoutes } from './other-routes'
// import { useContext } from 'react'
// import { AuthContext } from '../contexts/auth'

// export const AppRoutes = () => {
//   const { isAuthenticated } = useContext(AuthContext)
//   return isAuthenticated ? <OtherRoutes /> : <SignRoutes />
// }

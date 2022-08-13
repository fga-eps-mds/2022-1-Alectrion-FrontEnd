import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import UserRegister from '../pages/user-register'
import EditUser from '../pages/EditUser'
import NavBar from '../components/NavBar'
import UserLoginScreen from '../pages/user-login-screen'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/user-login-screen" element={<UserLoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

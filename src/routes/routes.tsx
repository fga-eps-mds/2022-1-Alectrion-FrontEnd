import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import UserRegister from '../pages/user-register'
import ScreenUser from '../pages/UserScreen'
import EditUser from '../pages/EditUser'
import NavBar from '../components/NavBar'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/users" element={<ScreenUser />} />
        <Route path="/edit-user" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

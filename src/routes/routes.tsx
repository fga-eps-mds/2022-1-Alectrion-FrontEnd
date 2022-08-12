import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import UserRegister from '../pages/user-register'
import ScreenUser from '../pages/TelaUsuarios'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/users" element={<ScreenUser />} />
      </Routes>
    </BrowserRouter>
  )
}

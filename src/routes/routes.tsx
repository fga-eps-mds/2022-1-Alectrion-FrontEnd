import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserRegister from '../pages/user-register'
import ScreenUser from '../pages/TelaUsuarios'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/users" element={<ScreenUser />} />
      </Routes>
    </BrowserRouter>
  )
}

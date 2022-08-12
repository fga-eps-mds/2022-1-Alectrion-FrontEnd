import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserRegister from '../pages/user-register'
import EditUser from '../pages/EditUser'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/edit-user" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

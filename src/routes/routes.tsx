import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserRegister from '../pages/user-register'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  )
}

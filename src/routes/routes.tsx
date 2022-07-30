import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Equipaments from '../pages/Equipaments'
import Home from '../pages/Home'
import UserRegister from '../pages/user-register'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipaments" element={<Equipaments />} />
        <Route path="/user-register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  )
}

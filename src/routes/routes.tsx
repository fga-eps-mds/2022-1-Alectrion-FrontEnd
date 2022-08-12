import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import UserRegister from '../pages/user-register'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  )
}

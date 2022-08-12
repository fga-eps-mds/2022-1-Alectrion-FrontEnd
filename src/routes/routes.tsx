import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import UserRegister from '../pages/user-register'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/user-register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  )
}

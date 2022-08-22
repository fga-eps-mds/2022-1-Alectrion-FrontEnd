import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import UserRegister from '../pages/user-register'
import EditUser from '../pages/EditUser'
import NavBar from '../components/NavBar'

export const OtherRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/edit-user" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Task } from '../pages/task'
import UserRegister from '../pages/user-register'
import ScreenUser from '../pages/TelaUsuarios'
import EditUser from '../pages/EditUser'
import NavBar from '../components/NavBar'
import ScreenEquipaments from '../pages/ScreenEquipaments'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/users" element={<ScreenUser />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/equipaments" element={<ScreenEquipaments />} />
      </Routes>
    </BrowserRouter>
  )
}

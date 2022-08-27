import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Task } from '../pages/task'
import UserRegister from '../pages/user-register'
import EditUser from '../pages/EditUser'
import NavBar from '../components/NavBar'
import EquipRegister from '../pages/equipment-register'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/equipment-register" element={<EquipRegister />} />
        <Route path="/edit-user" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

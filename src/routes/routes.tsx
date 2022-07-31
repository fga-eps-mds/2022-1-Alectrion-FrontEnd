import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Equipaments from '../pages/Equipaments'
import Home from '../pages/Home'
import EditUser from '../pages/EditUser'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipaments" element={<Equipaments />} />
        <Route path="/edit-user" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

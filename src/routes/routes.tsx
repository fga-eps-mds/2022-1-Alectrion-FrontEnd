import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Equipaments from '../pages/Equipaments'
import Home from '../pages/Home'
import ScreenUser from '../pages/TelaUsuarios'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipaments" element={<Equipaments />} />
        <Route path="/screen-user" element={<ScreenUser />} />
      </Routes>
    </BrowserRouter>
  )
}

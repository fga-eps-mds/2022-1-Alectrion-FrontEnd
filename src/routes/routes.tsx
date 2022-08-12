import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskScreen from '../pages/task-screen'
import UserRegister from '../pages/user-register'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/home" element={<TaskScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

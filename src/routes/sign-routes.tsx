import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLoginScreen from '../pages/user-login-screen'

export const SignRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

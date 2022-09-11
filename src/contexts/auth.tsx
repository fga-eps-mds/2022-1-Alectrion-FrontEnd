import { createContext, useState, ReactNode, useEffect } from 'react'
import api from '../api/config'

type SignInProps = {
  username?: string
  password?: string
}

// type ProfileType = {
//   newRole: string
// }

type AuthContextData = {
  user: object | null
  isAuthenticated: boolean
  Login: (credentials: SignInProps) => Promise<void>
  Logout(): void
  ProfileChanged(arg?: string): void
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<object | null>(null)

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user')
    const storagedToken = localStorage.getItem('@App:token')

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser))
      api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`
    }
  }, [])

  async function Login(userData: object) {
    const response = await api.post('/user/login', userData)
    const { token, expireIn, email, name, role } = response.data

    setUser({ token, expireIn, email, name, role })
    localStorage.setItem(
      '@App:user',
      JSON.stringify({ token, expireIn, email, name, role })
    )
    localStorage.setItem('@App:token', token)

    api.defaults.headers.common.Authorization = 'Bearer ' + token
  }

  function Logout() {
    setUser(null)
    localStorage.clear()
    sessionStorage.clear()
  }

  function ProfileChanged(newRole: string) {
    setUser({ role: newRole })
    console.log(user)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, Login, ProfileChanged, Logout }}>
      {children}
    </AuthContext.Provider>
  )
}

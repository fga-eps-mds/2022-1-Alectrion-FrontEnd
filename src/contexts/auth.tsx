import { createContext, useState, ReactNode, useEffect } from 'react'
import api from '../api/config'

type SignInProps = {
  username: string
  password: string
}

type AuthContextData = {
  user: object | null
  isAuthenticated: boolean
  Login: (credentials: SignInProps) => Promise<void>
  Logout(): void
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<object | null>(null)
  // const isAuthenticated = !!user

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user')
    const storagedToken = sessionStorage.getItem('@App:token')

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser))
      api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`
    }
  }, [])

  async function Login({ username, password }: SignInProps) {
    const response = await api.post('/user/login', {
      username,
      password
    })
    console.log('a requisição foi feita!')

    const { token, expireIn, email, name, role } = response.data

    setUser({ token, expireIn, email, name, role })

    sessionStorage.setItem(
      '@App:user',
      JSON.stringify({ token, expireIn, email, name, role })
    )
    sessionStorage.setItem('@App:token', token)

    api.defaults.headers.common.Authorization = 'Bearer ' + token
  }

  function Logout() {
    setUser(null)
    localStorage.clear()
    sessionStorage.clear()
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: Boolean(user), user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  )
}

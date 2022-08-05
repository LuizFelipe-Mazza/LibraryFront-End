import { createContext, ReactNode, useEffect, useState } from 'react'
import api from '../Services/axios'
import { login } from '../Services/userApi'

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({})

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState({})

  useEffect(() => {
    async function loadingStorageData() {
      const storageUser = localStorage.getItem('@Auth:user')
      const storageToken = localStorage.getItem('@Auth:token')

      if (storageUser && storageToken) {
        setUser(storageUser)
      }
    }
    loadingStorageData()
  }, [])

  const signIn = async (email: string, password: string) => {
    const response = await login(email, password)

    if (response.data.error) {
      alert(response.data.error)
    } else {
      setUser(response.data)
      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.data.token}`
      localStorage.setItem('@Auth:token', response.data.token)
      localStorage.setItem('@Auth:user', response.data.user)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

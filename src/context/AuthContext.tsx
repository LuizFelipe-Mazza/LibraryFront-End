import { createContext, ReactNode, useEffect, useState } from 'react'

type Link = string

type User = {
  id: number
  id_persona?: number
  avatar?: Link
  name: string
}
type AuthContextType = {
  user: User | undefined
  signInWithGoogle: () => Promise<void>
}
type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const unsuscribe = (user: any) => {
      if (user) {
        const { displayName, photURL, id } = user
        if (!displayName || !photURL) {
          throw new Error('Missing information from Google Account')
        }
        setUser({
          id: id,
          name: displayName,
          avatar: photURL,
        })
      }
    }
    return () => {
      unsuscribe('')
    }
  }, [])
  // return (
  //   <AuthContext.Provider value={{ user }}>
  //     {props.children}
  //   </AuthContext.Provider>
  // )
}

/* eslint-disable import/first */

import { createContext, useState } from 'react'
import { login } from '../Services/userApi'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const loginContext = createContext({})
export function Context() {
    
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function SignIn(event: any) {
    event.preventDefault()

    if (!email || !password) {
      Swal.fire({
        titleText: 'Os campos estão Vazios',
        confirmButtonColor: '#835afd',
        confirmButtonText: 'Tudo Bem',
        color:'#fff',
        background:'#202020'
      })
    }
    const response = await login(email, password)
    localStorage.setItem('@Auth:token', (response.data.token))

    if (response.status >= 400) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        color:'#fff',
        background:'#202020',
        text: 'E-mail ou senha Incorretos!',
        footer: '<a href="">Deseja Registrar-se?</a>',
      })
    }
    await navigate('/')
  }

  return {
    SignIn,
    email,
    setEmail,
    password,
    setPassword,
  }
}

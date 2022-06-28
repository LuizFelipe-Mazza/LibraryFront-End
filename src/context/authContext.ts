import { useNavigate } from 'react-router-dom'

export async function HomeClick(event: any) {
  const navigate = useNavigate()
  event.preventDefault()
  await navigate('/')
}
export async function LoginClick(event: any) {
    const navigate = useNavigate()
    event.preventDefault()
    await navigate('/login')
  }

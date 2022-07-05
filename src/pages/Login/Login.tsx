import { Button, Input } from '../../components'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'

import styles from '../../css/login.module.css'
export function Login() {
  const navigate = useNavigate()

  async function HomeClick(event: any) {
    event.preventDefault()
    await navigate('/')
  }

  return (
    <div className={styles.login}>
      <form className={styles.form} action="">
        <div className={styles.containerSigIn}>
          <h1>
            Log<span>In</span>
            <small>Library</small>
          </h1>

          <div className={styles.emailField}>
            <Input name="Insira o E-mail" />
          </div>

          <div className={styles.passwordField}>
            <Input type="password" name="Insira a Senha" />

            <div className={styles.links}>
              <a href=".">Esqueci a Senha</a>
              <a href="/register">Cadastrar</a>
            </div>
            <Button onClick={HomeClick}>Entrar</Button>
            <GoogleLogin
              className={styles.btnGoogle}
              clientId="512809359891-i53ug9f9k324m38d1tlkai6jb9ttuktt.apps.googleusercontent.com"
              buttonText="Continuar com Google"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

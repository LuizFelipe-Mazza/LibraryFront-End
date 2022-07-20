import { Button, Input } from '../../components'
import { GoogleLogin } from 'react-google-login'
import { Context } from '../../context/Context'

import 'sweetalert2/src/sweetalert2.scss'
import './login.scss'

export function Login() {
  const { email, setEmail, password, setPassword, SignIn } = Context()
  return (
    <>
      <form action="" className="formLogin">
        <div className="containerSigIn">
          <h1>
            Log<span>In</span>
            <small>Library</small>
          </h1>

          <div className="emailField">
            <Input
              name="Insira o E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="passwordField">
            <Input
              type="password"
              name="Insira a Senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <div className="links">
              <a href=".">Esqueci a Senha</a>
              <a href="/register">Cadastrar</a>
            </div>
            <Button onClick={SignIn}>Entrar</Button>
            <GoogleLogin
              className="btnGoogle"
              clientId="512809359891-i53ug9f9k324m38d1tlkai6jb9ttuktt.apps.googleusercontent.com"
              buttonText="Continuar com Google"
            />
          </div>
        </div>
      </form>
    </>
  )
}

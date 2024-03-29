import { Button} from '../../components'
import { GoogleLogin } from 'react-google-login'
import { Context } from '../../context/Context'

import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import 'sweetalert2/src/sweetalert2.scss'
import './login.scss'

export function Login() {
  const { email, setEmail, password, setPassword, SignIn } = Context()
  return (
    <>
    <div className="containerOfContainer">
      <div className="loginContainer">
        <h1>
          Log<span>in</span>
          <small>Library <MenuBookRoundedIcon className='iconLogin'/> </small>
        </h1>
        <div className="bgLogin">

          <div className="email">
            <h3>Email</h3>
            <input type="text" 
            name='email' 
            placeholder="example23@gmail.com" 
            value={email}
            onChange={event => setEmail(event.target.value)}/>
          </div>

          <div className="password">
            <h3>Senha</h3>
            <input type="password" 
            name='password' 
            placeholder="Insira a Senha" 
            value={password}
            onChange={event => setPassword(event.target.value)}/>
          </div>
          
          <div className="links">

            <div className="forgot">
              <a href="//">Esqueci a Senha</a>
            </div>

            <div className="create">
              <a href="/registeruser">Criar Conta</a>
            </div>

          </div>

          <Button onClick={SignIn}>Entrar</Button>
          
          <div className="or">
          <h4>Ou</h4>
          </div>

          <GoogleLogin
            className="btnGoogle"
            clientId="512809359891-i53ug9f9k324m38d1tlkai6jb9ttuktt.apps.googleusercontent.com"
            buttonText="Continuar com Google"/>

        </div>
      </div>
      </div>
    </>
  )
}

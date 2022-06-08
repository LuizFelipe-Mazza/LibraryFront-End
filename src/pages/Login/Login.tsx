import { Input } from '../../common/components'
import styles from '../../css/login.module.css'
export function Login() {
  return (
    <div className={styles.login}>
      <form action="">
        <div className={styles.containerSigIn}>
            
          <h1>Log<span>In</span></h1>

          <div className={styles.emailField}>
            <Input name="Insira o E-mail" />
          </div>

          <div className={styles.passwordField}>
            <Input name="Insira a Senha" />

            <div className={styles.links}>
              <a href=".">Esqueci a Senha</a>
              <a href=".">Cadastrar</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

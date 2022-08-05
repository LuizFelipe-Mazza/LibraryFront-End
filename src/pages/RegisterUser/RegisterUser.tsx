import { Button, Input } from '../../components'
import './User.scss'

export function RegisterUser(){
    return(
        <>
        <div className="containerUser">
            <div className="User">
                <h1>Criar <span>Conta</span></h1>
                <div className="nameUserField">
                    <h3>Nome</h3>
                    <Input type='text' name='name'placeholder='Nome de Usuário'/>
                </div>
                <div className="emailUserField">
                    <h3>Email</h3>
                    <Input type='text' name='name'placeholder='example23@gmail.com'/>
                </div>
                <div className="passwordUserField">
                    <h3>Senha</h3>
                    <Input type='text' name='name'placeholder='Criar Senha'/>
                </div>
                <div className="confirmPasswordUserField">
                <h3>Confirmar Senha</h3>
                    <Input type='text' name='name'placeholder='Confirmar Senha'/>
                </div>
                <div className="footerButton">
               <Button>Confirmar</Button>
                <div className="linksUser">
                    <p>Já tem um conta?<a href="/login">Faça Login</a></p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
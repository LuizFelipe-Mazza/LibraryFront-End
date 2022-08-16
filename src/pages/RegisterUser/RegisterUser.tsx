import {useState} from 'react'
import { Button, Input } from '../../components'
import './User.scss'
import Swal from "sweetalert2";
import { createUser } from '../../Services/userApi';


export function RegisterUser(){
 const[name, setName] = useState('')
 const[email, setEmail] = useState('')
 const[password, setPassword] = useState('')
 const[confPassword, setConfPassword] = useState('')
    // função para registrar usuário
  async function handleUserRegister(e:any) {
    e.preventDefault()
    if(!email || !name || !password || !confPassword){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Oops...',
            text: 'Preencha todos os campos para concluir o cadastro!',
          })
    }
    if(email === password){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Oops...',
            text: 'email e senha não podem ser parecidas',
          })
    }
    if(email === name){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Oops...',
            text: 'email e nome não podem ser parecidas',
          })
    }
if(password  !== confPassword ){
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Oops...',
        text: 'as senhas não coincidem',
      })
      return
}
    await createUser(name, email, password)
   Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuário cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      
    }
 
   
    return(
        <>
        <div className="containerUser">
            <div className="User">
                <h1>Criar <span>Conta</span></h1>
                <div className="nameUserField">
                    <h3>Nome</h3>
                    <Input type='text' name={'name'} placeholder='Nome de Usuário'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="emailUserField">
                    <h3>Email</h3>
                    <Input type={'email'} name={'email'}placeholder='example23@gmail.com' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="passwordUserField">
                    <h3>Senha</h3>
                    <Input type='password' name={'password'}placeholder='Criar Senha'
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="confirmPasswordUserField">
                <h3>Confirmar Senha</h3>
                    <Input type='password' name={'password'}placeholder='Confirmar Senha'
                    value={confPassword}
                    onChange={e => setConfPassword(e.target.value)}
                    />
                </div>
                <div className="footerButton">
               <Button onClick={handleUserRegister}>Confirmar</Button>
                <div className="linksUser">
                    <p>Já tem um conta?  <a href="/login">Faça Login</a></p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
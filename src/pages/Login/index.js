import React, { useState} from 'react'
import api from '../../services/api'
import Button from '../components/button'
import Input from '../components/input'
import Container from '../components/container'
import {toast} from 'react-toastify'
import '../global.css'
import './styles.css'
import manwithbeardlogo from '../../assets/img/manwithbeardlogo.png'
import { useHistory } from 'react-router-dom'



export default function Login(){
  /**Signup states */
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  /** Login states */
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  /** Use history para navegar o usuario */
  const history = useHistory()

  async function handleSignup(e){
    e.preventDefault()
   
    const createUser = {
      firstName,
      lastName, 
      email,
      password
    }
    try {
      const response = await api.post('/user/create', createUser)
      notify('success', response.data.message)
      setEmail('')
      setFirstName('')
      setLastName('')
      setPassword('')
    } catch (error) {
      notify('error', error)
    }
  }

  async function handleSignin(e){
    e.preventDefault()

    const User = {
      email: emailLogin,
      password: passwordLogin
    }

    try {
      const response = await api.post('/login', User)
      createSession(response)
      notify('success', 'Redirecionando...', 1000)
      setEmailLogin('')
      setPasswordLogin('')
    } catch (error) {
      notify('error', error)
    }
  } 

  async function createSession (infos){
    localStorage.setItem('tkn', JSON.stringify(infos.data))
    history.push('/')
  }

  const notify = (status, text, duration = 5000) => {
    switch (status) {
      case 'success':
        toast.success(text,
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: duration
        })
        break;
      case 'error':
        toast.error(text,
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: duration
        })
        break;
      default:
        toast(text,
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: duration
        },)
        break;
    }
  }

  return (
  <Container>
    <div className="container-login">
      <div className="login">
        <img src={manwithbeardlogo} alt="logo beardman"/>
        <form onSubmit={handleSignin}>
        <h3>Entrar</h3>
          <Input 
            type="email" 
            placeholder="Email"
            value={emailLogin}
            onChange={e=>setEmailLogin(e.target.value)}
            ></Input>
          <Input 
            type="password" 
            placeholder="Senha"
            value={passwordLogin}
            onChange={e=>{setPasswordLogin(e.target.value)}}
            ></Input>
          <Button type="submit" >Entrar</Button>
        </form>
      </div>
      <div className="signup">
        <form onSubmit={handleSignup}>
        <h3>Cadastre-se</h3>
          <Input 
            type="text" 
            placeholder="Nome"
            value={firstName}
            onChange={e=>setFirstName(e.target.value)}
            ></Input>
          <Input 
            type="text" 
            placeholder="Sobrenome"
            value={lastName}
            onChange={e=>setLastName(e.target.value)}
          ></Input>
          <Input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            ></Input>
          <Input 
            type="password" 
            placeholder="Senha"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            ></Input>
          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </div>
  </Container>
  )
}

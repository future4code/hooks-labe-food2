import React from "react";
import { Container } from './styles'
import { useState } from 'react'
import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");


  const getLogin = () => {
    const body = {
      email: login,
      password: password
    }
    // const headers = {
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
   // }
    axios
    .post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login', body)
    .then((res) =>{
      alert("Sucesso")
      console.log(res.data.user)
      setHasAdress(res.data.user.hasAdress)
      localStorage.setItem("token", res.data.token)
      console.log(res.data.token)

    })
    .catch((err) => {
      alert("Usuário não cadastrado.")
    })
  }
  const onChangeLogin = (e) => {
    setLogin(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <Container>
      <h2>Future Eats</h2>
      <p>Entrar</p>
      <input onChange={onChangeLogin} type="text" placeholder="email" />
      <input onChange={onChangePassword} type="text" placeholder="password" />
      <button onClick={() => getLogin()}>Entrar</button>
      <a href="#">Não possui cadastro? Clique aqui.</a>
    </Container>
  );
}

export default Login;
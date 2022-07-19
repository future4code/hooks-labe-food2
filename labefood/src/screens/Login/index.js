import React from "react";
import { Container } from './styles'
import { useState } from 'react'

const Login = () => {
  const [login, setLogin] = useState("")

  const getLogin = () => {
    axios
    .post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login')
  }
  return (
    <Container>
      <h2>Future Eats</h2>
      <p>Entrar</p>
      <input placeholder="email" />
      <input placeholder="password" />
      <button>Entrar</button>
    </Container>
  );
}

export default Login;
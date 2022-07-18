import React from "react";
import { Container } from './styles'

const Login = () => {
  return (
    <Container>
      <input placeholder="email" />
      <input placeholder="password" />
      <button>Entrar</button>
    </Container>
  );
}

export default Login;
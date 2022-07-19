import React, { useState } from "react";
import { Container, FormSignUp } from './styles'

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const login = (event) => {

    const body = {
      name: name,
      email: email,
      cpf: cpf,
      password: password
    }
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangeCpf = (event) => {
    setCpf(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const onChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
  }

  return (
    <Container>
      <FormSignUp onSubmit={login} >
        <input type="text" placeholder="Nome" onChange={onChangeName} value={name} required />
        <input type="email" placeholder="email@email.com" onChange={onChangeEmail} value={email} required />
        <input type="number" placeholder="CPF" onChange={onChangeCpf} value={cpf} pattern={"[0-9]{11}"} />
        <input type="password" placeholder="Senha" onChange={onChangePassword} value={password} required />
        <input type="password" placeholder="Confirme a senha" onChange={onChangeConfirmPassword} value={confirmPassword} required />
        <button>enviar</button>
      </FormSignUp>
    </Container>
  );
}

export default SignUp;
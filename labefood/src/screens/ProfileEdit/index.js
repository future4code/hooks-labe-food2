import React, { useState } from "react";
import { Container, Header, Tittle, ButtonBack } from './styles'
import { TextField, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from "axios"


const ProfileEdit = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")

  const rename = (event) => {
   event.preventDefault()

    const headers = {
      headers: {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikl4TGtBUllHdGg0bHg1WENSTWg3IiwibmFtZSI6Im1heGltaWxpYW5vIiwiZW1haWwiOiJtYXhpQGdtYWlsLmNvbSIsImNwZiI6IjEyMy40NTYuNzg5LTg5IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY1ODQxNzcxMn0.wJheprVGsaeeoOp0pSF8pBkx_nhUV6lC1Wjk8bC5gls"
      }
    }

    const body = {
      name: name,
      email: email,
      cpf: cpf
    }

    axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile"  , body , headers)
      .then((resp) => console.log(resp.data))
      .catch((error) => alert(error.message))
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

  return (
    <Container>
      <Header>
        <ButtonBack><ArrowBackIosNewIcon /></ButtonBack>
        <Tittle>Editar</Tittle>
      </Header>
      <form onSubmit={rename}>
      <TextField
        value={name}
        onChange={onChangeName}
        required
        fullWidth="fullWidth"
        label="Nome"
        placeholder="Nome e sobrenome"
        variante="filled"
      />
      <TextField
        type="email"
        value={email}
        onChange={onChangeEmail}
        required
        fullWidth="fullWidth"
        label="E-mail"
        placeholder="email@email.com"
        variante="filled"
      />
      <TextField
        value={cpf}
        onChange={onChangeCpf}
        required
        fullWidth="fullWidth"
        label="CPF"
        placeholder="000.000.000.00"
        variante="filled"
      />
      <Button
        type="submit"
        fullWidth label="fullWidth"
        size="large"
        variant="contained"
        color="success"
        pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
      >Salvar
      </Button>
      </form>
    </Container>
  );
}

export default ProfileEdit;
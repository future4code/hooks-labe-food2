import React, { useState } from "react";
import { Container, Header, Tittle, ButtonBack } from './styles'
import { TextField, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const ProfileEdit = () => {
    const [name, setName] = useState()
    const [email , setEmail] = useState()
    const [cpf , setCpf] = useState()

  return (
    <Container>
      <Header>
      <ButtonBack><ArrowBackIosNewIcon /></ButtonBack>
      <Tittle>Editar</Tittle>        
      </Header>     
      <TextField
        required
        fullWidth="fullWidth"
        label="Nome"
        placeholder="Nome e sobrenome"
        variante="filled"
      />
      <TextField
        required
        fullWidth="fullWidth"
        label="E-mail"
        placeholder="email@email.com"
        variante="filled"
      />
      <TextField
        required
        fullWidth="fullWidth"
        label="CPF"
        placeholder="000.000.000.00"
        variante="filled"
      />
      <Button
        fullWidth label="fullWidth"
        size="large"
        variant="contained"
        color="success"
      >Salvar
      </Button>
    </Container>
  );
}

export default ProfileEdit;
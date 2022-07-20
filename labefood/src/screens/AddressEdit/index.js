import React from "react";
import { Container , Header , ButtonBack , Tittle} from './styles'
import { TextField, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const AddressEdit = () => {
  return (
    <Container>
      <Header>
        <ButtonBack><ArrowBackIosNewIcon /></ButtonBack>
        <Tittle>Endereço</Tittle>
      </Header>
      <TextField
        required
        fullWidth="fullWidth"
        label="Logradouro"
        placeholder="Rua"
        variante="filled"
      />
      <TextField
        required
        fullWidth="fullWidth"
        label="Número"
        placeholder="72"
        variante="filled"
      />
      <TextField
        required
        fullWidth="fullWidth"
        label="Complemento"
        placeholder="Apto./Bloco"
        variante="filled"
      />
      <TextField
        required
        fullWidth="fullWidth"
        label="Bairro"
        placeholder="Bairro"
        variante="filled"
      />
      <TextField
        required
        fullWidth="fullWidth"
        label="Cidade"
        placeholder="Cidade"
        variante="filled"
      />
      <TextField
        required
        fullWidth="fullWidth"
        label="Cidade"
        placeholder="Cidade"
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

export default AddressEdit;

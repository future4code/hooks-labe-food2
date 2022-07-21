import React, { useState } from "react";
import { Container, Header, ButtonBack, Tittle } from './styles'
import { TextField, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const AddressEdit = () => {
  const [street, setStreet] = useState()
  const [number, setNumber] = useState()
  const [complement, setComplement] = useState()
  const [district, setDistrict] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()

  const onChangeStreet = (event) => {
    setStreet(event.target.value)
  }
  const onChangeNumber = (event) => {
    setNumber(event.target.value)
  }
  const onChangeComplement = (event) => {
    setComplement(event.target.value)
  }
  const onChangeDistrict = (event) => {
    setDistrict(event.target.value)
  }
  const onChangeCity = (event) => {
    setCity(event.target.value)
  }
  const onChangeState = (event) => {
    setState(event.target.value)
  }

  console.log(street)
  console.log(number)
  console.log(complement)
  console.log(district)
  console.log(city)
  console.log(state)

  return (
    <Container>
      <Header>
        <ButtonBack><ArrowBackIosNewIcon /></ButtonBack>
        <Tittle>Endereço</Tittle>
      </Header>
      <TextField
        value={street}
        onChange={onChangeStreet}
        required
        fullWidth="fullWidth"
        label="Logradouro"
        placeholder="Rua"
        variante="filled"
      />
      <TextField
        value={number}
        onChange={onChangeNumber}
        type="number"
        required
        fullWidth="fullWidth"
        label="Número"
        placeholder="72"
        variante="filled"
      />
      <TextField
        value={complement}
        onChange={onChangeComplement}
        required
        fullWidth="fullWidth"
        label="Complemento"
        placeholder="Apto./Bloco"
        variante="filled"
      />
      <TextField
        value={district}
        onChange={onChangeDistrict}
        required
        fullWidth="fullWidth"
        label="Bairro"
        placeholder="Bairro"
        variante="filled"
      />
      <TextField
        value={city}
        onChange={onChangeCity}
        required
        fullWidth="fullWidth"
        label="Cidade"
        placeholder="Cidade"
        variante="filled"
      />
      <TextField
        value={state}
        onChange={onChangeState}
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

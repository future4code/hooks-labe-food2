import React, { useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import {URL_BASE, axiosConfig} from "../../constants/URL_BASE"
import { ContainerFoter, Container, ContainerTitle, ContainerAdress, Title, DeliveryAddress, Address } from './styles'

const Cart = () => {
  const [fullAddress, setFullAddress] = useState('')
  const [hasRequest, setHasRequest] = useState(false)


  const getFullAddress = () => {
    axios
    .get(`${URL_BASE}/profile/address`, axiosConfig)
    .then(res => {
      const address = `${res.data.address.street}, ${res.data.address.number}`
      setFullAddress(address)
    })
    .catch(err => console.log(err))
  }

  getFullAddress()
  return (
    
      <Container>
        <ContainerTitle>
          <Title>Meu carrinho</Title>
        </ContainerTitle>

        <ContainerAdress>
          <DeliveryAddress>Enderço de entrega</DeliveryAddress>
          <Address>{fullAddress}</Address>
        </ContainerAdress>

        <ContainerFoter>
          <Footer />
        </ContainerFoter>
      </Container>
  );
}

export default Cart;
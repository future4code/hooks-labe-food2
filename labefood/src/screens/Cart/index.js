import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import { URL_BASE, axiosConfig } from "../../constants/URL_BASE"
import { ContainerFoter, Container, ContainerTitle, ContainerAdress, Title, DeliveryAddress, Address } from './styles'


const Cart = () => {

  const [fullAddress, setFullAddress] = useState('')
  const [hasOrder, setHasOrder] = useState(false)
  const [order, setOrder] = useState({})
  
  const getActiveOrder = () => {
    axios
    .get(`${URL_BASE}/active-order`, axiosConfig)
    .then(res => {
      setOrder(res.data)
      console.log("pedido",order)
      if(order.order === null){
        setHasOrder(false)
      } else {
        setHasOrder(true)
      }
    })
    .catch(err => console.log(err))
  }
  
  const getFullAddress = () => {
    axios
      .get(`${URL_BASE}/profile/address`, axiosConfig)
      .then(res => {
        const address = `${res.data.address.street}, ${res.data.address.number}`
        setFullAddress(address)
      })
      .catch(err => console.log(err))
    }

    const isEmpty = () => {
      if(hasOrder === true){
        return <p>Tem pedido</p>
      } else{
        return <h3>Carrinho vazio</h3>
    }
  }
    
    useEffect(() => {
      getFullAddress()
      getActiveOrder()
    }, [])

  return (

    <Container>
      <ContainerTitle>
        <Title>Meu carrinho</Title>
      </ContainerTitle>

      <ContainerAdress>
        <DeliveryAddress>Enderço de entrega</DeliveryAddress>
        <Address>{fullAddress}</Address>
      </ContainerAdress>

      {isEmpty()}

      <ContainerFoter>
        <Footer />
      </ContainerFoter>
    </Container>
  );
}

export default Cart;
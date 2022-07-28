import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import { URL_BASE, axiosConfig } from "../../constants/URL_BASE"
import {  Container, ContainerTitle, ContainerAdress, Title, DeliveryAddress, Address } from './styles'
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";
import ProductsCard from "../../components/ProductCard/ProductsCard";


const Cart = () => {
  const {removeProductInCart, cart} = useContext(GlobalStateContext)
  const [fullAddress, setFullAddress] = useState('')

 
  
 const cartIsEmpty = () =>{
  if(cart.length === 0){
      return <p>Carrinho vazio</p>
    } else{
      return renderProductsInCart
    }
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
    

    const renderProductsInCart = cart && cart.map((foods) => {
      return (
      <ProductsCard 
      key={foods.id} 
      foods={foods}
      action={() =>removeProductInCart(foods)}
      txtButton={"Remover"}
      />)
    })

    useEffect(() => {
      getFullAddress()
    }, [])


  return (
<div>

    <Container>
      <ContainerTitle>
        <Title>Meu carrinho</Title>
      </ContainerTitle>

      <ContainerAdress>
        <DeliveryAddress>Enderço de entrega</DeliveryAddress>
        <Address>{fullAddress}</Address>
      </ContainerAdress>

      {cartIsEmpty()}

    
      
    </Container>
    <Footer />
</div>
  );
}

export default Cart;
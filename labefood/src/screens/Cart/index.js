import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import { URL_BASE, axiosConfig } from "../../constants/URL_BASE"
import { Container, ContainerTitle, ContainerAdress, Title, DeliveryAddress, Address, ContainerRestaurant } from './styles'
import GlobalStateContext from "../../GlobalStateContext/GlobalStateContext";
import ProductsCard from "../../components/ProductCard/ProductsCard";



const Cart = () => {
  const { removeProductInCart, cart } = useContext(GlobalStateContext)
  const [fullAddress, setFullAddress] = useState('')


  const cartIsEmpty = () => {
    if (cart.length === 0) {
      return <p>Carrinho vazio</p>
    } else {
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
        action={() => removeProductInCart(foods)}
        txtButton={"Remover"}
      />)
  })

  const prices = cart && cart.map((products) => {
    return products.quantity * products.price
  })

  let totalPrices = 0
  const getTotalPrices = () => {
    if (cart.length !== 0) {

      for (let i = 0; i < prices.length; i++) {
        totalPrices += prices[i]
      }
      return <p>R$ {totalPrices.toFixed(2)}</p>
    } else {
      return null
    }
  }

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

        <ContainerRestaurant>
          <p>as infos do restaurante vão aqui</p>
        </ContainerRestaurant>

        {/* <ContainerProducts>
          {cartIsEmpty()}
        </ContainerProducts> */}

        <div>
          <p>Subtotal</p>
          <p>{getTotalPrices()}</p>
          <hr />
          <input type="radio" id="money" name="money" />
          <label for="money">Dinheiro</label>
          <input type="radio" id="credCard" name="money" />
          <label for="credCard">Cartão de crédito</label>
        </div>

      </Container>
      <Footer />
    </div>
  );
}

export default Cart;
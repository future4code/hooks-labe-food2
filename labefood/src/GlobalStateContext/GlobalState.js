import React, { useState } from 'react'
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  
  const [cart, setCart]= useState([])

 const addProduct = (product) => {

  const index = cart.findIndex((productIndCart)=>{
    if (productIndCart.id === product.id) {
        return true
    } else {
        return false
    }
  })
  if(index === -1) {
    const novoProduto = {
      ...product, 
        quantity:1
    }
    const newCart = [...cart,novoProduto]
    setCart(newCart)
    alert("Produto adicionado")
  }
  else{
    const newCart = cart.map((productIndCart)=>{
      if (productIndCart.id === product.id){
        return {...productIndCart, quantity : productIndCart.quantity +1}
      }
      else{
        return productIndCart
      }
      
    })
    setCart(newCart)
      alert("+ 1 produto add")
  }
 }

const teste ={
addProduct,
cart

}

  return (
   <GlobalStateContext.Provider value={teste} >
      {props.children}
   </GlobalStateContext.Provider>
  )
}

export default GlobalState
import React from "react";
import {Container} from './styles';


const CardRestaurant=(props)=>{
    const {name, address, deliveryTime} = props
        
  return (
   <Container>
        <p>{name}</p>
        <p>{address}</p>
        <p>{deliveryTime}</p>
   </Container>
  );
}

export default CardRestaurant;
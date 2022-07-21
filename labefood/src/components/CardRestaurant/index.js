import React from "react";
import {Container} from './styles';
import img from './image.png'

const CardRestaurant=()=>{
  return (
   <Container>
        <img src={img} alt="restaurant pic" />
   </Container>
  );
}

export default CardRestaurant;